import React from "react";
import { PasswordInput, TextInputs } from "../utils/Reuse/Inputs/Inputs";

import Button from "../utils/Reuse/Button";
import { Link } from "react-router-dom";

interface Props{
    user:{ username: string; password: string };
    onClick:(e: React.MouseEvent)=>void;
    setUser: React.Dispatch<React.SetStateAction<{ username: string; password: string }>>;
}
const LoginForm:React.FC<Props> = ({user,onClick,setUser}) => {
    const handleUsername = (newValue: string) => {
        setUser((prevUser) => ({
          ...prevUser,
          username: newValue,
        }));
      };
      const handlePassword = (newValue: string) => {
        setUser((prevUser) => ({
          ...prevUser,
         password: newValue,
        }));
      };
    


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
        <TextInputs value={user.username} onChange={(e) => handleUsername(e.target.value)} label={"Username"} type={"text"}/>
        <PasswordInput value={user.password} onChange={(e) => handlePassword(e.target.value)} label={"Password"} />

        <div className="w-full  flex">
         <Button onClick={onClick } label={"Login"}/>
        </div>
        <div className="gap-1 flex">
          <span>Don't have an account?</span>
          <Link to={"register"} className="font-bold">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
