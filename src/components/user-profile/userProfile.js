import { Button } from "antd";
import './userProfile.css';

export default function UserProfile({profileData}){
    return (
        <div id="user-profile">
            <h3 className="user-profile-heading">Profile</h3>
            <img src={profileData.uri} alt="user avatar"/>
            <h3>{profileData.username}</h3>
            <p>{profileData.description}</p>
            <div className="wrap-social-chips"></div>
            <Button>View Profile</Button>
        </div>
    );
}