import Input from '../Input/input';
import Label from '../label/label';
const CheckBox = ({labelName,fieldName,name,data}) => {

  let skills = [];

  function updateSkills(e)
  {

    let val = e.target.value;
    if(e.target.checked && !skills.includes(val))
      skills = [...skills,  val];
    
    if(e.target.checked===false && skills.includes(val))
    {
      skills= skills.filter((skill)=>skill!==val);
    }
    data.skills=skills;
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
                        <Input fieldType={"checkBox"} name={name} onUpdate={updateSkills} svalue={data}/>{data}
                        </div>
                    )
               })
            }
        </span>
    </>
  )
}

export default CheckBox;