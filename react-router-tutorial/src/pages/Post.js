import React from 'react';
import { useParams, Outlet} from 'react-router-dom';

const Post = ({}) => {
    const { id } = useParams();
    return (
        <div>

            {/* <Outlet /> */}
            <div>
                포스트 {id}
            </div>
        </div>
    );
};

export default Post;