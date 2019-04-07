import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, notification
    } from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

const ADD_DONATION = gql`
    mutation createDonation($name: String!, $city: String!, $amount: Int!) {
        createDonation(name: $name, city: $city, amount: $amount) {
            id
        }
    }
`;

export class DonateForm extends Component {

    state = {
        name: '',
        city: '',
        amount: 0
    }

    render() {

        return(
            <Mutation mutation={ADD_DONATION} variables={{
                name: this.state.name,
                city: this.state.city,
                amount: this.state.amount
            }}>
            
                {(createDonation, { data }) => (
                    <Form onSubmit={async (e) => {
                        e.preventDefault();
                        console.log(this.state)
                        try {
                            await createDonation();
                            notification.open({
                                message: 'Added Donation Successfully! :)',
                            });
                        } catch (error) {
                            console.log(error);
                            notification.open({
                                message: 'Oops Something Went Wrong! :(',
                            });
                        }
                    }}>
                        <Form.Item
                        >
                            <Input
                                prefix={<Icon type="user" />}  placeholder="Name" onChange={(e) => this.setState({name: e.target.value})}
                            />
                        </Form.Item>
                        <Form.Item
                        >
                            <Input
                                prefix={<Icon type="pushpin" />}  placeholder="City" onChange={(e) => this.setState({city: e.target.value})}
                            />
                        </Form.Item>
                        <Form.Item
                        >
                            <InputNumber
                                prefix={<Icon type="dollar" />}  placeholder="Amount" onChange={(amount) => this.setState({amount})}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button block type="primary" htmlType="submit">Donate</Button>
                        </Form.Item>
                    </Form>
                )}
            </Mutation>
        );
    }
}
