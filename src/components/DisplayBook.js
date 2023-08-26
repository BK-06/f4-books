export default function DisplayBook({ book, handleChange }) {
  // const [book, setBooks] = useState("");
  // const [click, setClick] = useState("true");

  const handleClick = () => {
    handleChange(false);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h6>{book.volumeInfo.title}</h6>
          <img
            src={book.volumeInfo.imageLinks.thumbnail}
            alt={book.volumeInfo.title}
          />
          <h6>{book.volumeInfo.description}</h6>
          <br />

          <button onClick={handleClick}>Goback</button>
        </div>
      </div>
    </div>
  );
}
