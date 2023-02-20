
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Dashbord from "./pages/dashbord/Dashbord";
import { useState,useEffect } from "react";
import axios from "axios";

import { BrowserRouter , Routes, Route } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import { Await } from "react-router-dom/dist";
import Manage from "./pages/Manage/Manage";





function App() {



  const [blogs,setBlogs] = useState([]);
  const Fetch = async()=>{
   const response= await axios.get("https://blogzilha-piyj.onrender.com/api/stories");
   const data= response.data.data
   console.log(data)
 return data;

  }
  useEffect(()=>{
 const getBlogs =async()=>{
   const blogg= await Fetch()
   setBlogs(blogg)

 }

  getBlogs()},[])

console.log(blogs);
  return (
    <BrowserRouter>

    
      <Routes>
        <Route  path="/"  element={<Homepage blogs={blogs} />} > 
        </Route>
        <Route path="/register"  element={< Register />}> 
        </Route>
        <Route path="/login"   element={<Login />}></Route>
        <Route path="/:blogId" element={<Single blogs={blogs} />}> 
        </Route>
        <Route path="/write"  element ={<Write />}  > </Route>
        <Route path="/settings"   element= {<Settings />}  > 
        </Route>
    
        <Route path="/Dashbord"   element={<Dashbord blogs={blogs} />}> </Route>

       <Route path="/SinglePost"    element={<SinglePost />}></Route>
       <Route path="/Manage"    element={<Manage/>}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
