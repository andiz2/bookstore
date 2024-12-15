import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, confirmOrder } from '../components/features/cartSlice';

const Cart = ({ userID }: { userID: number }) => {
    const dispatch = useDispatch();
    const cart = useSelector((state: RootState) =>
        state.cart.items.filter((item) => item.userID === userID) 
    );

    const handleRemoveFromCart = (itemId: number) => {
        dispatch(removeFromCart({ itemId, userID })); 
    };

    const handleConfirmOrder = () => {
        dispatch(confirmOrder({ books: cart, userID })); 
    };

    return (
        <div>
            <h2>Your Cart</h2>
            <ul>
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <li key={item.id}>
                            {item.title} x {item.quantity}{' '}
                            <button onClick={() => handleRemoveFromCart(item.id)}>
                                Remove
                            </button>
                        </li>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </ul>
            {cart.length > 0 && (
                <button onClick={handleConfirmOrder}>Confirm Order</button>
            )}
        </div>
    );
};

export default Cart;
