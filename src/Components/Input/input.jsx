import React from "react";
import Label from "../label/label";

const Input = ({labelName, fieldType,placeHolderName="Default Value",name,value, onUpdate, svalue, innerValue})=>{


    function handleChange(e)
    {
        if(fieldType==="checkBox")
            onUpdate(e);
        else
            value(e);
    }

    return (
        <>
            {
                labelName ? <Label name={labelName}/> : null
            }
            <input type={fieldType} placeholder={placeHolderName} name={name} onChange={handleChange} value={ innerValue ? innerValue : svalue}/>
        </>
    )
}

export default Input;