import React from 'react';
import { Button } from 'antd';
import Link from "next/link";

const Category = () => {
    const buttonStyle = {
        margin: '10px',
        color: 'black'
    }
    return (
      <>
          <Button type="link" style={buttonStyle}><Link href="/newitem"><a>NEW</a></Link></Button>
          <Button type="link" style={buttonStyle}>BEST</Button>
          <Button type="link" style={buttonStyle}>OUTER</Button>
          <Button type="link" style={buttonStyle}>TOP</Button>
          <Button type="link" style={buttonStyle}>BOTTOM</Button>
          <Button type="link" style={buttonStyle}><Link href="/qna"><a>Q & A</a></Link></Button>
      </>
    );
};

export default Category;