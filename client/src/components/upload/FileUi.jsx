import { useState } from 'react'
import { Dropzone, FileMosaic, FullScreen, ImagePreview, VideoPreview } from "@files-ui/react";
import { toastLoading, toastSuccess } from '../toast';

const FileUi = ({ api, title, header, footer }) => {
    const [extFiles, setExtFiles] = useState([]);
    const updateFiles = (incommingFiles) => {
        setExtFiles(incommingFiles);
    };
    const onDelete = (id) => {
        setExtFiles(extFiles.filter((x) => x.id !== id));
    };
    const handleStart = () => {
        toastLoading('video', 'Đang tải file...')
    };
    const handleFinish = (uploadedFiles) => {
        toastSuccess('video', 'Tải file thành công')
        setExtFiles([])
    };
    const handleAbort = (id) => {
        setExtFiles(
            extFiles.map((ef) => {
                if (ef.id === id) {
                    return { ...ef, uploadStatus: "aborted" };
                } else return { ...ef };
            })
        );
    };
    const handleCancel = (id) => {
        setExtFiles(
            extFiles.map((ef) => {
                if (ef.id === id) {
                    return { ...ef, uploadStatus: undefined };
                } else return { ...ef };
            })
        );
    };
    return (
        <>
            <Dropzone
                style={{ width: '100%', height: 300 }}
                onChange={updateFiles}
                minHeight="195px"
                value={extFiles}
                accept="image/*, video/*"
                // maxFiles={3}
                // maxFileSize={2 * 1024 * 1024}
                label={title}
                groupUpload={false}
                uploadConfig={{
                    autoUpload: true,
                    url: api,
                    method: "POST",
                    uploadLabel: 'fileVideo'
                    // cleanOnUpload: true
                }}
                onUploadStart={handleStart}
                onUploadFinish={handleFinish}
                headerConfig={{ customHeader: header }}
                footerConfig={{ customMessage: footer }}
            >
                {extFiles.map((file) => (
                    <FileMosaic
                        {...file}
                        key={file.id}
                        onDelete={onDelete}
                        onAbort={handleAbort}
                        onCancel={handleCancel}
                        resultOnTooltip
                        alwaysActive
                        preview
                        info
                    />
                ))}
            </Dropzone>
        </>
    )
}

export default FileUi