import React, {useEffect} from 'react';
import { Row, Col, Table, Button } from 'antd';
import Link from "next/link";
import { useSelector, useDispatch } from 'react-redux';
import { GET_BOARD_REQUEST } from '../reducers/board';
import GetBoard from "../component/GetBoard";

const QnA = () => {

    const dispatch = useDispatch();
    const { boardDataList } = useSelector(state => state.board);

    const buttonStyle = {
        margin: '30px',
    };

    useEffect(() => {
        dispatch({
            type: GET_BOARD_REQUEST,
        })
    }, []);

    const columns = [
        {
            title: 'no',
            dataIndex: 'boardIndex',
            key: 'boardIndex',
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
            render: text => <a style={{ color: 'black'}} onClick={() => {return <GetBoard/>}}>{text}</a>,
        },
        {
            title: 'name',
            dataIndex: 'writer',
            // key: 'userIndex',
        },

    ];

    return (
        <>
            <h3>Q & A</h3>
            <Button style={buttonStyle}><Link href="/write"><a>Write</a></Link></Button>
            <Row>
                <Col span={24}>
                    <Table columns={columns} dataSource={boardDataList} />
                </Col>

            </Row>
        </>
    );
};

export default QnA;
