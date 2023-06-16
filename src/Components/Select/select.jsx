import React from "react";
import Label from "../label/label";
const Select = ({labelName,fieldName,manageData,name})=>{

    return (
        <>
            {
                labelName ? <Label name={labelName}/> : null
            }
            <select onChange={manageData} name={name} >
                {

                   fieldName.map((data,index)=>{
                    return (
                        <option key={index} value={data} >{data}</option>
                    )
               })
            }
            </select>
        </>
    )
}

export default Select;