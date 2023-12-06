import { Route, Routes, Navigate,Outlet } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import MyPage from './pages/Mypage';

import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext(null);
const UserUpdateContext = createContext(null);

function UserProvider({ children }){
  const [ user, setUser ] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <UserUpdateContext.Provider value={setUser}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  );
}
function useUser() {
  return useContext(UserContext);
}

function useUserUpdate() {
  return useContext(UserUpdateContext);
}

function UserInfo() {
  const user = useUser();
  // if (!user) return <div>사용자 정보가 없습니다.</div>;
  // return <div>{user.username}</div>;
  console.log(user);
  if (!user) {
    return <Navigate to="/login" replace={true} />;
  }

  return <div>{ user.username } / { user.use }</div>;

}


function Authenticate() {
  const setUser = useUserUpdate();
  const onClick = () => {
    setUser({ username: 'kwon' , use: 'true'});
  };
  console.log(setUser);
  return <div><Outlet /><button onClick={onClick}>사용자 인증</button></div>;
}

const App = () => {
  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles/>}>
          <Route path=':id' element={<Article />}/>
        </Route>
        
        <Route path="/login" element={<Authenticate />}/>
        <Route path="/mypage" element={<UserInfo />}/>
      </Route>
      <Route path="*" element={<NotFound />}/>
      {/* <Route path="/articles/:id" element={<Article />}/> */}
    </Routes>
    </UserProvider>
  );
};

export default App;