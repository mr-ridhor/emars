import React from 'react'
import { PasswordInput, TextInputs } from '../utils/Reuse/Inputs/Inputs'
import { Link } from 'react-router-dom'
import Button from '../utils/Reuse/Button';


interface RegProps{
  user:({username:string,password:string,dob:string,name:string,email:string})
  onClick:(e: React.MouseEvent)=>void;
  setUser: React.Dispatch<React.SetStateAction<{username:string,password:string,dob:string,name:string,email:string}>>;

}
const RegisterForm:React.FC<RegProps> = ({
 user,setUser,onClick
}) => {
  const handleName=(newValue:string)=>{
    setUser((prevUser) => ({
      ...prevUser,
      name: newValue,
    }));
  }
  const handleUsername=(newValue:string)=>{
    setUser((prevUser) => ({
      ...prevUser,
      username: newValue,
    }));
  }
  const handleEmail=(newValue:string)=>{
    setUser((prevUser) => ({
      ...prevUser,
      email: newValue,
    }));
  }
  
  const handlePassword=(newValue:string)=>{
    setUser((prevUser) => ({
      ...prevUser,
      password: newValue,
    }));
  }
  const handleDob=(newValue:string)=>{
    setUser((prevUser) => ({
      ...prevUser,
      dob: newValue,
    }));
  }
  return (
    <div>
    <div className=" text-xl mt-5 font-bold text-center  flex justify-center">
      <div className="border flex justify-around w-32 rounded-md">
        <span className="w-1/2">Shop</span>
        <span className="h-full  bg-gray-500 w-[0.5px]"></span>
        <span className="w-1/2 bg-blue-400 text-white">dn</span>
      </div>
    </div>
    <div className="flex gap-3 flex-col px-3">
      <TextInputs value={user.name} onChange={(e) => handleName(e.target.value)} label={"Name"} type={"text"}/>
      <TextInputs value={user.username} onChange={(e) => handleUsername(e.target.value)} label={"Username"} type={"text"}/>
      <TextInputs value={user.email} onChange={(e) => handleEmail(e.target.value)} label={"Email"} type={"email"}/>
      <TextInputs value={user.dob} onChange={(e) => handleDob(e.target.value)} label={"Date of birth"} type={"date"}/>
      <PasswordInput value={user.password} onChange={(e) => handlePassword(e.target.value)} label={"Password"} />
      {/* <PasswordInput value={user.confirmPassword} onChange={(e) => handlePassword(e.target.value)} label={"Confirm Password"} /> */}

      <div className="w-full  flex">
        {/* <button onClick={onClick} className="bg-green-300 w-full p-2 rounded-md  text-white font-bold">
          Login
        </button> */}
        <Button onClick={onClick } label={'Register'}/>
      </div>
      <div className="gap-1 flex">
        <span>Already have an account?</span>
        <Link to={"/"} className="font-bold">Login</Link>
      </div>
    </div>
  </div>
  )
}

export default RegisterForm