import React from 'react';
import Link from "next/link";
import { Button } from 'antd';


const Admin = () => {
    // 관리자 페이지
    return (
        <>
            <h2>관리자 페이지</h2>
            <Button><Link href="/additem"><a>아이템 등록</a></Link></Button>
            </>
    );
};

export default Admin;