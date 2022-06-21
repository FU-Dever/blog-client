import PostPopUp from '../../../components/post-pop-up/postPopUp';
import './tabBar.css';
import { Link } from "react-router-dom";
import UserMenu from '../../../components/user-menu/userMenu';

export default function TabBar({userData}) {
    return (
        <div id="wrap-tabBar">
            <Link to="/home">
                <img id="logo-home" src="./assets/images/blog_logo.png" alt="logo" />
            </Link>
            <PostPopUp/>
            <UserMenu data={userData}/>
        </div>
    );
}