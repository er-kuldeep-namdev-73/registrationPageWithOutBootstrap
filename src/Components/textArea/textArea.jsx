import React from "react";
import Label from "../label/label";
import "./textArea.css"
const TextArea = ({labelName,fieldType,placeHolderName="Default Value",name,value})=>{
    return (
        <>
        {
                labelName ? <Label name={labelName}/> : null
            }
            <textarea type={fieldType} placeholder={placeHolderName} className="textArea" name={name} onChange={value}></textarea>
        </>
    )
}

export default TextArea;