import {Book} from "../types";

const BookComponent = ({book, onAddToCart}: {book: Book;
                    onAddToCart: (book: Book) => void }) => {
    return (
        <li>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: {book.price} <br />
               Stock: {book.stock}
            </p>
            <button
                onClick={() => onAddToCart(book)}
                disabled = {book.stock === 0}
            >
                {book.stock === 0 ? 'Out of Stock'
                : 'Add to cart'}
            </button>
        </li>
    )
}

export default BookComponent;