import React, { useEffect, useState } from 'react';
import { Empty } from 'antd';
import { getPost } from '../../config/service/postService';
import { CheckOutlined, HeartOutlined, DeleteOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import './postList.css';

export default function PostList({user}) {
    const [postList, setPostList] = useState([]);
    useEffect(() => {
        getPost()
        .then(
            (res) => setPostList(res.data)
        )
        .catch(
            (err) => console.log(err)
        )
    }, []);

    return (
        <div id="wrap-post-list">
            {
                postList.length === 0 &&
                <Empty />
            }
            {
                postList.map((item, key) => {
                    return (
                        <div key={key} className="img-card">
                            <div className="card-heading">
                                <div className="card-item">
                                    <img src={user.uri} alt="user avatar" />
                                    <h3>{user.username}</h3>
                                </div>
                                <div className="card-item">
                                    <p className="card-time">1 hour ago</p>
                                </div>
                            </div>
                            <img className="post-image" src={item.fileData} alt="post content" />
                            <div className="card-additional">
                                <div className="card-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="card-description">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <div className="card-interact">
                                <div className="card-comment">
                                    <input type="text" placeholder="Add comment..." />
                                    <Button type="primary" shape="circle" icon={<CheckOutlined />} />
                                </div>
                                <div className="card-reacts">
                                    <Button type="primary" shape="circle" icon={<HeartOutlined />} />
                                    <Button className="sp-15" type="primary" shape="circle" icon={<DeleteOutlined />} />
                                    <Button type="primary" shape="circle" icon={<ShareAltOutlined />} />
                                </div>
                            </div>
                        </div>
                    );
                }).reverse()
            }
        </div>

    );
}