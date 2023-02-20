import { Link } from "react-router-dom";
import {AiFillDelete} from 'react-icons/ai'
import {AiFillEdit} from 'react-icons/ai'
import "./Dashbordpost.css";

export default function DashbordPost({img}) {
  return (
    <div className="post">
      <img
        className="postImg"
        src={img}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postedit">
          <AiFillEdit/>
          </span>
          <span className="postdelete">
           <AiFillDelete/>
          </span>
        </div>
        <span className="postTitle">
          <Link to="Dashbordsingle" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? <Link className="link"  id="read"to="SinglePost">
       
          Read more....

        
        </Link>
       
      </p>
      
    </div>
  );
}
