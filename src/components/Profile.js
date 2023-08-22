import React from 'react';
import profilePic from '../images/defaultAvatar.jpg';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-pic-container">
        <img className="profile-pic" src={profilePic}/>
      </div>
      <div className="title">Simeon Cekov</div>
      <div className="email">cekovsimeon1@gmail.com</div>
    </div>
  )
}

export default Profile