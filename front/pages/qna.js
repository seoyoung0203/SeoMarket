import React from 'react';
import { Row, Col, Table, Button } from 'antd';
import Link from "next/link";
import { useSelector } from 'react-redux';

const QnA = () => {

    const { boardData } = useSelector(state => state.board);
    console.log(boardData);

    const buttonStyle = {
        margin: '30px',

    };

    const columns = [
        {
            title: 'no',
            dataIndex: 'no',
            key: 'no',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
            render: text => <a style={{ color: 'black'}}>{text}</a>,
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },

    ];
    const data = [
        {
            key: '1',
            no: '1',
            name: '정서영',
            age: 32,
            subject: '문의합니다 :)'
        },
        {
            key: '2',
            no: '2',
            name: '김우진',
            age: 42,
            subject: '문의합니다 :)'
        },
    ];
    return (
        <>
                <h3>Q & A</h3>
                <Button style={buttonStyle}><Link href="/write"><a>Write</a></Link></Button>
                <Row>
                    <Col span={24}>
                        <Table columns={columns} dataSource={boardData} />
                    </Col>

                </Row>
        </>
    );
};

export default QnA;