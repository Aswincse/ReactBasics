import React, { Component } from 'react';

function Demo(props){
    return (
        <>
        my name is {props.name}
        </>
    )
}
export default function Listt(){
    const list=["mango","orange","apple"];
    return (
        <div>{list.map((item)=><Demo name ={item}></Demo>)}</div>
    )
}