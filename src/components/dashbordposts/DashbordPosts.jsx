
import "./Dashbordposts.css";
import { Link } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai'
import { useForm } from "react-hook-form";


import {AiFillEdit} from 'react-icons/ai'
import { useState, useEffect } from "react";
import axios from "axios";
export default function DashbordPosts({blogs}) {
  const [modal, setModal] = useState(false);
  const[selected,setSelected]= useState(null);
  const {register,handleSubmit,reset}=useForm({
    defaultValues:{
      title: selected?.title,
      body: selected?.body,
    },
  });
  const onSubmit =  async ({imageUrl, title, body})=>{

    
      const formData= new FormData();
    formData.append("title",title);
    formData.append("description", body);
    formData.append("image", imageUrl[0]);
    try {

    await axios.put(`https://blogzilha-piyj.onrender.com/api/stories/${selected._id}`,formData,{
      headers:{
        "content-Type":"multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem('token')}` 
      }
    
    });
   alert('updated successfully');
   window.location.reload(true);
  }
  catch(error){
    console.log(error.response)
  }

    
  }
const getSingle =  async (id) =>{
  const selectedBlog = blogs.find((blog) => blog._id === id);
  setSelected(selectedBlog);
  reset();
  console.log(selectedBlog);
}
useEffect(() => {
  reset(selected);
}, [selected]);

  const handleDelete = async (id) => {
    try{
      await axios({
        method: 'DELETE',
      url: `https://blogzilha-piyj.onrender.com/api/stories/${id}`,
      headers: {
        "content-Type": "multipart/form-data",
      },

    });
    window.location.reload(true);

    } catch(error){
      console.log(error.response);
    }
  }
  return (
    <>
   
   <div className="posts" id="posts">
    {
  blogs.map((item)=>{
      return(
        <div className="post" id="post">
      <img
        className="postImg"
        src={item.imageUrl}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postedit">
          <AiFillEdit onClick={() =>{
            setModal(true);
            if(window.confirm("are you sure to edit this?")){
            
          
            getSingle(item._id);
          }
          }}/>
          </span>
          <span className="postdelete">
           <AiFillDelete onClick={() =>{
            if(window.confirm("are you sure to delete this?")){
              handleDelete(item._id);
            }
            
           }}/>
          </span>
        </div>
        <span className="postTitle">
          {/* <Link to={`${item._id}`} className="link"> */}
            {item.title}
          {/* </Link> */}
        </span>
        <hr/>
      </div>
      <p className="postDesc">
        {item.body.slice(0,200 )+"..."}
         {/* <Link className="link"  id="read"to={`${item._id}`}> */}
       
          {/* Read more....react */}

        
        {/* </Link> */}
       
      </p>
      
    </div>



      )
    })

    }

    </div>
    <div  className="popup" style={{display: !modal? "none": "flex" }}>
    <main className="mai"  id="pi">
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
          <input id="fileInput" type="file" name="file" {...register ("imageUrl")} style={{display:"none"}} />
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
            className="writeInput writeText"
            name="body"
            {...register( "body")}
            placeholder="Add your blog story...."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          edit
        </button>
      </form>
      </div>
      </main>
    </div>
    </>
  );
}
