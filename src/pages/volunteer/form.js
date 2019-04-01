import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, Select
    } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

export class VolunteerForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        category: "Health Care",
    };

    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

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
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                {...formItemLayout}
                label="Name"
                >
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Form.Item>

                <Form.Item
                {...formItemLayout}
                label="Age"
                >
                    <InputNumber min={0} max={100} defaultValue={10} style={{ width: '100%' }}/>
                </Form.Item>

                <Form.Item
                {...formItemLayout}
                label="City"
                >
                    <Input
                        prefix={<Icon type="environment" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    />
                </Form.Item>

                
                <Form.Item
                {...formItemLayout}
                label="Address"
                >
                    <TextArea rows={4} />
                </Form.Item>

                <Form.Item
                {...formItemLayout}
                label="Gender"
                >
                    <Radio.Group defaultValue="Male">
                        <Radio.Button value="Male">Male</Radio.Button>
                        <Radio.Button value="Female">Female</Radio.Button>
                        <Radio.Button value="Others">Others</Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item
                {...formItemLayout}
                label="Mobile Number"
                >
                    <Input
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
        );
    }
}
