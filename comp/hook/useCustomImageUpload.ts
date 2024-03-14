import React, {useRef} from "react";


export const useCustomImageUpload = (): [ React.MutableRefObject<any>, () => void] => {
    const inputRef = useRef<any>();

    const handleOnClickRef = () => {
        inputRef.current?.click();
    }

    return [inputRef, handleOnClickRef];
}
