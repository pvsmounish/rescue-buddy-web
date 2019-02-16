import React, { Component } from 'react';
import { Card } from 'antd';

const menus = [
    {
        name: 'Find Relief Camps',
        route: '#'
    },
    {
        name: 'Find Missing Person',
        route: '#'
    },
    {
        name: 'Request Help',
        route: '#'
    },
    {
        name: 'Volunteer',
        route: '#'
    }
]

export class Home extends Component {

    renderMenus = () => {
        return(
            menus.map((menu) => {
                return (
                    <Card
                    title={menu.name}
                    style={{ width: 300, margin: 20 }}>
                        <p>{menu.route}</p>
                    </Card>
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
