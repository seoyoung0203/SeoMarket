import React from 'react';
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import { Button } from 'antd';
import {LOG_OUT_REQUEST} from "../reducers/user";

const TopButton = () => {
    // 상단 메뉴바

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.user);

    const logOut = () => {
        dispatch({
            type: LOG_OUT_REQUEST
        })
    };

    return (
        <>
            <Button type="link"><Link href="/admin"><a>ADMIN</a></Link></Button>
            <Button type="link">CART(0)</Button>

            { isLoggedIn ?
                <>
                    <Button type="link"><Link href="/mypage"><a>MY PAGE</a></Link></Button>
                    <Button type="link" onClick={logOut}>LOG OUT</Button>
                </>
                :
                <>
                    <Button type="link"><Link href="/login"><a>LOG IN</a></Link></Button>
                    <Button type="link"><Link href="/signup"><a>SIGN UP</a></Link></Button>
                </>
            }
        </>
    );
};

export default TopButton;