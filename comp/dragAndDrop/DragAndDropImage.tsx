import React from "react";
import {useDragAndDrop} from "./hook/useDragAndDrop";
import {useCustomImageUpload} from "../hook/useCustomImageUpload";


export const DragAndDropImage = () => {
    const [ ref, onClick] = useCustomImageUpload();
    const {
        isDragging,
        selectImage,
        selectImagePath,
        handleFileSelect,
        handleDragStart,
        handleDragOver,
        handleDragLeave,
        handleRemoveImage
    } = useDragAndDrop();

    return (
        <div
            className="workspace"
        >
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
            <div
                className={'image_upload_form'}
                onDragEnter={handleDragStart}
                onDrop={handleFileSelect}
                onDragOver={handleDragOver}
                onMouseOver={e => console.log('move')}
            >
                {isDragging ? (
                    <div
                        className="fileDropZone"
                        onDragLeave={handleDragLeave}
                    >
                        <div
                            style={{display: "flex"}}
                        >이미지를 업로드 해주세요.
                        </div>
                    </div>
                ) :
                    selectImage ? <img src={selectImagePath} alt={'image'}/> : <span>파일 업로드</span>
                }

            </div>
        </div>
    );
}
