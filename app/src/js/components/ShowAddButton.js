/** @jsx React.DOM */

var React = require('react');

var ShowAddButton = React.createClass({

  render: function() {

    var classString, buttonText;

    if(this.props.displayed) {
      classString = 'btn btn-lg btn-default btn-block show-add-btn';
      buttonText = 'Cancel';
    } else {
      classString = 'btn btn-lg btn-success btn-block show-add-btn';
      buttonText = 'Add An Awesome Book';
    }

    return (
      <button className={classString}
              onClick={this.props.onToggleForm}>
              {buttonText}
      </button>
    );
  }

});

module.exports = ShowAddButton;
