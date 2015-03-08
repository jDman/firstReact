/** @jsx React.DOM */

var React = require('React');

var FeedItem = React.createClass({

  vote: function (newCount) {
    console.log(this.props);
    this.props.onVote({
      key: this.props.key,
      title: this.props.title,
      description: this.props.desc,
      voteCount: newCount
    });
  },

  voteUp: function () {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },

  voteDown: function () {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },

  render: function() {
    return(
      <li key={this.props.key} className="list-group-item">
        <span className="badge badge-success">{this.props.voteCount}</span>
        <span>{this.props.key}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span className="pull-right">
            <button id="up" className="btn btn-sm btn-primary" onClick={this.voteUp}>&uarr;</button>
            <button id="down" className="btn btn-sm btn-primary" onClick={this.voteDown}>&darr;</button>
          </span>
      </li>
    );
   }

 });

 module.exports = FeedItem;
