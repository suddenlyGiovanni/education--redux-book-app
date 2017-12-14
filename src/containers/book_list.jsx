import React, { Component } from 'react';
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
        <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
  };
}

export default connect(mapStateToProps)(BookList);
