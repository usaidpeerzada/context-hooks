import React, { createContext, useState } from "react";

export const BookContext = createContext();

function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Elon Musk", id: 1 },
    { title: "Deep Work", id: 2 },
    { title: "Atomic Habits", id: 3 },
    { title: "Principles", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
