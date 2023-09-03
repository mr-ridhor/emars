import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import axios from 'axios';
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  
  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("User details:", user);
    try {
      const response = await axios.post("http://localhost:8000/auth/login", {
        login: user.username, // Send the email as the identifier
        password: user.password,
      });
      setMessage(response.data.message);
      setErr(false);
      // Handle the successful login response here
      console.log("Login successful:", response);

      // Redirect the user or perform other actions as needed
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error("Login failed:", error);
      setErr(true);

      // Handle the error appropriately (e.g., show an error message to the user)
    }
  };
  return (
    <>
    <div className="w-screen h-screen justify-center flex items-center ">
      <div className=" bg-white  rounded-lg  shadow-lg w-[400px] max-h-[350px] p-2 h-[320px]">
        <span>{err ? <div>Invalid details</div> : <div>{message}</div>}</span>
        <LoginForm user={user} setUser={setUser} onClick={handleLogin} />
      </div>
    </div>
    </>
  );
};

export default Login;
