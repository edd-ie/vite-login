import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login({check, logged}){
    const nav = useNavigate()

    function logIn(){
        check(true);
        nav('/')
    }

    return(
        <div>
            <button onClick={logIn}>Login</button>
        </div>
    )
}