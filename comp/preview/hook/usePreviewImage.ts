import {ChangeEvent, useState} from "react";

export const usePreviewImage = () => {

    const [image, setImage] = useState<File | null>(null);
    const [imageReaderPath, setImageReaderPath] = useState('');
    const allowedExtension =  ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'];
    const onChangeImage = (e:  ChangeEvent<HTMLInputElement>
    ) => {
        const files = e.target.files;
        const image = files?.item(0);
        if(!image) return;
        if(!validate(image)) return alert("허용되는 이미지 확장자가 아닙니다 확인부탁드립니다.");
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = () => {
            if(reader.result && typeof reader.result === 'string') setImageReaderPath(reader.result);
        }
        setImage(image);
    }

    const validate = (file: File) => {
        return allowedExtension.indexOf(file.type) > -1;
    }

    const handleRemoveImage = () => {
        setImage(null);
        setImageReaderPath('');
    }

    return {
        image,
        imageReaderPath,
        onChangeImage,
        handleRemoveImage
    }
}
