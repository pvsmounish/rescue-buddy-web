import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './home';
import { LayoutWrapper } from '../components/layout' 
import "antd/dist/antd.css";

export class Routes extends Component {
    
    render() {
        return (
            <LayoutWrapper>
                <BrowserRouter>
                    <Switch>
                    <Route exact={true} path="/" component={Home} />
                    </Switch>
                </BrowserRouter>
            </LayoutWrapper>
        );
    }
}
