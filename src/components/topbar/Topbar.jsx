
import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <img className="topIcon" src="icons8-facebook-circled.svg" alt=""/>
        <img className="topIcon "src="icons8-instagram.svg" alt=""/>
        <img className="topIcon" src="icons8-twitter-circled.svg" alt=""/>
    
      </div>
      <div className="topCenter">
        <ul className="topList">
        
         
        </ul>
      </div>
      <div className="topRight">
       
          <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
