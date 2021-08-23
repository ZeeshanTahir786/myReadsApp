import React, { useState } from "react";

const BookshelfChanger = ({ shelf, book, onMove }) => {
  const [value, setValue] = useState(shelf);
  const handleChange = (event) => {
    const val = event.target.value;
    // this.setState({ value });
    setValue(val);
    onMove(book, val);
  };
  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
export default BookshelfChanger;
