import currentlyReading from "../currently.png";
function BookPanel({ book }) {
  
  if (!book || book.length === 0) {

    return(
      <section id="bookPanel" className="panel">
      <img
        alt="Currently Reading"
        src={currentlyReading}
        className="currentlyReading"
      ></img>
      <h4 className="bookPanel">
        You need to select a book for the group to read.
      </h4>
    </section>
    )
  }
  
  
  return (
    <section id="bookPanel" className="panel">
      <img
        alt="Currently Reading"
        src={currentlyReading}
        className="currentlyReading"
      ></img>
      <h4 className="bookPanel">
        <em>{book?.title}</em>
        <br />
        by {book.author}
        <br />({book.publication_year})
      </h4>
      <img
        src={book.image}
        alt={`Cover for '${book.title}'`}
        className="bookPanel"
      ></img>
    </section>
  );
}
export default BookPanel;
