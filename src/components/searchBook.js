import React, { Component } from "react";
import SearchResults from "./searchResults";
import { Link } from "react-router-dom";
import SearchBooksInput from "./searchBookInput";

class SearchBooks extends Component {
  render() {
    const { searchBooks, myBooks, onSearch, onResetSearch, onMove } =
      this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <SearchBooksInput onSearch={onSearch} />
        </div>
        <SearchResults
          searchBooks={searchBooks}
          myBooks={myBooks}
          onMove={onMove}
        />
      </div>
    );
  }
}

export default SearchBooks;
