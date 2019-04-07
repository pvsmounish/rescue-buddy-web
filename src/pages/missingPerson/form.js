import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, Upload, Modal, DatePicker, notification
    } from 'antd';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
const { TextArea } = Input;

const ADD_MISSING_PERSON = gql`
    mutation createMissingPerson($name: String!, $description: String!, $age: Int!, $gender: Gender!, $missingDateTime: String!, $guardianName: String!, $guardianMobile: String!) {
        createMissingPerson(name: $name, description: $description, age: $age, gender: $gender, missingDateTime: $missingDateTime, guardianName: $guardianName, guardianMobile: $guardianMobile) {
            id
        }
    }
`;

export class MissingPersonForm extends Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        previewVisible: false,
        previewImage: '',
        fileList: [{
            uid: '-1',
            name: 'mounish-sai.jpg',
            status: 'done',
            url: 'https://mounishsai.com/images/mounish-sai.jpg',
        }],
        name: '',
        description: '',
        age: '',
        gender: '',
        missingDateTime: '',
        guardianName: '',
        guardianMobile: ''
    };

    handleCancel = () => this.setState({ previewVisible: false })

    handlePreview = (file) => {
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    handleChange = ({ fileList }) => this.setState({ fileList })

    
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
            <Mutation mutation={ADD_MISSING_PERSON} variables={{
                name: this.state.name,
                description: this.state.description,
                age: this.state.age,
                gender: this.state.gender,
                missingDateTime: this.state.missingDateTime,
                guardianName: this.state.guardianName,
                guardianMobile: this.state.guardianMobile,
            }}>
                {(createMissingPerson, { data }) => (
                    <Form
                        onSubmit={async (e) => {
                            e.preventDefault();
                            try {
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
                        label="Photo"
                        >
                            <Upload
                                action="//jsonplaceholder.typicode.com/posts/"
                                listType="picture-card"
                                fileList={this.state.fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                                >
                                {this.state.fileList.length >= 3 ? null : (
                                    <div>
                                        <Icon type="plus" />
                                        <div className="ant-upload-text">Upload</div>
                                    </div>
                                )}
                            </Upload>
                            <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                                <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
                            </Modal>
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
