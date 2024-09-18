import React, { useEffect, useState } from 'react'
import LayoutAdmin from '~/components/layout/Admin/Layout'
import GrapeJs from '~/components/grapeJs/GrapeJs'
import pluginWebpage from 'grapesjs-preset-webpage';
import blockBasic from 'grapesjs-blocks-basic';
import pluginStyleBg from 'grapesjs-style-bg';

import pluginFlexbox from '~/components/grapeJs/Custom/Block/FlexBox/';
import pluginFlexrow from '~/components/grapeJs/Custom/Block/FlexRow';

import { Block } from '~/components/grapeJs/Block/index';
import { layoutApi } from '~/apis/layoutApi';
import { toastError, toastLoading, toastSuccess } from '~/components/toast';
import { id_layout } from '~/utils/index'
import { useDispatch, useSelector } from 'react-redux';
import { getPluginsScriptApi } from '~/redux/slices/Data/pluginsScriptSlice';
import { Styles } from '~/components/grapeJs/Style';

const Pages = () => {
    const [page, setPage] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);

    const datascript = useSelector((state) => state.pluginsScript.pluginsScript);
    const loadingscript = useSelector((state) => state.pluginsScript.loading);

    const dispatch = useDispatch();

    const putPages = (pageEdit, page) => {
        const date = new Date();
        const { html, css, js } = page;

        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const headerElement = doc.querySelector('#Header');
        const footerElement = doc.querySelector('#Footer');

        let Header = '';
        let Footer = '';

        const bodyContent = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyContent && bodyContent[1].trim() === '') {
            console.log('không có dữ liệu');
        }

        if (!headerElement) {
            toastError('Chưa có Header!');
            return;
        }

        if (!footerElement) {
            toastError('Chưa có Footer!');
            return;
        }

        if (headerElement) {
            Header = `<div class="${headerElement.className}">${headerElement.innerHTML}</div>`;
        }

        if (footerElement) {
            Footer = `<div id="Footer">${footerElement.innerHTML}</div>`;
        }

        toastLoading(date, 'Đang cập nhật...');
        layoutApi.putLayout(id_layout, {
            header: Header,
            footer: Footer,
            css: css,
            js: js,
            edit: pageEdit
        })
            .then(() => {
                toastSuccess(date, 'Cập nhật thành công');
            })
            .catch((err) => {
                toastError(err.response.data.message);
            })
    }

    const configGrapeJs = (editor) => {
        editor.loadProjectData(page.edit);

        const blocksToRemove = [
            'video',
            'map',
            'video',
            'bootstrapIcon',
            'map',
            'model-3D',
            'Masonry',
            'quote',
            "link-block",
            'text-basic',
            'text-section',
            'column1',
            'column2',
            'column3',
            'column3-7',
        ];

        const buttonsToRemove = [
            'gjs-open-import-webpage',
            'open-templates',
            'link-page',
            'export-template'
        ];

        const categoriesToClose = [
            "Extra",
            "Blog",
            "Layout",
            "Short Codes"
        ];

        const { models: categories } = editor.BlockManager.getCategories();

        blocksToRemove.forEach(block => editor.BlockManager.remove(block));
        buttonsToRemove.forEach(buttonId => { editor.Panels.removeButton('options', buttonId) });
        categories.forEach(category => categoriesToClose.includes(category.get?.('id')) && category.set('open', false));
    }

    useEffect(() => {
        layoutApi.getLayoutEdit().then((page) => {
            setPage(page[0]);
            setIsLoaded(true);
        })
    }, []);

    useEffect(() => {
        if (loadingscript === true) {
            dispatch(getPluginsScriptApi());
        }
    }, []);

    return (
        <LayoutAdmin
            margin={0}
            header={'BỐ CỤC WEBSITE'}
        >
            {!isLoaded && (
                <div>LOAdding</div>
            )}

            {isLoaded && (
                <GrapeJs
                    height='calc(100vh - 56px)'
                    configGrapeJs={configGrapeJs}
                    scripts={datascript[0]?.scripts}
                    styles={datascript[0]?.styles}
                    pluginss={[
                        {
                            id: 'grapesjs-component-icon',
                            src: 'http://localhost:8082/plugins/Icon/Indexlayout.js',
                        },
                        {
                            id: '@silexlabs/grapesjs-filter-styles',
                            src: 'https://unpkg.com/@silexlabs/grapesjs-filter-styles@1.0.0/dist/index.js',
                        },
                        {
                            id: 'grapesjs-parser-postcss',
                            src: 'https://unpkg.com/grapesjs-parser-postcss@1.0.3/dist/index.js',
                        },
                    ]}
                    plugins={[
                        pluginWebpage,
                        blockBasic,
                        pluginStyleBg,
                        pluginFlexbox,
                        pluginFlexrow,
                        Block.imageLink,
                        Block.header,
                        Block.footer,
                        Block.container,
                        Block.user,
                        Styles.customType,
                        Styles.customTypeSelect
                    ]}
                    savePage={putPages}
                />
            )}

        </LayoutAdmin>
    )
}

export default Pages