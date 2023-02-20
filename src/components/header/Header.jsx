import "./header.css";

export default function Header() {
  return (
    <div className="header">
       <div className="headerTitles">
        <span className="headerTitleSm">KPO</span>
        <span className="headerTitleLg">BLOG</span>
      </div> 
      <img
        className="headerImg"
        src="hotel.jpg"
        alt=""
      />
    </div>
  );
}
