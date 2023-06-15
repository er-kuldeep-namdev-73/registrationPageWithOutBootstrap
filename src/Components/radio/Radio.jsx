import React from 'react';
import Input from '../Input/input';
import Label from '../label/label';
const Radio = ({labelName,fieldName, value}) => {

  return (
    <>
            {
                labelName ? <Label name={labelName}/> : null
            }
        <span>
            {
               fieldName.map((data,index)=>{
                    return (<>
                        <Input fieldType={"radio"} key={index} name={"gender"} innerValue = {data} value={value} />{data}
                        </>
                    )
               })
            }
        </span>
    </>
  )
}

export default Radio