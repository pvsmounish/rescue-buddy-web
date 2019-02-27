import React, { Component } from 'react';
import {
    Form, Input, Icon, Button,
    } from 'antd';

export class DonateForm extends Component {

    state = {
        name: '',
        city: '',
        amount: 0
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {

        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Item
                >
                    <Input
                        prefix={<Icon type="user" />}  placeholder="Name" onChange={(name) => this.setState({name})}
                    />
                </Form.Item>
                <Form.Item
                >
                    <Input
                        prefix={<Icon type="pushpin" />}  placeholder="City" onChange={(city) => this.setState({city})}
                    />
                </Form.Item>
                <Form.Item
                >
                    <Input
                        prefix={<Icon type="dollar" />}  placeholder="Amount" onChange={(amount) => this.setState({amount})}
                    />
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">Donate</Button>
                </Form.Item>
            </Form>
        );
    }
}
