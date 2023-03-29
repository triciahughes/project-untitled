import currentlyReading from "../currently.png";
function BookPanel({ book }) {
  return (
    <div id="bookPanel">
      <img
        alt="currently reading"
        src={currentlyReading}
        className="currentlyReading"
      ></img>
      <h4 className="bookPanel">
        <em>{book.title}</em><br/>by {book.author}<br/>({book.publication_year})
      </h4>
      <img src={book.image} alt={book.title} className="bookPanel"></img>
    </div>
  );
}
export default BookPanel;
