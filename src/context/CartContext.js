import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);
	console.log(cart);
	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedCart = localStorage.getItem("cart");
			if (savedCart) setCart(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(cart));
	}, [cart]);

	const addToCart = (article) => {
		console.log("added to cart");
		setPanier((prev) => [...prev, article]);
		const prestationType = item.selectedOption || "cabinet";
		setCart((prevCart) => {
			const existingItem = prevCart.find(
				(cartItem) =>
					cartItem.id === item.id && cartItem.prestation === prestationType,
			);
			if (existingItem) {
				return prevCart.map((cartItem) =>
					cartItem.id === item.id && cartItem.prestation === prestationType
						? { ...cartItem, quantity: cartItem.quantity + 1 }
						: cartItem,
				);
			}
			return [
				...prevCart,
				{ ...item, quantity: 1, prestation: prestationType },
			];
		});
	};

	const clearCart =
		(() => {
			setCart([]);
		},
		[]);
	const calculateTotal = () => {
		return cart.reduce((total, item) => total + item.prix * item.quantity, 0);
	};

	const cartCount = cart.length;

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				clearCart,
				calculateTotal,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
