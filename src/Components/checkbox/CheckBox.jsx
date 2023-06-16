import Label from '../label/label';
const CheckBox = ({labelName,fieldName, updateSkills,type}) => {

  function handleChange(e)
  {
    updateSkills(e);
  }

  return (
    <>
          {
              labelName ? <Label name={labelName}/> : null
          }
        <span>
            {
               fieldName.map((data,index)=>{
                    return (<div key={index} >
                          <input type={type} onClick={handleChange} value={data}/>{data}
                          {/* <Label name={data }/> */}
                        </div>
                    )
               })
            }
        </span>
    </>
  )
}

export default CheckBox;