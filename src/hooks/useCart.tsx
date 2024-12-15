// useCart.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addToCart, removeFromCart, confirmOrder } from '../components/features/cartSlice';
import { CartItem, Book } from '../types';

const useCart = (userID: number) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) => state.cart.items);

    const handleAddToCart = (book: Book) => {
        const cartItem: CartItem = { ...book, userID, quantity: 1 };
        dispatch(addToCart(cartItem));
    };

    const handleRemoveFromCart = (itemId: number) => {
        dispatch(removeFromCart({ itemId, userID }));
    };

    const handleConfirmOrder = (books: Book[]) => {
        dispatch(confirmOrder({ books, userID }));
    };

    return { cart, handleAddToCart, handleRemoveFromCart, handleConfirmOrder };
};

export default useCart;
