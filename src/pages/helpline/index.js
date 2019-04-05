import React, { Component } from 'react';
import {
    Typography
    } from 'antd';

const { Text } = Typography;

export class HelpLine extends Component {
    
    render() {
        return (
            <div style={{display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                <h2>Helpline</h2>
                <Text>For Emergency Contact</Text>
                <div style={{marginTop: 30}} />
                <div style={{backgroundColor: '#ff0000', borderRadius: 10}}>
                    <Text style={{fontSize: 40, color: '#fff'}}>+91-9000000000</Text>
                </div>
            </div>
        );
    }
}
