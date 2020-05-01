import React from 'react';
import ReactDOM from "react-dom";
// import './app.css'
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
// import { Router, Route, hashHistory, IndexRoute } from "react-router";
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  IndexRoute,
} from "react-router-dom";
import App from './components/App'
const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
})
const client = new ApolloClient({
  dataIdFromObject: o => o.id,
  link: httpLink,
  cache: new InMemoryCache()
})

const Root = () => {
  return (
    <ApolloProvider client={client}>
      
      <Router history={hashHistory}>
        <Route path="/" component={App}>

        </Route>
      </Router>

    </ApolloProvider>
  )
}

ReactDOM.render(<Root/>, document.querySelector('#root'))