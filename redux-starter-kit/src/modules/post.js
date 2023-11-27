// import { handleAction, handleActions } from 'redux-actions';
import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { pender } from 'redux-pender';

function getPostAPI(postId){
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`) 
}

const GET_POST = 'GET_POST';
// const GET_POST_PENDING = 'GET_POST_PENDING';
// const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'GET_POST_FAILURE';

// export const getPost = (postId) => dispatch => {
    // //요청 시작 알림    
    // dispatch({type: GET_POST_PENDING});
    // //요청 시작
    // return getPostAPI(postId).then(
    //     (response) => {
    //         //요청 성공했을경우 서버 응답내용을 payload 로 설정
    //         dispatch({
    //             type: GET_POST_SUCCESS,
    //             payload: response
    //         })
    //     }
    // ).catch(error => {
    //     dispatch({
    //         type: GET_POST_FAILURE,
    //         payload: error
    //     })
    // })
// }
// export const getPost = (postId) => ({
//     type: GET_POST,
//     payload: getPostAPI(postId)
// })

export const getPost = createAction(GET_POST,getPostAPI);

const initialState = {
    // pending: false,
    // error: false,
    data: {
        title: '',
        body: ''
    }
}

export default handleActions({
    ...pender({
        type: GET_POST,
        onSuccess: (state, action) => {
            const {title, body} = action.payload.data;
            return {
                data: {
                    title,
                    body
                }
            }
        }
    })
    // [GET_POST_PENDING]: (state, action) => {
    //     return {
    //         ...state,
    //         pending: true,
    //         error:false
    //     };
    // },
    // [GET_POST_SUCCESS]: (state, action) => {
    //     const { title, body } = action.payload.data;

    //     return {
    //         ...state,
    //         pending: false,
    //         data: {
    //             title, body
    //         }
    //     };
    // },
    // [GET_POST_FAILURE]: (state, action) => {
    //     return{
    //         ...state,
    //         pending: false,
    //         error: true
    //     }
    // }
}, initialState);