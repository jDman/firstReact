/** @jsx React.DOM */

var React = require('react');

var FeedItem = React.createClass({

  vote: function(newCount) {
    this.props.onVote({
      id: this.props.id,
      isbn: this.props.isbn,
      title: this.props.title,
      description: this.props.desc,
      voteCount: newCount
    });
  },

  voteUp: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },

  voteDown: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },

  render: function() {

    var positiveNegativeClassName = this.props.voteCount >= 0 ?
                                    'badge badge-success' :
                                    'badge badge-danger';
    var isbn = this.props.isbn;


    var source = "http://images.amazon.com/images/P/" + isbn + ".ZTZZZZZZ.jpg";

    var url = "http://www.amazon.co.uk/gp/product/" + isbn;

    return (
      <div id={this.props.id} className="col-md-6 clearfix bookitem">
        <div className="col-md-6">
          <a href={url} target="_blank">
            <img src={source} className="img-thumbnail coverimg" alt={this.props.title}/>
          </a>
          <p className="buy-book"><a href={url} target="_blank" className="btn btn-info">Buy from Amazon</a></p>

        </div>
        <div className="col-md-6">
          <h4>{this.props.title} <span className={positiveNegativeClassName}>{this.props.voteCount}</span></h4>
          <p>
            <button id="up" className="btn btn-sm btn-success" onClick={this.voteUp}><i className="fa fa-thumbs-o-up"></i></button>
            <button id="down" className="btn btn-sm btn-danger" onClick={this.voteDown}><i className="fa fa-thumbs-o-down"></i></button>
          </p>
          <p>{this.props.desc}</p>
        </div>

      </div>
    );
  }

});

module.exports = FeedItem;
