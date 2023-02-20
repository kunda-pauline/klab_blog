import "./write.css";
import DashbordTopbar from "../../components/dashbordtopbar/DashbordTopbar";
import Dashbordside from "../../components/dashbordside/Dashbordside";
import { useForm } from "react-hook-form";
import axios  from  "axios";

export default function Write() {
  const {register,handleSubmit,reset}=useForm();
  // const onSubmit = data=> console.log(data)
  const onSubmit =  async (data)=>{

    
      const formData= new FormData();
    formData.append("title",data.title);
    formData.append("category",data.category);
    formData.append("body",data.body);
    formData.append("file", data.file[0]);
    try {

    await axios.post("https://blogzilha-piyj.onrender.com/api/stories",formData,{
      headers:{
        "content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    
    });
    alert("post successfully");
    reset()

  }
  catch(error){
    console.log(error.response)
  }

    
  }
  return (
    <>
    <DashbordTopbar/>
    <side>
      <Dashbordside/>
    </side>
    <main className="mai">
    <div className="write">
       <img
        className="writeImg"
        src="write.jpg"
        alt=""
      /> 
      <form className="writeForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" name="file" {...register ("file")} style={{display:"none"}} />
          <input
            className="writeInput"
            name="title"
            placeholder="Title"
            {...register("title")}
            type="text"
            autoFocus={true}
          />
          
        </div>
        <div className="writeFormGroup">
        <input
            className="writeInput"
            name="category"
            placeholder="Title"
            {...register("category")}
            type="text"
            placeholder="enter the category"
            autoFocus={true}
          />
         
          
        </div>
        <div className="writeFormGroup">
          <textarea
            className=" writeText"
            name="body"
            {...register( "body")}
            placeholder="Add your blog story...."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Post 
        </button>
      </form>
    </div>
    </main>
    </>
  );
}
