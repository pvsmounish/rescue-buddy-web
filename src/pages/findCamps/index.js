import React, { Component } from 'react';
import {
    Icon, Card
    } from 'antd';
import GoogleMapReact from 'google-map-react';

const MapMarker = ({ text }) => (
    <Card style={{ width: 200, height: 70 }}>
        <Icon type='pushpin' />
        {text}
    </Card>
);

export class FindCamps extends Component {

    static defaultProps = {
        center: {
            lat: 12.975358,
            lng: 79.162417
        },
        zoom: 11
    };
    
    render() {
        return (
            <div>
                <h2>Find Camps</h2>
                <Card>
                <div style={{ height: '100vh', width: '100%' }}>
                    <GoogleMapReact
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                        <MapMarker
                            lat={12.975358}
                            lng={79.272417}
                            text="Relief Camp"
                        />
                        <MapMarker
                            lat={12.975358}
                            lng={79.102417}
                            text="Relief Camp"
                        />
                    </GoogleMapReact>
                </div>
                </Card>
            </div>
        );
    }
}
