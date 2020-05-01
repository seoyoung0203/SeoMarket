import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {
    // 마이페이지 화면

    const { userData } = useSelector(state => state.user);

    return (
        <>
          <h3>MY SHOPPING</h3>
          {userData &&
              <>
                  <h4>{userData.username} 님의 마이페이지입니다.</h4>
                  <div>Order List: {userData.orderList.length}</div>
                  <div>Point : {userData.point}</div>
                  <div>Coupon : {userData.coupon.length}</div>
              </>
          }
        </>
    );
};

export default MyPage;