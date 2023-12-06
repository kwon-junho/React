import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';



const MyPage = (props) => {
  const [childState, setchildState] = useState("");
  console.log(props);
  const isLoggedIn = true;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>마이 페이지</div>;
};

export default MyPage;