import React, { Component } from 'react';
import ReactDOM from "react-dom";

//Container for children components
export default function Sidebar(props){
    return( <aside className="sidebar"> { props.children } </aside>)   
}