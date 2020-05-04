import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import Link from "next/link";
import {GET_ITEM_REQUEST} from "../reducers/item";

const NewItem = () => {

    useEffect( () => {
        dispatch({
            type: GET_ITEM_REQUEST,
        });
    }, []);

    // const { itemDataList } = useSelector(state => state.item);

    const dispatch = useDispatch();

    const itemDataList = [
        {
            itemIndex: '1',
            itemName: '남방',
            price: '25,000',
            imgSrc: 'https://i.pinimg.com/originals/8c/48/ac/8c48ac164b67a1bcf2e0c373ee1f68e4.jpg',
            desc: '이쁜데 비싼 옷ㅠ'
        },
        {
            itemIndex: '2',
            itemName: '원피스',
            price: '30,000',
            imgSrc: 'https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg',
            desc: '찰랑찰랑 원피스'
        },
        {
            itemIndex: '1',
            itemName: '남방',
            price: '25,000',
            imgSrc: 'https://i.pinimg.com/originals/8c/48/ac/8c48ac164b67a1bcf2e0c373ee1f68e4.jpg',
            desc: '이쁜데 비싼 옷ㅠ'
        },
        {
            itemIndex: '2',
            itemName: '원피스',
            price: '30,000',
            imgSrc: 'https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg',
            desc: '찰랑찰랑 원피스'
        }
    ];

  return (
      <>
              <div style={{ margin: '50px'}}>
                  <h3>NEW</h3>
                  <br/>
              </div>
                  <Row>
                      {itemDataList.map((itemData) => {
                          return (
                          <Col span={8}>
                          <img
                          style={{ maxWidth: '300px', maxHeight:'350px' }}
                          alt="example" src={itemData.imgSrc}
                         />
                         <br/>
                              <Link href="/item"><a>{itemData.itemName}</a></Link>

                          <h4>{itemData.price}</h4>
                          <h5>{itemData.desc}</h5>
                          </Col>
                          )
                      })}

                  </Row>
      </>
  );
};

export default NewItem;