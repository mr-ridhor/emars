import  { useState } from 'react'
import RegisterForm from '../components/RegisterForm'

const Register = () => {
  const [user,setUser]=useState({
    name:"",
    email:"",
    username:"",
    dob:"",
    password:""
  })
  const handleRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("User details:", user);
  };
  return (
    <div className="w-screen h-screen justify-center flex items-center ">

    <div className=" bg-white  rounded-lg  shadow-lg w-[400px] max-h-[650px]  h-[590px]">
    <RegisterForm user={user} setUser={setUser} onClick={handleRegister}/>
    </div>
    </div>
  )
}

export default Register