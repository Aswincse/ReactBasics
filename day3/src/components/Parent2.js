import React, { Component, useState } from 'react';

export default function Parent2() {
    const[college,setCollege]=useState("SKCET")
        return (
            <div>
                <h1>my college is {college}</h1>
                <button onClick={()=>setCollege("ATRIA")}>Click me</button>
            </div>
        )
    
}