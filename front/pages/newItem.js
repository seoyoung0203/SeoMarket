import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import Link from "next/link";
import {GET_ITEM_REQUEST} from "../reducers/item";

const NewItem = () => {

    const dispatch = useDispatch();

    const { itemDataList = [] } = useSelector(state => state.item);
    console.log(itemDataList);

    useEffect( () => {
        dispatch({
            type: GET_ITEM_REQUEST,
        });
    }, []);

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
                          );
                      })}
                  </Row>
      </>
  );
};

export default NewItem;