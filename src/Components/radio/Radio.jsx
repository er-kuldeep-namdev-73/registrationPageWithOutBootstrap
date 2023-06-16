import React from 'react';
import Input from '../Input/input';
import Label from '../label/label';
const Radio = ({labelName,fieldName,manageData}) => {

  return (
    <>
         {
            labelName ? <Label name={labelName}/> : null
         }
        <span>
            {
               fieldName.map((data,index)=>{
                    return (<span key={index}>
                        <Input fieldType={"radio"}  name="gender" svalue={data} manageData={manageData}/>{data}
                        
                        </span>
   
                    )
               })
            }
        </span>
    </>
  )
}

export default Radio