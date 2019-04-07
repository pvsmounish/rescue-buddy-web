import React, { Component } from 'react';
import {
    Icon, Card, Tooltip
    } from 'antd';
import GoogleMapReact from 'google-map-react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { googleMapApiKey } from '../../config';

const GET_RELIEFCAMPS = gql`
    query reliefCamps{
        reliefCamps{
            campName,
            latitude,
            longitude,
            address,
            mobileNumber
        }
    }
`;

const MapMarker = ({ text }) => (
    <Tooltip title={text}>
        <div
        style={{
            position: 'absolute',
            width: 30,
            height: 30,
            left: -30 / 2,
            top: -30 / 2,
            border: '3px solid #3f51b5',
            borderRadius: 30,
            backgroundColor: 'white',
            textAlign: 'center',
            color: '#3f51b5',
            fontSize: 16,
            fontWeight: 'bold',
            padding: 3
        }}
        >
            <Icon type='plus' />
        </div>
    </Tooltip>
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
                    <Query query={GET_RELIEFCAMPS}>
                        {({ loading, error, data }) => {
                        if (loading) return <Icon type='loading' style={{fontSize: 40}}/>;
                        if (error) return <p>Error :(</p>;
                            
                            return (
                                <GoogleMapReact
                                bootstrapURLKeys={{ key: googleMapApiKey }}
                                defaultCenter={this.props.center}
                                defaultZoom={this.props.zoom}
                                >
                                    {data.reliefCamps &&
                                        data.reliefCamps.map(reliefCamp => (
                                            <MapMarker
                                                lat={reliefCamp.latitude}
                                                lng={reliefCamp.longitude}
                                                text={`${reliefCamp.campName} (${reliefCamp.mobileNumber}) - ${reliefCamp.address}`}
                                            />
                                    ))
                                    }
                                </GoogleMapReact>
                            )
                            }}
                    </Query>
                </div>
                </Card>
            </div>
        );
    }
}
