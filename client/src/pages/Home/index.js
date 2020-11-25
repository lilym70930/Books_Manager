import React from 'react';
import homePageImage from './Images/homePageImage.jpg';
import githubIcon from './Images/githubIcon.png';
import linkedinIcon from './Images/linkedinIcon.png' ;
import './index.scss';

const Home = () =>{

    return(
        <div className="homeContainer">
            <h1 >Manage your book collections in an easy way </h1>
                <img id="imgCover" src= {homePageImage}  alt=""/>
            <div className="infoContainer">
                <h6>Created by Lily Mulugeta 2020</h6><a href="https://github.com/lilym70930"><img src={githubIcon}  alt=""/></a><a href="https://www.linkedin.com/in/lilymulugeta/"><img src={linkedinIcon}  alt=""/></a>
            </div>
        </div>
    )
}

export default Home;