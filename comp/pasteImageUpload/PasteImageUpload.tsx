import {usePasteCopyImageUpload} from "./hook/usePasteCopyImageUpload";


export const PasteImageUpload = () => {
    const { selectImage, selectImagePath, handlePaste } = usePasteCopyImageUpload();
    return (
        <div className={'workspace'}>
            test
            <input onPaste={handlePaste} />
            <div>
                {selectImage &&
                    <div>
                        <img src={selectImagePath} alt={'이미지'}/>
                        <p>{selectImage.name}</p>
                    </div>
                }
            </div>
        </div>
    )
}
