/** @jsx React.DOM */

var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return <FeedItem id={item.id}
                       title={item.title}
                       desc={item.description}
                       isbn={item.isbn}
                       voteCount={item.voteCount}
                       onVote={this.props.onVote} />
    }.bind(this));

    return (
      <div className="container clearfix">
          {feedItems}
      </div>
    );
  }

});

module.exports = FeedList;
