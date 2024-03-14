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
        // console.log('start action')
        event.preventDefault();
        event.stopPropagation();
        setIsDragging(true);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        // console.log('over action')
        event.preventDefault();
        event.stopPropagation();
        if(!isDragging)setIsDragging(true);
    };

    const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
        // console.log('leave action')
        setIsDragging(false);
    };

    return {
        selectImage,
        selectImagePath,
        isDragging,
        handleFileSelect,
        handleDragStart,
        handleDragOver,
        handleDragLeave
    }
}
