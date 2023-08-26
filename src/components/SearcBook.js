/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import "../App.css";
export default function SearchBook({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleSubmit = useCallback((e) => {
    e && e.preventDefault();
    onSubmit(term);
    setTerm("");
  });

  return (
    <div>
      <form onSubmit={handleSubmit} className="input-group input-group-sm mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type here to search"
          aria-label="Type here to search"
          aria-describedby="button-addon2"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
        >
          Search
        </button>
      </form>
    </div>
  );
}
