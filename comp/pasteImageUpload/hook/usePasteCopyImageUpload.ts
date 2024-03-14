import React, {useState} from "react";


export const usePasteCopyImageUpload = () => {
    const [ selectImage, setSelectImage ] = useState<File | null>(null);
    const [ selectImagePath, setSelectImagePath ] = useState('');

    const handlePaste = async (event: React.ClipboardEvent<HTMLInputElement>) => {
        const items = event.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.type.indexOf('image') !== -1) {
                const blob = item.getAsFile();
                if(!blob) return;
                const file = new File([blob], blob.name, { type: blob.type });
                // 파일 업로드 함수 호출
                setSelectImage(file);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onloadend = () => {
                    if(reader.result && typeof reader.result === 'string') setSelectImagePath(reader.result);
                }
            }
        }
    }

    const handleRemoveImage = () => {
        setSelectImage(null);
        setSelectImagePath('');
    }

    return {
        selectImage,
        selectImagePath,
        handlePaste,
        handleRemoveImage
    }
}
