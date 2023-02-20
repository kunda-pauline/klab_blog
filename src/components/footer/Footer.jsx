import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer ">
      <div className="sidebarItems">
        <h1 className="sidebarTitle">ABOUT ME</h1>
       
        <p>
        I am a technology professional with 10 years of
         experience in the industry. My expertise lies in design and coding 
  
        </p>
      </div>
      <div className="sidebarItems" >
        <h1 className="sidebarTitle">CATEGORIES</h1>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
         
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          
        </ul>
      </div>
      <div className="sidebarItems">
        <h1 className="sidebarTitle" id="social">FOLLOW US</h1>
        <div className="sidebarSocial" id="sidebarSocial">
        <img className=" sidebarIcon" src="icons8-facebook-circled.svg" alt=""/>
        <img className=" sidebarIcon "src="icons8-instagram.svg" alt=""/>
        <img className=" sidebarIcon" src="icons8-twitter-circled.svg" alt=""/>
    
          
        </div>
      </div>
     
    </div>
  );
}
