import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext({
	cart: [],
	totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const totalQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);

	const addItem = (item, quantity) => {
		if (!isInCart(item.id) && quantity > 0) {
			setCart((prev) => [...prev, { ...item, quantity }]);
		} else {
			toast.warn('El producto ya fue agregado', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "red",
				});
			}
	};

	const removeItem = (itemId) => {
		const cartUpdated = cart.filter((prod) => prod.id !== itemId);
		setCart(cartUpdated);
	};

	const clearCart = () => {
		setCart([]);
	};

	const isInCart = (itemId) => {
		return cart.some((prod) => prod.id === itemId);
	};

	return (
		<CartContext.Provider
			value={{ cart, addItem, removeItem, clearCart, setCart, totalQuantity }}
		>
			{children}
			<ToastContainer />
		</CartContext.Provider>
		
	);
};
