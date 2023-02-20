import { useLocation } from "react-router";
import "./Dashbord.css";
import DashbordTopbar from "../../components/dashbordtopbar/DashbordTopbar";
import Dashbordside from "../../components/dashbordside/Dashbordside";
import DashbordPosts from "../../components/dashbordposts/DashbordPosts";

export default function Dashbord({blogs}) {
  const location = useLocation();
  console.log(location);
  return (
    <>
     <DashbordTopbar/>
      {/* <Header /> */}
      <div className="dhome">
       <side>
        <Dashbordside/>
        </side>
        <main className="main">
        <DashbordPosts  blogs={blogs}/>
        </main>
      </div>
    </>
  );
}
