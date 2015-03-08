/** @jsx React.DOM */

var React = require('react');

var FeedForm = React.createClass({

  handleForm: function(e) {
    e.preventDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      isbn: this.refs.isbn.getDOMNode().value,
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset();

    this.props.onNewItem(newItem);

  },

  render: function() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: display
    };
    return (
      <form ref="feedForm" style={styles} id="feedForm" className="container" onSubmit={this.handleForm}>

        <div className="form-group">

          <input ref="title" type="text" className="form-control" placeholder="Title" />
          <input ref="desc" type="text" className="form-control" placeholder="Description" />
          <input ref="isbn" type="text" className="form-control" placeholder="ISBN eg: 0871404532" />

          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>

      </form>
    );
  }

});

module.exports = FeedForm;
