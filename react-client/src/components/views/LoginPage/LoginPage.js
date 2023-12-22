import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_action/user_action';
import axios from 'axios'
import Auth from '../../../hoc/auth'

function LoginPage() {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value);
    }
    const onSubmitHandler = (event) => {
        // 버튼만 누르면 리로드 되는것을 막아줌
        event.preventDefault();

        console.log('Email', Email);
        console.log('Password', Password);
        
        let body = {
            email: Email,
            password: Password,
        }

        dispatch(loginUser(body));
    }

    const onClickHandler = () => {
        axios.get('/api/users/auth')
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });        
    }

    return (
        <div style={{ 
            display: 'flex', justifyContent: 'center', alignItems: 'center', 
            width: '100%', height: '100vh'
            }}>
            <form style={{ display: 'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHandler}/>
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHandler}/>
                <br />
                <button formAction=''>
                    Login
                </button>
            </form>
            <button onClick={onClickHandler}>
          ㅝㄴ한체크
      </button>
        </div>
    )
}


export default Auth(LoginPage, false);