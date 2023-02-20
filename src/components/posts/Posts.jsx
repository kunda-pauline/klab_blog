import Post from "../post/Post";
import "./posts.css";
import { Link } from "react-router-dom";

export default function Posts({blogs}) {
  return (
    <>
 
   <div className="posts">
     {
      blogs.map((item)=>{
        return(
<div className="post">
      <img
        className="postImg"
        src={item.imageUrl}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/posts?cat=Music">
            {item.category}
            </Link>
          </span>
          </div>
        <span className="postTitle">
          <Link to={`${item._id}`} className="link">
           {item.title}
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        {item.body.slice(0,200 )+"..."}
        <br />
      <Link className="link"  id="read"to={`${item._id}`}>
       
          Read more....

        
        </Link>
       
      </p>
      
    </div>
        )
      })
     }
      

   

      {/* <Post img="flyer.jpg" />
      <Post img="forward.jpg" />
      <Post img="logo.png"/>
      <Post img="rido.jpg"/>
      <Post img="other.jpg"/>
      <Post img="logo.png"/>
      <Post img="rido.jpg"/>
      <Post img="other.jpg"/>
      <Post img="forward.jpg" />
      <Post img="logo.png"/>
      <Post img="rido.jpg"/>s
      <Post img="forward.jpg" /> */}
    </div>
    </>
  );
}
