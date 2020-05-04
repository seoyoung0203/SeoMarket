import React, { useState, useCallback } from 'react';
import { Input, Row, Col, Button } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { ADD_BOARD_REQUEST } from "../reducers/board";

const Writer = () => {

    const dispatch = useDispatch();
    const { addBoard } = useSelector(state => state.board);

    const [subject, setSubject] = useState('');
    const [writer, setWriter] = useState('');
    const [content, setContent] = useState('');

    const onChangeSubject = useCallback((e) => {
        setSubject(e.target.value);
    },[subject]);

    const onChangeWriter = useCallback((e) => {
        setWriter(e.target.value);
    },[writer]);

    const onChangeContent = useCallback((e) => {
        setContent(e.target.value);
    },[content]);

    const onSubmit = useCallback(async (e) => {
        e.preventDefault();
        await dispatch({
            type: ADD_BOARD_REQUEST,
            data: {
                subject,
                writer,
                content
            }
        });

        alert('작성이 완료되었습니다');

        location.href = "/qna";

    },[subject, writer, content]);

    return (
        <>
                <h3>Write</h3>
                <br/>
                <Row>
                    <hr/>
                    <Col span={5}>
                        Subject
                    </Col>
                    <Col span={10}>
                        <Input value={subject} onChange={onChangeSubject} />
                    </Col>
                </Row>
                <Row>
                    <hr/>
                    <Col span={5}>
                        Writer
                    </Col>
                    <Col span={10}>
                        <Input value={writer} onChange={onChangeWriter}/>
                    </Col>
                </Row>
                <Row>
                    <hr/>
                    <Col span={5}>
                        Content
                    </Col>
                    <Col span={15}>
                        <Input.TextArea rows={10} value={content} onChange={onChangeContent} />
                    </Col>
                </Row>
                <br/>
                <Button style={{ float: 'right', left: '-50%'}} onClick={onSubmit}>write</Button>

        </>
    );
};

export default Writer;