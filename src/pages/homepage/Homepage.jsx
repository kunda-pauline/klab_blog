import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Footer from "../../components/footer/Footer";
import Topbar from "../../components/topbar/Topbar";
import "./homepage.css";

export default function Homepage({blogs}) {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Topbar />
      <Header />
      <div className="home">
        <Posts blogs={blogs} />
        <Footer />
      </div>
    </>
  );
}
