import React from 'react';
import { Row, Col } from 'antd';
import Link from "next/link";

const NewItem = () => {
  return (
      <>
              <div style={{ margin: '50px'}}>
                  <h3>NEW</h3>
                  <br/>
              </div>
                  <Row>
                      <Col span={7}>
                          <img
                              style={{ maxWidth: '300px', maxHeight:'350px' }}
                              alt="example" src="https://pbs.twimg.com/media/EEZ9VmfVUAAKCSc.jpg" />
                          <Link href="/item">[ 코드SET ] 찰랑찰랑 원피스</Link>
                          <h4> KRW 44,000</h4>
                          <h5>이쁘고 귀엽고 좋은 옷</h5>
                      </Col>
                  </Row>
      </>
  );
};

export default NewItem;