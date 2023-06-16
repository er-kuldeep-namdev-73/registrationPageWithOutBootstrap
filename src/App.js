import './App.css';
import Input from './Components/Input/input';
import Select from './Components/Select/select';
import Radio from './Components/radio/Radio';
import TextArea from './Components/textArea/textArea';
import CheckBox from './Components/checkbox/CheckBox';
import { useState } from 'react';
let initialState = {
  fname:"",
  lname:"",
  email:"",
  mobile:"",
  password:"",
  city:"",
  file:"",
  address:"",
  skills:[],
  gender:"",
}
function App() {
  const [data,setData]=useState(initialState)

  const handlesubmit=(e)=>{

    e.preventDefault();
    console.log(data);
    e.target.reset();
    setData(initialState)
  }
  let handleData=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setData(flat=>{
      return {
        ...flat,[name]:value
      }
    })
  }

//checkbox code
function updateSkills(e)
  {
    /*console.log(e.target.value)*/
    if(e.target.checked){
      setData({...data, skills:[...data.skills,e.target.value]})
    }else{
      setData({...data, skills:[...data.skills.filter(data=> data!== e.target.value)]});
    }
  }
  
  return (
    <>
      <form className='Form' onSubmit={handlesubmit} >
        <h1>Registration From</h1>
      <Input  labelName={"FirstName"}  fieldType={"text"} placeHolderName={"Enter Your FirstName"} manageData={handleData} name={"fname"}/>
      <Input  labelName={"LastName"} fieldType={"text"} placeHolderName={"Enter Your LastName"} manageData={handleData} name={"lname"}/>
      <Input  labelName={"Email"} fieldType={"email"} placeHolderName={"Enter Your Email"} manageData={handleData} name={"email"}/>
      <Input  labelName={"Mobile Number"}fieldType={"number"} placeHolderName={"Enter Your Number"} manageData={handleData} name={"mobile"}/>
      <Input  labelName={"Password"} fieldType={"password"} placeHolderName={"Enter Your Password"} manageData={handleData} name={"password"}/>
      
      <Select labelName={"City"} fieldName={["--Please Select--","Delhi","Kanpur","Lucknow","Mahoba","Hamirpur","Jhansi"]} manageData={handleData} name={"city"} />

      <Input  labelName={"File Upload"} fieldType={"file"} manageData={handleData} name={"file"}/>

      <CheckBox type={"checkbox"} labelName={"Select Education : "} fieldName={["inter","Diploma","B.Tech","M.Tech","BCA","MCA"]} name={"skills"} data={data}  updateSkills={updateSkills} />

      <Radio labelName={"Select Gender : "} fieldName={["Male","Female","Other"]} manageData={handleData} name={"gender"}/>

      <TextArea labelName={"Address : "} placeHolderName={"Please Enter Address"} manageData={handleData} name={"address"} />
      <div style={{display:"flex"}}>
      <Input  fieldType={"submit"}/>
      <Input  fieldType={"reset"}/>
      </div>
      </form>
      
    </>
  );
}

export default App;
