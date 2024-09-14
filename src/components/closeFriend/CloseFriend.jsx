import "./closeFriend.css"


export default function CloseFriend({user}) {
  return (
      <li className="sidebarFriend">
            <img src={user.profilePicture} alt="" className="pfp" />
            <span className="sidebarFriendtext">{user.username}</span>
          </li>
  )
}
