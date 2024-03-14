import {usePreviewImage} from "./hook/usePreviewImage";
import {useCustomImageUpload} from "../hook/useCustomImageUpload";


export const PreviewImage = () => {
    const { image, imageReaderPath, onChangeImage, handleRemoveImage } = usePreviewImage();
    const [ ref, onClick] = useCustomImageUpload();

    return (
        <div className={'workspace'}>
            <input
                type={'file'}
                style={{ display: 'none' }}
                onChange={onChangeImage}
                ref={ref}
            />
            <div className={'row end'} style={{ width: '500px', marginBottom: 10 }}>
                {
                    image && <button type={'button'} onClick={handleRemoveImage}>삭제</button>
                }
            </div>
            <div className={'image_upload_form'}>
            {
                    image ? <img src={imageReaderPath} alt={'image'}/> : <span onClick={onClick}>파일 업로드</span>
                }
            </div>
        </div>
    )
}
