import React, { Component } from 'react';
import { Card, Icon } from 'antd';
import { Link } from "react-router-dom";
import { routes } from '../../config'

export class Home extends Component {

    renderMenus = () => {
        return(
            routes.map((route) => {
                return (
                    <Link to={route.path}>
                        <Card
                        title={route.name}
                        style={{ width: 300, margin: 20 }}>
                            <Icon type={route.icon} style={{fontSize: 40}}/>
                        </Card>
                    </Link>
                );
            })
        )
    }
    
    render() {
        return (
            <div>
                {this.renderMenus()}
            </div>
        );
    }
}
