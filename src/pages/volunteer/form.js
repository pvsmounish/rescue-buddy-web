import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, Select, notification 
    } from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const { TextArea } = Input;
const { Option } = Select;

const ADD_VOLUNTEER = gql`
    mutation createVolunteer($name: String!, $age: Int!, $city: String!, $address: String!, $gender: Gender!, $mobileNumber: String!, $category: String!) {
        createVolunteer(name: $name, age: $age, city: $city, address: $address, gender: $gender, mobileNumber: $mobileNumber, category: $category) {
            id
        }
    }
`;

export class VolunteerForm extends Component {
    state = {
        name: '',
        age: '',
        city: '',
        address: '',
        gender: '',
        mobileNumber: '',
        category: 'Health Care',
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
            <Mutation mutation={ADD_VOLUNTEER} variables={{
                name: this.state.name,
                age: this.state.age,
                city: this.state.city,
                address: this.state.address,
                gender: this.state.gender,
                mobileNumber: this.state.mobileNumber,
                category: this.state.category
            }}>
                {(createVolunteer, { data }) => (
                    <Form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
                                await createVolunteer();
                                notification.open({
                                    message: 'Added Volunteer Successfully! :)',
                                });
                            } catch (error) {
                                console.log(error);
                                notification.open({
                                    message: 'Oops Something Went Wrong! :(',
                                });
                            }
                        }}
                    >
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
                        label="Age"
                        >
                            <InputNumber min={0} max={100} defaultValue={10} style={{ width: '100%' }} value={this.state.age} onChange={(age) => this.setState({age})}/>
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
                        label="Gender"
                        >
                            <Radio.Group defaultValue="MALE" value={this.state.gender} onChange={(e) => this.setState({gender: e.target.value})}>
                                <Radio.Button value="MALE">Male</Radio.Button>
                                <Radio.Button value="FEMALE">Female</Radio.Button>
                                <Radio.Button value="OTHER_GENDER">Others</Radio.Button>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Mobile Number"
                        >
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.mobileNumber} onChange={(e) => this.setState({mobileNumber: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Category"
                        >
                            <Select defaultValue="Health Care" style={{ width: 200 }} onChange={(category) => this.setState({category})}>
                                <Option value="Health Care">Health Care</Option>
                                <Option value="Electrical Services">Electrical Services</Option>
                                <Option value="Mechanical Services">Mechanical Services</Option>
                                <Option value="Plumbing Services">Plumbing Services</Option>
                                <Option value="Food Services">Food Services</Option>
                                <Option value="Boat Services">Boat Services</Option>
                                <Option value="Relief Services">Relief Services</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" block>Submit</Button>
                        </Form.Item>
                    </Form>
                )}
            </Mutation>
        );
    }
}
