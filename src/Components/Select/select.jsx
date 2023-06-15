import React from "react";
import Label from "../label/label";
const Select = ({labelName,fieldName,value,name})=>{
    return (
        <>
        {
                labelName ? <Label name={labelName}/> : null
            }
            <select onChange={value} name={name}>
                {
               fieldName.map((data,index)=>{
                    return (
                        <option key={index} value={data}>{data}</option>
                    )
               })
            }
            </select>
        </>
    )
}

export default Select;