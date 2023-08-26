/* eslint-disable react-hooks/exhaustive-deps */
import BookList from "./components/BookList";
import SearchBook from "./components/SearcBook";
import { useState, useEffect, useCallback } from "react";
import searchBooks from "./searchApi";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);

  const handleSubmit = useCallback(async (term) => {
    const result = await searchBooks(term);
    setBooks(result.items);
    // console.log(result.items);
  });

  const sleep = (n) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(1);
      }, (n || 1) * 1000);
    });
  };

  const displayBook = (id) => {
    // const result = await searchBooks(term);
  };

  useEffect(() => {
    const init = async () => {
      const result1 = await searchBooks("Harry Potter");
      await sleep(1);
      const result2 = await searchBooks("Sherlok Homes");
      setBooks([...result1.items, ...result2.items]);
    };
    init();
  }, []);

  return (
    <div>
      <SearchBook onSubmit={handleSubmit} />
      <BookList books={books} />
    </div>
  );
}
