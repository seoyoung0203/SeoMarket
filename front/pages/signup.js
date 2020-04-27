import React, { useState, useCallback } from 'react';
import { Input, Form, Row, Col, Button, Select, Alert } from 'antd';

const SignUp = () => {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [signUpError, setSignUpError] = useState(false);


    const inputStyle = {
        maxWidth: '350px'
    };

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, [id]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, [password]);

    const onChangeUserName = useCallback((e) => {
        setUserName(e.target.value);
    }, [userName]);

    const onChangePasswordCheck = useCallback((e) => {
        if(password != passwordCheck) {
            setPasswordError(true);
        }
        setPasswordCheck(e.target.value);
    }, [password, passwordCheck]);

    const onChangePhone = useCallback((e) => {
        setPhone(e.target.value);
    }, [phone]);

    const onSubmit = useCallback(() => {
        if(passwordError) {
            setSignUpError(true);
        }
        console.log(
            id,
            password,
            userName,
            phone
        );
    }, [id, password, userName, phone]);

    return (
      <>
              <h3>SignUp</h3>
              <br/>
              <Form>
                  <Row style={{ margin: '20px'}}>
                      <Col span={4}>
                          아이디
                      </Col>
                      <Col span={12}>
                          <Input value={id} style={inputStyle} onChange={onChangeId}/>
                      </Col>
                      <Col span={6}>
                          (영문소문자/숫자, 4~16자)
                      </Col>
                  </Row>
                  <Row style={{ margin: '20px'}}>
                      <Col span={4}>
                          비밀번호
                      </Col>
                      <Col span={12}>
                          <Input value={password} style={inputStyle} type="password" onChange={onChangePassword}/>
                      </Col>
                      <Col span={6}>
                          (영문 대소문자/숫자 4자~16자)
                      </Col>
                  </Row>
                  <Row style={{ margin: '20px'}}>
                      <Col span={4}>
                          비밀번호 확인
                      </Col>
                      <Col span={12}>
                          <Input value={passwordCheck} style={inputStyle} type="password" onChange={onChangePasswordCheck}/>
                      </Col>
                      {passwordError && <span style={{ color : 'red' }}>비밀번호가 틀립니다.</span>}
                  </Row>
                  <Row style={{ margin: '20px'}}>
                      <Col span={4}>
                          이름
                      </Col>
                      <Col span={12}>
                          <Input value={userName} style={inputStyle} onChange={onChangeUserName}/>
                      </Col>
                  </Row>
                  <Row style={{ margin: '20px'}}>
                      <Col span={4}>
                          휴대폰 번호
                      </Col>
                      <Col span={4}>
                          <Select
                          >
                              <Select.Option value="010">010</Select.Option>
                              <Select.Option value="011">011</Select.Option>
                          </Select>
                          -

                      </Col>
                      <Col span={5}>
                          <Input value={phone} style={inputStyle} onChange={onChangePhone}/>
                      </Col>
                  </Row>

                  <Button onClick={onSubmit}>JOIN</Button>
                  { signUpError && <Alert
                      message="Error"
                      description="회원가입 실패"
                      type="error"
                      showIcon
                  />}
              </Form>
          </>
  )
};

export default SignUp;