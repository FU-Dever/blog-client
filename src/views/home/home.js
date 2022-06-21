import React from 'react';
import { Empty } from 'antd';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { getAllUser, getOne } from '../../config/service/userService';
import TabBar from '../../common/layout/tab-bar/tabBar';
import UserSumary from '../../components/user-sumary/userSumary';
import PostList from '../../components/post-list/postList';
import Profile from '../../components/profile/profile';
import UserProfile from '../../components/user-profile/userProfile';
import { currentUserToTop } from '../../utilities/currentUserToTop';
import './home.css';
import { useEffect } from 'react';

export default function Home({username}) {

    // ---Effects---
    useEffect(() => {
        getAllUser()
            .then(
                res => {
                    setUserData(currentUserToTop(res.data, username));
                }
            );

        getOne(username)
            .then(
                res => setUser(res.data)
            );

    }, [username]); 

    // ---States---
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState({});

    // -- Render data ---
    return (
        <>
            {
                user.length !== 0 &&
                <TabBar userData={user} />
            }
            {
                <div id="wrap-body" >
                    <div id="public-col" className="body-col">
                        <div className="sz-box-15"></div>
                        {
                            userData.length === 0 &&
                            <Empty />
                        }
                        {
                            userData.length !== 0 &&
                            userData.map((item, index) => <UserSumary key={index} data={item} index={index} />)
                        }
                    </div>
                    <Routes className="body-col">
                        <Route exact path="/" element={<PostList user={user} />} />
                        <Route path="profile" element={<Profile />} />
                    </Routes>
                    <div id="private-col" className="body-col">
                        <UserProfile profileData={user} />
                    </div>
                </div>
            }
        </>
    );
}