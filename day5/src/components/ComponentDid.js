import React, { Component } from 'react';

export default class ComponentDid extends Component {
    state={color1:"Yellow"}
    componentDidMount(){
        setTimeout(()=>{this.setState({color1:"Blue"}),3000})
    }
    getSnapshotBeforeUpdate(){
        document.getElementById("i").innerHTML="my previous value "+prevState.color1;
    }
    componentDidUpdate(){
        document.getElementById("i").innerHTML="my previous value "+this.state.color1;
    }
    render() {
        return (
            <div>
                <h1>{this.state.color1}</h1>
            </div>
        );
    }
}

