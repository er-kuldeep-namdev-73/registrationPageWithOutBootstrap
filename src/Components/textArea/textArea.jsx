import React from "react";
import Label from "../label/label";
import "./textArea.css"
const TextArea = ({labelName,fieldType,placeHolderName="Default Value",name,manageData,data})=>{
    return (
        <>
        {
                labelName ? <Label name={labelName}/> : null
            }
            <textarea type={fieldType} placeholder={placeHolderName} className="textArea" name={name} onChange={manageData} data={data}></textarea>
        </>
    )
}

export default TextArea;