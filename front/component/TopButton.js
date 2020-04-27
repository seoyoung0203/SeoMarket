import React from 'react';
import Link from "next/link";
import { useSelector } from "react-redux";
import { Button } from 'antd';

const TopButton = () => {


    return (
        <>
            <Button type="link"><Link href="/login"><a>LogIn</a></Link></Button>
            <Button type="link"><Link href="/signup"><a>SignUp</a></Link></Button>
            <Button type="link">CART(0)</Button>
            <Button type="link">MyPage</Button>
        </>
    );
};

export default TopButton;