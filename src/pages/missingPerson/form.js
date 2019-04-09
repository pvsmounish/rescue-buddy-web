import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, DatePicker, notification
    } from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import Dropzone from 'react-dropzone';
import { CLOUDINARY_CLOUD_NAME, CLOUDINARY_UPLOAD_PRESET } from '../../config'
const { TextArea } = Input;

const ADD_MISSING_PERSON = gql`
    mutation createMissingPerson($name: String!, $description: String!, $age: Int!, $gender: Gender!, $missingDateTime: String!, $guardianName: String!, $guardianMobile: String!, $city: String!, $address: String , $photoUrl: String) {
        createMissingPerson(name: $name, description: $description, age: $age, gender: $gender, missingDateTime: $missingDateTime, guardianName: $guardianName, guardianMobile: $guardianMobile, city: $city, address: $address, photoUrl: $photoUrl) {
            id
        }
    }
`;

export class MissingPersonForm extends Component {
    state = {
        name: '',
        description: '',
        age: '',
        gender: '',
        missingDateTime: '',
        guardianName: '',
        guardianMobile: '',
        city: '',
        address: '',
        file: null,
        photoUrl: '',
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
            <Mutation mutation={ADD_MISSING_PERSON} variables={{
                name: this.state.name,
                description: this.state.description,
                age: this.state.age,
                gender: this.state.gender,
                missingDateTime: this.state.missingDateTime,
                guardianName: this.state.guardianName,
                guardianMobile: this.state.guardianMobile,
                city: this.state.city,
                address: this.state.address,
                photoUrl: this.state.photoUrl
            }}>
                {(createMissingPerson, { data }) => (
                    <Form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {

                                const { file } = this.state;

                                const formData = new FormData();
                                formData.append('file', file);
                                formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

                                const response =  await fetch(`https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`, {
                                    method: 'POST',
                                    body: formData
                                })

                                const responseJson = await response.json();
                                this.setState({photoUrl: responseJson.secure_url})
                                console.log(this.state)
                                await createMissingPerson();
                                notification.open({
                                    message: 'Added Missing Person Successfully! :)',
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
                        label="Description of Person"
                        >
                            <TextArea rows={4} value={this.state.description} onChange={(e) => this.setState({description: e.target.value})} />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Age"
                        >
                            <InputNumber min={0} max={100} defaultValue={10} style={{ width: '100%' }} value={this.state.age} onChange={(age) => this.setState({age})} />
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
                        label="Missing From"
                        >
                            <DatePicker
                            showTime
                            placeholder="Select Time"
                            onChange={(value, dateString) => this.setState({missingDateTime: dateString})}
                            onOk={() => {}}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Guardian's name"
                        >
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.guardianName} onChange={(e) => this.setState({guardianName: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Guardian's Mobile Number"
                        >
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.guardianMobile} onChange={(e) => this.setState({guardianMobile: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="City"
                        >
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.city} onChange={(e) => this.setState({city: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Address"
                        >
                            <Input
                                prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} value={this.state.address} onChange={(e) => this.setState({address: e.target.value})}
                            />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Photo"
                        >
                            <Dropzone onDrop={acceptedFiles => {
                                this.setState({file: acceptedFiles[0]})
                                console.log(this.state)
                            }}>
                                {({getRootProps, getInputProps}) => (
                                <section>
                                    <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {
                                        this.state.file && (
                                            <p>Selected <strong>{this.state.file.name}</strong></p>
                                        )
                                    }
                                    <p>Drag 'n' drop image here, or click to select image</p>
                                    </div>
                                </section>
                                )}
                            </Dropzone>
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                )}
            </Mutation>
        );
    }
}
