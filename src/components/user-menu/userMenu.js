import React from 'react';
import { Menu } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import './userMenu.css';
import { Link } from 'react-router-dom';

export default function UserMenu({ data }) {
    const menuItems = [
        {
            key: "user-handle",
            label:   <div id="wrap-avt">
                        <img id="user" src={data.uri} alt="user-avt" />
                        <h3>{data.username}</h3>
                    </div>,
            children: [
                {
                    key: 'profile',
                    icon: <svg aria-label="Trang cá nhân" className="_8-yf5 " color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle></svg>
                    ,
                    label: 'Profile',
                },
                {
                    key: 'account',
                    icon: <SyncOutlined />,
                    label: <Link to="/">Switch account</Link>,
                },
            ]
        }
    ];
    return (
        <Menu mode="horizontal" id="user-menu" items={menuItems}></Menu>
    );
}