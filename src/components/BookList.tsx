import { useDispatch } from 'react-redux';
import { addToCart } from './features/cartSlice';
import BookComponent from './BookComponent'; 
import { Book, CartItem } from '../types';

const BookList = ({ bookList, userID }: { bookList: Book[], userID: number }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (book: Book) => {
    const cartItem: CartItem = { 
      ...book, 
      quantity: 1, 
      userID 
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <ul>
      {bookList.map((book) => (
        <BookComponent 
          key={book.id} 
          book={book} 
          onAddToCart={handleAddToCart} 
        />
      ))}
    </ul>
  );
};

export default BookList;
