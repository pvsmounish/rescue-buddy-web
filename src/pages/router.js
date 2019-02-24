import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LayoutWrapper } from '../components/layout' ;
import * as Pages from './index'
import { routes } from '../config'
import "antd/dist/antd.css";

export class Router extends Component {

    renderRoutes = () => (
        routes.map((route) => {
            return(
                <Route exact={true} path={route.path} component={route.page} />
            )
        })
    );
    
    render() {
        return (
            <LayoutWrapper>
                <BrowserRouter>
                    <Switch>
                        {this.renderRoutes()}
                        <Route path='*' component={() => <Pages.ErrorPage message="404 Not Found!"/>} />
                    </Switch>
                </BrowserRouter>
            </LayoutWrapper>
        );
    }
}
