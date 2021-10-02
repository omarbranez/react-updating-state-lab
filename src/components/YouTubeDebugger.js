// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {

    constructor(){
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleChangeBitrate = () => {
        this.setState({//dont forget the function! {}
            settings: {
                ...this.state.settings, // so we dont change the resolution
                bitrate: 12
            }
        })
    }

    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        })
    }

    render(){
        return(
            <div>
                <button
                    className="bitrate"
                    onClick={this.handleChangeBitrate}
                    Change bitrate
                ></button>
                <button
                    className="resolution"
                    onClick={this.handleChangeResolution}
                    Change resolution
                ></button>
            </div>
        )
    }

}