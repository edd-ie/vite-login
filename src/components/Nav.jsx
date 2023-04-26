import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function Nav({check}){
    const nav = useNavigate()

    function logOff(){
        check(false);
        nav('/login')
    }

    return(
        <div>
            <button onClick={logOff}>LogOut</button>
        </div>
    )
}