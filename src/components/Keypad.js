// Code Keypad Component Here
import React, {Component} from 'react';

export default class Keypad extends Component{
    handleEvent = () =>{
        console.log('Entering password...')
    }

    render(){

        return <div><input type="password" onKeyUp = {this.handleEvent} /></div>
    }
}