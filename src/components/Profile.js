import React from 'react';
import profilePic from '../images/defaultAvatar.jpg';

const Profile = () => {
  return (
    <div className="profileContainer">
      <div className="profilePicContainer">
        <img className="profilePic" src={profilePic}/>
      </div>
      <div className="Title">Simeon Cekov</div>
      <div className="Email">cekovsimeon1@gmail.com</div>
    </div>
  )
}

export default Profile