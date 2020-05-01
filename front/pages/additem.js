import React, {useCallback, useState} from 'react';
import {Button, Col, Input, Row} from "antd";
import { useDispatch } from 'react-redux';
import { ADD_ITEM_REQUEST } from '../reducers/item';

const AddItem = () => {
    // 판매 아이템 등록 화면

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');

    const onChangeName = useCallback((e) => {
        setName(e.target.value);
    },[name]);

    const onChangePrice = useCallback((e) => {
        setPrice(e.target.value);
    },[price]);

    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    },[content]);

    const onSubmit = useCallback((e) => {
        dispatch({
            type: ADD_ITEM_REQUEST,
        })
        console.log(
            name,
            price,
            content
        );
    },[name, price, content]);

    return (
        <>
            <h3>아이템 등록</h3>
            <br/>
            <Row>
                <hr/>
                <Col span={5}>
                    아이템 이름
                </Col>
                <Col span={10}>
                    <Input value={name} onChange={onChangeName}/>
                </Col>
            </Row>
            <Row>
                <hr/>
                <Col span={5}>
                    가격
                </Col>
                <Col span={10}>
                    <Input value={price} onChange={onChangePrice}/>
                </Col>
            </Row>
            <Row>
                <hr/>
                <Col span={5}>
                    사진 등록
                </Col>
                <Col span={10}>
                    <Input />
                </Col>
            </Row>
            <Row>
                <hr/>
                <Col span={5}>
                    아이템 설명
                </Col>
                <Col span={15}>
                    <Input.TextArea value={content} onChange={onChangeContent} />
                </Col>
            </Row>
            <br/>
            <Button style={{ float: 'right', left: '-50%'}} onClick={onSubmit}>write</Button>

        </>
    );
};

export default AddItem;