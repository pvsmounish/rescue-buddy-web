import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import './index.css'
const { Header, Content, Footer } = Layout;

export class LayoutWrapper extends Component {
    
    render() {
        return (
        <Layout className="layout">
            <Header>
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['home']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="home">Home</Menu.Item>
                    <Menu.Item key="about">About</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {this.props.children}
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Made with <span>❤️</span> for People 
            </Footer>
        </Layout>
        );
    }
}
