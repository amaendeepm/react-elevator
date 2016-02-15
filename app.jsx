/** @jsx React.DOM */

'use strict';

var React = require('react/addons');
var ReactDOM = require('react-dom');

var Elevator = require('./script/elevator');

ReactDOM.render(<Elevator/>, document.getElementById("root"))