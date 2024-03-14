import {ChangeEvent, useState} from "react";

interface Param {
    allowedExtension?: string[];
}

export const usePreviewImage = ({ allowedExtension = ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'] }: Param) => {

    const [image, setImage] = useState<File | null>(null);
    const [imageReaderPath, setImageReaderPath] = useState('');
    // allowedExtension = allowedExtension ? allowedExtension : ['image/jpeg', 'image/jpg', 'image/png','image/gif','image/bmp'];
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

    return {
        image,
        imageReaderPath,
        onChangeImage
    }
}
