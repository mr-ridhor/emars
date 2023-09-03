import { createBrowserRouter,Route, createRoutesFromElements } from "react-router-dom";
import Login from "../../pages/Login";
import Register from "../../pages/Register";



 const router=createBrowserRouter(
    createRoutesFromElements(

    <Route>
        <Route element={<Login/>} path="/"/>
        <Route path="register" element={<Register/>}/>
        
    </Route>
    )
)

export default router

