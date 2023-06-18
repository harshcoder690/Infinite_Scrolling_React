import React, { useState, useEffect, useContext, useReducer } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthAction } from '../../actions/AuthAction';
import AuthContext from '../../contexts/AuthContext';
export const Login = () => {
    const [username, setUserName] = useState("");
    const [password, SetPassword] = useState("");
    const navigate = useNavigate();

    const { IsAuthenticated, dispatchIsAuthenticated } = useContext(AuthContext);

    const loginHandler = (e) => {
        e.preventDefault();
        if (username === 'foo' && password === 'bar') {
            dispatchIsAuthenticated(AuthAction(true));
            navigate("/");
        } else {
            alert("wrong Credential")
        }
    }
    return (
        <div className='bg-black min-h-screen py-24 px-4'>
            <div className='text-3xl text-white mb-6'>
                <h1>Log In</h1>
            </div>
            <form onSubmit={loginHandler}>
                <div className='text-white m-1 mr-36 ml-2'>
                    <h1>UserName</h1>
                </div>
                <div>
                    <input type="text" className = "p-2" id="username" onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className='text-white m-1 mr-36'>
                    <h1>Password</h1>
                </div>
                <div>
                    <input type="text" className = "p-2" id="password" onChange={(e) => SetPassword(e.target.value)} />
                </div>
                <div>
                    <button type='submit'className='bg-white pr-4 pl-4 pt-2 pb-2 m-4'><h1 className='text-black'>Submit</h1></button>
                </div>
            </form>
        </div>
    )
}
