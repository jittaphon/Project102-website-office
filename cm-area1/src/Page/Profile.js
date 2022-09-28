import React from 'react';
import { ProfilePage } from "../Component/ProfileComponent";
import { Skills } from "../Component/Skill"
import { ProfileDetail } from "../Component/Profile";
const Profile = () => {
    return (
      <div className="">
       <ProfilePage/>
       <ProfileDetail />
       </div>
    );
};

export default Profile;
