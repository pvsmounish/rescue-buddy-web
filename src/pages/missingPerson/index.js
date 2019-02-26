import React, { Component } from 'react';
import {
    Form, Input, Icon, Button, InputNumber, Radio, Card, Upload, Modal, Collapse
    } from 'antd';
const { TextArea } = Input;
const { Panel } = Collapse;

export class MissingPerson extends Component {
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
            <div>

            <Collapse>
                <Panel header="Add Missing Person" key="1">
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
                        label="Description of Person"
                        >
                            <TextArea rows={4} />
                        </Form.Item>

                        <Form.Item
                        {...formItemLayout}
                        label="Age"
                        >
                            <InputNumber min={0} max={100} defaultValue={10} style={{ width: '100%' }}/>
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
                        label="Guardian's name"
                        >
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
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
                </Panel>
            </Collapse>
                
                
            </div>
        );
    }
}
