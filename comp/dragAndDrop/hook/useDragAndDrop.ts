import React, {useState} from "react";


export const useDragAndDrop = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [selectImage, setSelectImage] = useState<File | null>(null);
    const [selectImagePath, setSelectImagePath] = useState('');

    const handleFileSelect = (event: React.DragEvent<HTMLDivElement>) => {
        // console.log('작동?')
        event.preventDefault();
        event.stopPropagation();
        const file = event.dataTransfer.files.item(0);
        if(!file) {
            setIsDragging(false);
            return;
        }
        setSelectImage(file);
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            if (reader.result && typeof reader.result === 'string') setSelectImagePath(reader.result);
        }
        setIsDragging(false);
    };

    const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
        if(!isDragging)setIsDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        setIsDragging(false);
    };

    const handleRemoveImage = () => {
        setSelectImage(null);
        setSelectImagePath('');
    }

    return {
        selectImage,
        selectImagePath,
        isDragging,
        handleFileSelect,
        handleDragStart,
        handleDragOver,
        handleDragLeave,
        handleRemoveImage
    }
}
