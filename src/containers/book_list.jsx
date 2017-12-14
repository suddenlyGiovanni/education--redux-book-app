import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map(book => (
      <li key={book.title} className="list-group-item">
        {book.title}
      </li>
    ));
  }
  render() {
    console.log(this.props);

    return (
      <div>
        <h1>hello world</h1>
        <ul className="list-group col-sm-4">{this.renderList}</ul>
      </div>
    );
  }
}

BookList.propTypes = {};

function mapStateToProps(state) {
  return {
    books: state.book,
  };
}

export default connect(mapStateToProps)(BookList);
