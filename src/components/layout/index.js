import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from "react-router-dom";
import { routes } from "../../config";
import './index.css';

const { Header, Content, Footer, Sider } = Layout;

export class LayoutWrapper extends Component {

    renderMenuItems = () => {
        return(
            routes.map((route) => {
                return(
                    <Menu.Item key={route.path}>
                        <Icon type={route.icon} />
                        <span className="nav-text">{route.name}</span>
                    </Menu.Item>
                    )
            })
        )
    }
    
    render() {
        return (
        <Layout>
            <Sider style={{
            overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    {this.renderMenuItems()}
                </Menu>
            </Sider>
            <Layout style={{ marginLeft: 200 }}>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                    {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Made with <span>❤️</span> for People
                </Footer>
            </Layout>
        </Layout>
        );
    }
}
