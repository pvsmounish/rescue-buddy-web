import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {
    Button
    } from 'antd';
import './index.css';

export class Landing extends Component {

    render() {
        return(
            <div style={{backgroundColor: '#2e3131'}}>
                <Particles
                params={{
                    "particles": {
                        "number": {
                            "value": 160,
                            "density": {
                                "enable": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                                "speed": 4,
                                "size_min": 0.3
                            }
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "random": true,
                            "speed": 1,
                            "direction": "top",
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "bubble"
                            },
                            "onclick": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        },
                        "modes": {
                            "bubble": {
                                "distance": 250,
                                "duration": 2,
                                "size": 0,
                                "opacity": 0
                            },
                            "repulse": {
                                "distance": 400,
                                "duration": 4
                            }
                        }
                    }
                }}
                style={{
                    width: '100%',
                    backgroundColor: '#2e3131' 
                }}
                />
                <div id="container">
                    <img id='logo-big' style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: 400}} src="/images/logo/RescueBuddy-logo.png" alt="RescueBuddy"/>
                    <a href='/home'><Button size='large' icon='right-circle' shape='round' style={{marginTop: 50, width: 400}}>Get Started</Button></a>
                </div>
            </div>
        );
    }
}

