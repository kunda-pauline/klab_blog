import "./settings.css";

import Dashbordside from "../../components/dashbordside/Dashbordside";
import DashbordTopbar from "../../components/dashbordtopbar/DashbordTopbar";

export default function Settings() {
  return (
    <>
    <DashbordTopbar/>
    <Dashbordside/>
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="popo.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Kpopo" name="name" />
          <label>Email</label>
          <input type="email" placeholder="popok@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
