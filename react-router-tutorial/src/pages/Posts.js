import React from 'react';
import { Link,Outlet, Route, Routes, useParams, useLocation, useMatch } from 'react-router-dom';
import { Post } from 'pages'; 

const Posts = () => {
    const location = useLocation()
    console.log("url:",location.pathname);
    const match = useMatch('/posts/:id');
    const splitUrl = location?.pathname?.split('/') ?? null;
    console.log(splitUrl[1]);
    return (
        <div>
           <h2>Post List </h2> 
           <ul>
                <li><Link to={`/${splitUrl[1]}/1`}>Post #1</Link></li>
                <li><Link to={`/${splitUrl[1]}/2`}>Post #2</Link></li>
                <li><Link to={`/${splitUrl[1]}/3`}>Post #3</Link></li>
                <li><Link to={`/${splitUrl[1]}/4`}>Post #4</Link></li>
           </ul>
           
           <Routes>
                <Route index element={(<h3>Please select any post</h3>)}/>
                <Route path=":id" element={<Post />}/>
            </Routes>           
        </div>
    );
};

export default Posts;