import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export class NavBarLink extends Component {
  render() {

    function isValidURL(string) {
      var res = string.match(/(http(s)?:\/\/.)/g);
      return (res !== null)
    };

    if(isValidURL(this.props.url)){
      return <a className="my-dropbtn" href={this.props.url} target="_blank">{this.props.text}</a>
    }
    return (
      <Link to={this.props.url} className="my-dropbtn">
        {this.props.text}
      </Link>
    );

  }
}
