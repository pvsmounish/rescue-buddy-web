import React, { Component } from 'react';
import {
    Card, Collapse, Divider, Icon
    } from 'antd';
import { DonateForm } from './form';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
const { Panel } = Collapse;

const GET_DONATIONS = gql`
    query getDonations{
        donations{
            id,
            name,
            city,
            amount
        }
    }
`;

export class Donate extends Component {

    render() {

        return(
            <div>
                <Collapse defaultActiveKey={['donateForm']}>
                    <Panel header="Donate Now" key="donateForm">
                        <DonateForm />
                    </Panel>
                </Collapse>
                <Divider />
                <Query
                query={GET_DONATIONS}
                >
                    {({ loading, error, data }) => {
                    if (loading) return <Icon type='loading' style={{fontSize: 40}}/>;
                    if (error) return <p>Error :(</p>;

                    return (
                        <Card title="Donors">
                            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                {data.donations &&
                                    data.donations.map(donation => (
                                        <Card
                                        key={donation.id}
                                        title={`Rs. ${donation.amount}`}
                                        bordered={true}
                                        style={{ width: 240, margin: 20 }}
                                        >
                                            <p>{donation.name}</p>
                                            <p>{donation.city}</p>
                                        </Card>
                                ))
                                }
                            </div>
                        </Card>
                    )
                    }}
                </Query>
            </div>
        );
    }
}
