import React, { useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import {ADD_CART} from "../reducers/user";
import { GET_ONE_ITEM_REQUEST } from '../reducers/item';

const Item = ({ itemIndex }) => {

    const dispatch = useDispatch();

    const { itemData } = useSelector(state => state.item);

    useEffect(() => {
        dispatch({
            type: GET_ONE_ITEM_REQUEST,
            data: itemIndex
        })
    },[]);

    const addCart = () => {
        dispatch({
            type: ADD_CART
        });
    };

    return (
        <>
            <Row>
                <Col span={14}>
                    <img
                        style={{ maxWidth: '500px', maxHeight:'550px' }}
                        alt="example" src="https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg" />
                </Col>
                <Col span={10}>
                    <h3>[ 코드SET ] 찰랑찰랑 원피스</h3>
                    <br/>
                    <Row>
                        <Col span={7}>
                            Price
                        </Col>
                        <Col span={6}>
                            KRW 24,000
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7}>
                            Point
                        </Col>
                        <Col span={6}>
                            240point (1%)
                        </Col>
                    </Row>
                    <Row>
                        <Col span={7}>
                            Delivery fee
                        </Col>
                        <Col span={6}>
                            KRW 3,000
                        </Col>
                    </Row>
                    <br/><br/>
                    <Button block>BUY IT NOW</Button>
                    <Button block onClick={addCart}>ADD TO CART</Button>
                </Col>
            </Row>
            <br/>
            <br/>
            - size[단면CM]

            사이즈 재는 방법에 따라 1~3cm 오차가 있을 수 있습니다.<br/>

            총기장 : 68

            어깨단면 : 67

            가슴단면 : 69

            암홀 : 24

            밑단 :  49

            소매길이 : 56
            <br/>
            <img src="https://creamcheese.co.kr/web/upload/NNEditor/20191211/%EB%9D%BC%EC%9A%B4%EB%93%9C%EB%8B%88%ED%8A%B8_shop1_160030.jpg"/>
        </>
    );
};

Item.getInitialProps = async (context) => {
    /*context.store.dispatch({
       type: GET_ONE_ITEM_REQUEST,
        data: context.query.itemIndex,
    });*/
    console.log('dffdf', context.query.itemIndex);
    return { itemIndex: context.query.itemIndex };
};

export default Item;

