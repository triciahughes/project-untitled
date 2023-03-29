function BookPanel({book}) {
    return (
        <>
            <h1>Currently Reading</h1>
            <img src={book.image} alt={book.title}></img>
            <h2><em>{book.title}</em> by {book.author} ({book.publication_year})</h2>
        </>
    )
}
export default BookPanel