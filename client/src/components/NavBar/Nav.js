import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Link, Switch, Router, Redirect } from "react-router-dom";
import * as ReactBootStrap from 'react-bootstrap';
import './Nav.scss';



const NavBar = (props) => {
    console.log('navBar.props.collections', props.collections)
    const likesCollection = props.collections.find((collection) => collection._id === "likes");
    console.log('likesCollection', likesCollection);
    const likeCount = likesCollection.books.length;
    const user = props.user;

    return (
        <div>
            <div>
                <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <ReactBootStrap.Navbar.Brand as={Link} to="/">PRIVATE LIBRARY</ReactBootStrap.Navbar.Brand>
                    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
                        <ReactBootStrap.Nav className="mr-auto">
                            <span>{
                                user ? <ReactBootStrap.Nav.Link as={Link} to="/search">Search</ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>
                            <span>{
                                user ? <ReactBootStrap.Nav.Link as={Link} to="/collections">Collections</ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>
                            <span>{
                                user ? <ReactBootStrap.Nav.Link as={Link} to="/booksILiked">
                                    Likes {likeCount === 0 ? '' : <span className="btnCount">{likeCount}</span>}
                                </ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>
                            <span>{
                                user ? <ReactBootStrap.Nav.Link as={Link} to="/myRatings">Ratings</ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>
                            <span>{
                                user ? <ReactBootStrap.Nav.Link onClick={() => { localStorage.removeItem('user'); window.location.href='/' }} as={Link} to="/">Logout</ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>

                        </ReactBootStrap.Nav>
                        <ReactBootStrap.Nav>
                            <span>{
                                !user ? <ReactBootStrap.Nav.Link as={Link} to="/signIn">Login</ReactBootStrap.Nav.Link>
                                    : ""
                            }</span>

                        </ReactBootStrap.Nav>
                    </ReactBootStrap.Navbar.Collapse>
                </ReactBootStrap.Navbar>
            </div>
        </div>



    );
};


export default NavBar;





















