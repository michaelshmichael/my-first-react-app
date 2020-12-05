import React from 'react'
import './App.css';

class MyComponent extends React.Component {
    constructor(props){
        super(props)
        this.name = props.name;
        this.age = props.age
        this.state = {
            age: props.initialAge,
            status: 0
        }
    }

    onMakeOlder(){
        this.setState({
            age: this.state.age + 3
        })
    }

    render(){
        return (
        <div>
            <h2>My Compenent. Your name is {this.name}</h2>
            <h3>Your age is {this.state.age}</h3>
            <hr/>
            <button onClick={this.onMakeOlder.bind(this)}>Make me older!</button>
        </div>
        );
    }
}

export default MyComponent;