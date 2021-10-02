// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor(){
        super()
        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {
        this.setState(previousState => ({
            timesClicked: previousState.timesClicked + 1 // throw in a block and run a function {}
        }))
    }

    render(){
        return(
            <div>
                <button
                    onClick={this.handleClick}
                >{this.state.timesClicked}
                </button>
            </div>
        )
    }

}