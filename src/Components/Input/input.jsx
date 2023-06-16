import React from "react";
import Label from "../label/label";

const Input = ({ labelName, fieldType,placeHolderName="Default Value",name,manageData, svalue,})=>{


    function handleChange(e)
    {
        manageData(e);
    }

    return (
        <>
            {
                labelName ? <Label name={labelName}/> : null
            }
            <input type={fieldType} placeholder={placeHolderName} name={name} onChange={handleChange} value={svalue}/>
        </>
    )
}

export default Input;