import React, { useState, useEffect, Component } from "react";
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import signUp_img from './signUp.jpg';

const prefix = window.location.origin.includes('localhost') ? 'http://localhost:4000' : window.location.origin

export const SignUp = (props) =>{

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [redirectToHome, setRedirectToHome] = useState(false)
        const [isError, setIsError] = useState(false);
    

     const register = () => {
       console.log('INSIDE SIGNUP REGISTER');
        axios.post(prefix+"/signUp", {
          email,
          password
         
        }).then(res => {
          console.log('INSIDE SIGNUP CALLBACK,res.status= ', res.status);
          if (res.status === 201) {
              console.log('@@@res.data', res.data);
            return props.onLogin(res.data)
          }
          else {
            console.log(`error code : ${res.status}`);
          }
        }).catch(err => {
          console.log(err);
        })
      }
  
      const handleKeypress = event => {
        if (event.keyCode === 13) {
          register();
        }
      };

        const disabled = !email || !password;
       
        return (

          <div >
          <div className="header">
          <h1>Welcome to Private Library</h1>
          <h2>In order to login, please create an account</h2>
          </div>
          <section className="Form my-4 mx-5">
              <div className="container">
                  <div className="row no-gutters">
                      <div className="col-lg-5">
                          <img src={signUp_img} className="img-fluid" alt="" />
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

                                  {isError ? <p style={{ color: 'red' }}>Register error</p> : ""} <br></br><br></br>
                                  <button className="btn1 mt-3 mb-5" disabled={disabled} onClick={register}>Register</button>

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


export default SignUp;