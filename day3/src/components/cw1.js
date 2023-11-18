import React, { useState } from 'react';

function ToggleMsg(){
    const[showMsg,setShowMsg] = useState(false);
    const toggleMsg=()=>(
        setShowMsg(!showMsg)
    );
    return(
        <div>
            <button onClick= {toggleMsg}>
            {showMsg ? 'Hide Message' : 'Show Messege'}
            </button>
            {showMsg && <p>Hi! How are You!!!</p>}
        </div>
    )
}