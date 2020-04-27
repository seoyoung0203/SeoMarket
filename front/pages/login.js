import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';

const Login = () => {

    const [userId, setUserId] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const inputStyle = {
        margin: '5px',
        maxWidth: '250px'
    };

    const onChangeId = (e) => {
        e.preventDefault();
        setUserId(e.target.value)
    };

    const onChangePassword = (e) => {
        e.preventDefault();
        setUserPassword(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userId, userPassword);
    };

    return (
        <>
                <div>
                    <Row>
                        <Col span={7}>
                        </Col>
                        <Col span={6}>
                            <h3>LOGIN</h3>
                            <br/>
                            <br/>
                    <Form>
                        <Input value={userId} style={inputStyle} placeholder="아이디" onChange={onChangeId}/> <br/>
                        <Input value={userPassword} style={inputStyle} type="password" placeholder="비밀번호" onChange={onChangePassword}/>
                        <br/><br/>
                        <Button type="link" style={{ color: 'black', float: 'right'}} onClick={onSubmit}>login</Button>
                    </Form>
                        </Col>
                    </Row>
                </div>
        </>
    );
};

export default Login;