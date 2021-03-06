import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import signIn_img from './signIn_img.jpg';
import './index.scss';
import SignUp from '../SignUp/index';
import { BrowserRouter, Route, Link, Switch, Router, Redirect } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';

const prefix = window.location.origin.includes('localhost') ? 'https://localhost:4000' : window.location.origin



export const SignIn = (props) =>{

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState(false);
  


  const  login = () => {
        axios.post(prefix+'/signIn', {
            email ,
            password
        }).then(res => {
            if (res.status === 200) {
                console.log('res.data', res.data);
                 return props.onLogin(res.data)
              
            }
            else {
                console.log('Error login')
            }
        }).catch(err => {
            console.log(err)
        })
    }


    const handleKeypress = event => {
        if (event.keyCode === 13) {
            login();
        }
      };
    
    //   const goSignUp =() =>{
    //     return <Redirect to="/signup" />
    //   }

        const disabled = !email || !password;
        return (
            <div >
            <div className="header">
                <h1>Welcome Back</h1>
            </div>
            <section className="Form my-4 mx-5">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-5">
                            <img src={signIn_img} className="img-fluid" alt="" />
                        </div>
                        <div className="form col-lg-7 px-5 pt-5 py-5">
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-7 ">
                                        <p>Email</p>
                                        <input type="email" placeholder="email@domainname.com" className="form-control my-3 p-4 " onChange={evt => setEmail(  evt.target.value )}></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <p>Password</p>
                                        <input type="password" placeholder="Enter your password" className="form-control my-3 p-4" onChange={evt => setPassword(  evt.target.value)} onKeyDown={handleKeypress}></input>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-7">
                                        <button type="button" className="btn1 mt-3 mb-5" onClick={login}>Login</button> <br></br>
                                      
                                        <ReactBootStrap.Nav.Link as={Link} to="/signUp">Don't have an account?</ReactBootStrap.Nav.Link>
                                    </div>
                                    
                                    
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        )
    }


export default SignIn;



















































































