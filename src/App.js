import './App.css';
import Input from './Components/Input/input';
import Select from './Components/Select/select';
import Radio from './Components/radio/Radio';
import TextArea from './Components/textArea/textArea';
import CheckBox from './Components/checkbox/CheckBox';
import { useState } from 'react';
function App() {
  const [data,setData]=useState({
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
})
const[isSubmit,setisSubmit]=useState(false)
  const handlesubmit=(e)=>{

    e.preventDefault();
    console.log(data);
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
  return (
    <>
      <form className='Form' onSubmit={handlesubmit} >
        <h1>Registration From</h1>
      <Input labelName={"FirstName"}  fieldType={"text"} placeHolderName={"Enter Your FirstName"} value={handleData} name={"fname"}/>
      <Input labelName={"LastName"} fieldType={"text"} placeHolderName={"Enter Your LastName"} value={handleData} name={"lname"}/>
      <Input labelName={"Email"} fieldType={"email"} placeHolderName={"Enter Your Email"} value={handleData} name={"email"}/>
      <Input labelName={"Mobile Number"}fieldType={"number"} placeHolderName={"Enter Your Number"} value={handleData} name={"mobile"}/>
      <Input labelName={"Password"} fieldType={"password"} placeHolderName={"Enter Your Password"} value={handleData} name={"password"}/>
      <Select labelName={"City"} fieldName={["--Please Select--","Delhi","Kanpur","Lucknow","Mahoba","Hamirpur","Jhansi"]} value={handleData} name={"city"}/>
      <Input labelName={"File Upload"} fieldType={"file"} value={handleData} name={"file"}/>

      <CheckBox labelName={"Select Education : "} fieldName={["10+2","Diploma","B.Tech","M.Tech","BCA","MCA"]} value={handleData} name={"skills"} data={data}/>

      <Radio labelName={"Select Gender : "} fieldName={["Male","Female","Other"]} value={handleData}/>

      <TextArea labelName={"Comment : "} placeHolderName={"Please Enter Comment"} value={handleData} name={"address"}/>
      <div style={{display:"flex"}}>
      <Input fieldType={"submit"}/>
      <Input fieldType={"reset"}/>
      </div>
      </form>
      <p>
        {isSubmit && JSON.stringify(data)}
      </p>
    </>
  );
}

export default App;
