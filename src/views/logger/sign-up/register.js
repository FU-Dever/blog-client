import React from 'react';
import { Button, Form, Input } from 'antd';
import { register } from '../../../config/service/loggerService';
import './register.css';
import { useNavigate } from 'react-router-dom';
import { UserInforContext } from '../../../App';

export default function Register() {
    const { setUserName } = React.useContext(UserInforContext);
    const navigate = useNavigate();

    const onFinish = (values) => {
        register(values)
            .then(
                (res) => {
                    console.log(res.value);
                    setUserName(values.username);
                    navigate("/home");
                }
            )
            .catch(
                (err) => console.error(err)
            )
    };

    const onFinishFailed = (errorInfo) => {
        console.error('Failed:', errorInfo);
    };

    return (
        <div id="wrap-login">
            <Form
                id="regist-field"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Sign Up
                </Button>

                <p>Have an account, <a href="/">log in</a></p>
            </Form>
        </div>
    );
}