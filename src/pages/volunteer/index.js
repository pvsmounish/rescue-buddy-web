import React, { Component } from 'react';
import {
    Card, Collapse, Divider, Table, Tag, Icon
    } from 'antd';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { VolunteerForm } from './form';
const { Panel } = Collapse;

const GET_VOLUNTEERS = gql`
    query getVolunteers{
        volunteers{
            name,
            city,
            address,
            category,
            mobileNumber
        }
    }
`;

export class Volunteer extends Component {

    columns = [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: 'City',
        dataIndex: 'city',
        key: 'city',
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    }, {
        title: 'Category',
        key: 'category',
        dataIndex: 'category',
        render: (category) => (<Tag color = {'green'}> {category.toUpperCase()} </Tag>)
    }, {
        title: 'Mobile Number',
        dataIndex: 'mobileNumber',
        key: 'mobileNumber',
}]

    render() {
        return(
            <div>
                <Collapse>
                    <Panel header="Join as Volunteer" key="1">
                        <VolunteerForm />
                    </Panel>
                </Collapse>
                <Divider />
                <Card title="Volunteers">
                    <Query
                        query={GET_VOLUNTEERS}
                    >
                        {({ loading, error, data }) => {
                        if (loading) return <Icon type='loading' style={{fontSize: 40}}/>;
                        if (error) return <p>Error :(</p>;

                            return (
                                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                                    <Table style={{flex: 1}} columns={this.columns} dataSource={data.volunteers} />
                                </div>
                            )
                        }}
                    </Query>
                </Card>
            </div>
        );
    }
}
