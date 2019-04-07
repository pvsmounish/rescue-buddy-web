import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from './pages/router';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { API_URI } from './config'

const client = new ApolloClient({
    uri: API_URI
});

const App = () => (
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
