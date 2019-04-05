import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, Select
    } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

export class RequestHelp extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: []
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
            <div>
                <h2>Request Help</h2>
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
                    label="Problem Description"
                    >
                        <TextArea rows={4} />
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
                    label="Mobile Number"
                    >
                        <Input
                            prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit" block>Submit</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
