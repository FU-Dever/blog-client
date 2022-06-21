import React from 'react';
import { Button, Form, Input } from 'antd';
import { UserInforContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { login } from '../../../config/service/loggerService';

export default function Login() {
    const navigate = useNavigate();
    const { setUserName } = React.useContext(UserInforContext);
    const finish = (values) => {
        // login(values)
        //     .then(
        //         (res) => {
        //             console.log(res.data);
        //         }
        //     )
        //     .catch(
        //         (err) => { console.log(err); }
        //     );
        setUserName(values.username);
        navigate("/home");
    };



    return (
        <div id="wrap-login">
            <Form
                id="login-field"
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                autoComplete="off"
                onFinish={finish}
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
                    {/* <a href="/home">Login</a> */}
                    Login
                </Button>

                <p>Don't have an account, <a href="/register">regist now</a></p>
            </Form>
        </div>
    );
}