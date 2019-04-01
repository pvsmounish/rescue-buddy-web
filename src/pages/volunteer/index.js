import React, { Component } from 'react';
import {
    Card, Collapse, Divider, Table, Tag
    } from 'antd';
import { VolunteerForm } from './form';
const { Panel } = Collapse;

export class Volunteer extends Component {

    state = {
        tableData: [{
            key: '1',
            name: 'Mounish Sai',
            city: 'Vellore',
            address: 'VIT Main Road, Katpadi',
            category: 'Health Services',
            mobileNumber: '+91 9014645004',
        }, {
            key: '2',
            name: 'Kevin Thomas',
            city: 'Vellore',
            address: 'VIT Main Road, Katpadi',
            category: 'Health Services',
            mobileNumber: '+91 9014545004',
        }, {
            key: '3',
            name: 'Sanjay',
            city: 'Chennai',
            address: 'Main Road, Anna Nagar',
            category: 'Health Services',
            mobileNumber: '+91 9046415004',
        }]
    }

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
                    <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <Table style={{flex: 1}} columns={this.columns} dataSource={this.state.tableData} />
                    </div>
                </Card>
            </div>
        );
    }
}
