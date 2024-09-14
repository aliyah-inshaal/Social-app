import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import { Link } from "react-router-dom";  // Import Link for navigation

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Aliyah's social</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/" className="topbarLink">Home</Link>   {/* Link to Home page */}
          <Link to="/profile" className="topbarLink">Profile</Link>  {/* Link to Profile page */}
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="Profile here" className="topbarImage" />
      </div>
    </div>
  );
}
