import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Loader from '../components/Loader';
import axios from 'axios';

export default function EmailVerificationScreen(props){
    const{email, token} = useParams();
    const [status, setStatus] = useState("processing")
    useEffect(()=>{
        axios.post('/api/users/verify-email', {email, token}).then((response)=>{
            
            if(response.data.status)
                setStatus("success")
            else
                setStatus("failed")
        })
    },[status]);
    if(status === "processing"){
        return (
            <div className="container" style={
                {
                    height : '50vh',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                    flexDirection : 'column',
                }
            }>
                <h1 style={
                    {
                        marginBottom : '30px',
                    }
                }>Processing...</h1>
                <div><Loader/></div>
            </div>
        )        
    }else if(status === "success"){
        return (
            <div className="container h-screen"
            style={
                {                    
                    height : '50vh',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                }
            }>
                <h1 className='text-green-700' 
                style={{
                    color: 'green',
                }}>Email has been verifed Successfully</h1>
                
            </div>
        )
    }else{
        return (
            <div className="container h-screen" 
            style={
                {                    
                    height : '50vh',
                    display : 'flex',
                    justifyContent : 'center',
                    alignItems : 'center',
                }
            }>
                <h1 className='text-red-700'
                style={
                    {
                        color: 'red',
                    }
                }>Email verification has been failed</h1>                
            </div>
        )
    }
}
