import React, { Component } from 'react';

export default class Counter extends Component {
    state={
        count1:0,
        count2:0,
        name:""
    };
    HandleIncrement1=()=>{
        this.setState({count1: this.state.count1+1});
    }
    HandleIncrement2=()=>{
        this.setState({count2: this.state.count2+1});
    }

    //two way data binding
    handleChange=(event)=>{this.setState({name:event.target.value})}

    render() {
        return (
            <div>
                <p>Count: {this.state.count1}</p>
                <button onClick={this.HandleIncrement1}>click to Increment</button>
                <br/>
                <p>Count: {this.state.count2}</p>
                <button onMouseOver={this.HandleIncrement2}>hover to Increment</button>
                
                <h1>{this.state.name}</h1>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
            </div>
        );
    }
}
