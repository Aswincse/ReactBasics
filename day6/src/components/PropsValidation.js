import React from 'react';
import  PropTypes from 'prop-types';

export default function PropsValidation(props) {
    return (
        <div>
            <h1>My name is {props.student}</h1>
        </div>
    );
}

PropsValidation.PropTypes={student:PropTypes.string}

