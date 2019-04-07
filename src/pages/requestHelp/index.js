import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, notification
    } from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const { TextArea } = Input;

const ADD_REQUESTHELP = gql`
    mutation createRequestHelp($name: String!, $description: String!, $city: String!, $address: String!, $mobileNumber: String!) {
        createRequestHelp(name: $name, description: $description, city: $city, address: $address, mobileNumber: $mobileNumber) {
            id
        }
    }
`;

export class RequestHelp extends Component {
    state = {
        name: '',
        description: '',
        city: '',
        address: '',
        mobileNumber: ''
    };

    render() {

        const formItemLayout = {
            labelCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 8
                },
            },
            wrapperCol: {
                xs: {
                    span: 24
                },
                sm: {
                    span: 16
                },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return(
            <div>
                <h2>Request Help</h2>
                <Mutation mutation={ADD_REQUESTHELP} variables={{
                    name: this.state.name,
                    description: this.state.description,
                    city: this.state.city,
                    address: this.state.address,
                    mobileNumber: this.state.mobileNumber
                }}>
                    {(createRequestHelp, { data }) => (
                    <Form onSubmit={async (e) => {
                        e.preventDefault();
                        try {
                            await createRequestHelp();
                            notification.open({
                                message: 'Requested Help Successfully! :)',
                            });
                        } catch (error) {
                            console.log(error);
                            notification.open({
                                message: 'Oops Something Went Wrong! :(',
                            });
                        }
                    }}>
                        <Form.Item
                        {...formItemLayout}
                        label="Name"
                        >
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Problem Description"
                        >
                            <TextArea rows={4} value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="City"
                        >
                            <Input
                                prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}
                            />
                        </Form.Item>
                        
                        <Form.Item
                        {...formItemLayout}
                        label="Address"
                        >
                            <TextArea rows={4} value={this.state.address} onChange={(e) => this.setState({address: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Mobile Number"
                        >
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.mobileNumber} onChange={(e) => this.setState({mobileNumber: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" block>Submit</Button>
                        </Form.Item>
                    </Form>
                    )}
                    </Mutation>
            </div>
        );
    }
}
