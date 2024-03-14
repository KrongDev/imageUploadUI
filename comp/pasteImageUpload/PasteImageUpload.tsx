import {usePasteCopyImageUpload} from "./hook/usePasteCopyImageUpload";
import {useCustomImageUpload} from "../hook/useCustomImageUpload";


export const PasteImageUpload = () => {
    const [ ref, onClick ] = useCustomImageUpload();
    const { selectImage, selectImagePath, handlePaste, handleRemoveImage } = usePasteCopyImageUpload();
    return (
        <div className={'workspace'}>
            <input
                type={'file'}
                style={{display: 'none'}}
                // onChange={onChangeImage}
                ref={ref}
            />

            <div className={'row end'} style={{width: '500px', marginBottom: 10}}>
                {
                    selectImage && <button type={'button'} onClick={handleRemoveImage}>삭제</button>
                }
            </div>
            <div className={'image_upload_form'}>
                {
                    selectImage ? <img src={selectImagePath} alt={'image'}/> : <div>
                        <div>
                            <span onClick={onClick}>파일 업로드</span>
                        </div>
                        <div>
                            <input onPaste={handlePaste} placeholder={'이미지 복사 붙여넣기'}/>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
