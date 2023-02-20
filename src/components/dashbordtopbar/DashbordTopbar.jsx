
import { Link } from "react-router-dom";
import "./DashbordTopbar.css";

export default function DashbordTopbar() {
  return (
    <div className="top">
      <div className="Left">
        <h1 id="ho"> Dashbord</h1>
    
      </div>
     
       
    <div className="Right" id="Right">
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src="popo.JPG"
              alt=""
            />
          </Link>
      </div> 
    </div>
  );
}
