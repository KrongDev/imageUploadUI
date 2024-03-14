import React from "react";
import {useDragAndDrop} from "./hook/useDragAndDrop";


export const DragAndDropImage = () => {
    const {
        isDragging,
        selectImage,
        selectImagePath,
        handleFileSelect,
        handleDragStart,
        handleDragOver,
        handleDragLeave
    } = useDragAndDrop();
    return (
        <div
            className="workspace"
            onDragEnter={handleDragStart}
            onDrop={handleFileSelect}
            onDragOver={handleDragOver}
        >
            {isDragging && (
                <div
                    className="fileUploadZone"
                    onDragLeave={handleDragLeave}
                >
                    <div
                        style={{display: "flex"}}
                    >이미지를 업로드 해주세요.</div>
                </div>
            )}
            <div className="file-upload-content">
                <p>이미지를 화면에 Drag 해주세요</p>
                <input type="text" placeholder="입력란"/>

                {selectImage && selectImagePath && (
                    // <div>
                    //     <p>선택된 파일: {selectImage.name}</p>
                    // </div>
                    <div className={'row'}>
                        <div className={'column image-container'}>
                            <img src={selectImagePath} alt={'이미지입니다.'}/>
                        </div>
                        <div className={'column'}>
                            <p>
                                {selectImage.name}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
