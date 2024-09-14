import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useLocation } from "react-router-dom";

export default function Rightbar() {
  
  const location = useLocation();

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img src="assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">It's <b>Ashal Meeqaat</b>'s birthday today!</span>
        </div>
        <img src="assets/ad.png" alt="" className="rightbarAd" />
        <h1 className="rightbarTitle">Online Friends</h1>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightBarTitle">User Info</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">City:</span>
            <span className="rightBarInfoValue">Hyderabad</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">From:</span>
            <span className="rightBarInfoValue">Pakistan</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rightBarInfoKey">Relationship status:</span>
            <span className="rightBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg" />
            <span className="rightbarFollowingName">Anousha</span>
          </div>
        </div>
      </>
    );
  };

  // Check if we are on the profile page or home page
  const isProfilePage = location.pathname === "/profile";

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {isProfilePage ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}
