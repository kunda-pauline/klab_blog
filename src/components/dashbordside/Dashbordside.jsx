
import { Link } from "react-router-dom";
import "./Dashbordside.css";

export default function Dashbordside() {
  return (
    <div className="topp">
      
      <div className="topCenter">
        <ul className="sideList">
        <li className="topListItem" id="topListItem">
            <Link className="link" to="/Dashbord">
            ALL POSTS
            </Link>
            </li>
          
          <li className="topListItem" id="topListItem">
            <Link className="link" to="/write">
            ADD POST
            </Link>
          </li>
          <li className="topListItem" id="topListItem">
            <Link className="link" to="/Manage">
           CHARTS
            </Link>
          </li>
          
          <li className="topListItem" id="topListItem">
            <Link className="link" to="/">
            LOGOUT
            </Link>
            </li>

           
          
          </ul>
    
      </div>
    </div>
  );
}
