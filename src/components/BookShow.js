import "../App.css";
export default function BookShow({ book }) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src={book.volumeInfo.imageLinks.thumbnail}
          alt={book.volumeInfo.title}
        />
        {/* <a href={book.selfLink}>
          
        </a> */}
      </div>
    </div>
  );
}
