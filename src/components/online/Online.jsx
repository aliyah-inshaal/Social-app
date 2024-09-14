import "./online.css"

export default function Online({user}) {
  return (
      <li className="rightbarFriend">
            <div className="rightbarPfpImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarPfp" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
  )
}
