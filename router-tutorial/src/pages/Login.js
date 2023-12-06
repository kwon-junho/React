import React from "react";



const Login = ({getData}) => {
  console.log(getData);
  const onClick = () => {
    getData({ use: true });
  };
  console.log();
  return <button onClick={onClick}>사용자 인증</button>;
};
  
export default Login;