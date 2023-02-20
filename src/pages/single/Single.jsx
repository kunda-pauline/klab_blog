import Footer from "../../components/footer/Footer";
// import SinglePost from "../../components/singlePost/SinglePost";
import Topbar from "../../components/topbar/Topbar";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./single.css";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function Single({blogs}) {

  const {register,handleSubmit,reset}=useForm()
  const { blogId } = useParams();
const onSubmit= async(data)=>{
  try{
    await axios.post(`https://blogzilha-piyj.onrender.com/api/stories/${blogId}`,data
    );
    alert('comments posted');
  }
  catch(error){
    console.log(error.response);
  }
}
  // console.log(blogId);
  const single = blogs.find((item) => item._id === blogId);
  const {title,imageUrl,body} = single;
  return (
    <>
    <Topbar/>
    <div className="singlePost">{

    }



      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={imageUrl}
          alt=""
        />
        <h1 className="singlePostTitle">
       {title}
          
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                popo
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singlePostDesc">
         {body}
        </p>
      </div>
    </div>
    <div className="comment">
      <form className="comments" onSubmit={handleSubmit}>
       
      <textarea type="text" name="body" id="comment-text"
      placeholder="enter your comment here !!"></textarea><br/>
      <button className="Submite" type="submit">
          send comment
        </button>
        
       
      </form>
    </div>
      <Footer/>
      
    
    </>
  );
}
