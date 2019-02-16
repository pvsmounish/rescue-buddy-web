import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from './home';
import { MissingPerson } from './missingPerson';
import { ErrorPage } from './errorPage';
import { LayoutWrapper } from '../components/layout' 
import "antd/dist/antd.css";

export class Routes extends Component {
    
    render() {
        return (
            <LayoutWrapper>
                <BrowserRouter>
                    <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route exact={true} path="/missing-person" component={MissingPerson} />
                    <Route path='*' component={() => <ErrorPage message="404 Not Found!"/>} />
                    </Switch>
                </BrowserRouter>
            </LayoutWrapper>
        );
    }
}
