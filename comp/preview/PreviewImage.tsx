import {usePreviewImage} from "./hook/usePreviewImage";


export const PreviewImage = () => {
    const { image, imageReaderPath, onChangeImage } = usePreviewImage();


    console.log(image);
    return (
        <div>
            <input type={'file'} onChange={onChangeImage}/>
            <img src={imageReaderPath}/>
        </div>
    )
}
