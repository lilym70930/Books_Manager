import React from "react";
import NavBar from '../NavBar/Nav'

export const Header = (props) => {
  return (
    <header>
      <NavBar collections= {props.collections} user = {props.user} userName= {props.userName}/>
    </header>
  );
};
