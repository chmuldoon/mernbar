import React, { Component } from 'react'
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser'
export class Header extends Component {
  render() {
    console.log(this.props.data)
    return (
      <div className="topBar">
        Header
      </div>
    )
  }
}

export default graphql(query)(Header)
