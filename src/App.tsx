import "./App.css";
// import Login from "./pages/Login";
import {RouterProvider} from 'react-router-dom'
import router from "./utils/routes/routes";
function App() {
  return (
//     <div className="w-screen h-screen justify-center flex items-center ">
//       <Router>
// <Routes>

// </Routes>
//       <Login />
//       </Router>
//     </div>
<>
<RouterProvider router={router}/>
</>
  );
}

export default App;
