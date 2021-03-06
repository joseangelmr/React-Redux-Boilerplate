import React, { Component, PropTypes } from 'react';
import {NavBar} from './../components/index'

export default class App extends Component {
    static propTypes = {
        children: PropTypes.node,
    };

    render() {
        return (
            <div className="app">
                <NavBar></NavBar>
                <h1 className="text-dark">React-Redux Boilerplate</h1>
                <div className="page-container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}
