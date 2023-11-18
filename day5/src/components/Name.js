import React from 'react';
export default function Name(props) {
    try{
        if(props.name === "Ajay"){
            throw new Error("Ajay name is not acceptable")
        }
    }
    catch(error){
        console.log(error);
        document.write("Please enter proper name");
    }
    return (
        <div>
            {props.name}
        </div>
    )
    } 