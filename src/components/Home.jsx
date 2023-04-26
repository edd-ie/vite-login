import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home({check}){

    const nav = useNavigate()

    function logOff(){
        check?nav('/'):nav('/login')
    }

    logOff()
    
    return(
        <div>
            <h1>HOME</h1>
        </div>
    )
}