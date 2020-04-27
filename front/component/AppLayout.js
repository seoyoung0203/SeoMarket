import React from 'react';
import {Col, Row} from "antd";
import Link from 'next/link'
import TopButton from "./TopButton";
import Category from "./Category";

const AppLayout = ({children}) => {
    return (
        <>
            <div style={{ margin: '40px' }}>
                <Row>
                    <Col span={4}><Link href="/"><h1 style={{ margin : '10px'}}><a>seo_market</a></h1></Link></Col>
                    <Col span={20}><div style={{ float: 'right', margin: '20px'}}>
                        <TopButton />
                    </div></Col>
                </Row>
                <Row>
                    <Col span={2}><Category/></Col>
                    <Col span={20}>
                        <div style={{ margin : '60px' }}>
                            {children}
                        </div>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <div style={{ margin: '50px'}}>
                    <Row>
                        <Col span={4}>
                            TEL : 010-9715-1437 <br/>
                            OWNER : JOUNG SEO YOUNG
                        </Col>
                        <Col>
                            COMPANY : SEO_MARKET
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default AppLayout;