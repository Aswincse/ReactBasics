import React, { Component } from 'react';

function DynamicRendering({isLoggedIn}){
    return (
        <div>
            {isLoggedIn ?<p>Welcome,user!</p>:<p>Please log in.</p>}
        </div>
    )
}
export default DynamicRendering;

