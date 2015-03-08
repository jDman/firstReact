/** @jsx React.DOM */
var React = require('React'),
    Feed = require('./components/Feed');

React.renderComponent(
  <Feed />,
  document.getElementById('app')
);
