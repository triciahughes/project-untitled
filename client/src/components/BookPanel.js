function BookPanel({book}) {
    return (
        <>
            <h2>Currently Reading</h2>
            <img src={book.image} alt={book.title}></img>
            <h3><em>{book.title}</em> by {book.author} ({book.publication_year})</h3>
        </>
    )
}
export default BookPanel