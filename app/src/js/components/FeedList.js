/** @jsx React.DOM */

var React = require('React'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({

  render: function() {

    var feedItems = this.props.items.map(function (item) {
      console.log(item);
      return <FeedItem
                      title={item.title}
                      desc={item.description}
                      voteCount={item.voteCount}
                      onVote={this.props.onVote}
                      key={item.key} />
    }.bind(this));

    return(
      <ul className="list-group container">
       {feedItems}
     </ul>
    );
   }

 });

 module.exports = FeedList;
