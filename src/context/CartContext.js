import {
	createContext,
	useState,
	useEffect,
	useContext,
	useCallback,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		try {
			if (typeof window !== "undefined") {
				const savedCart = localStorage.getItem("cartHenko");
				if (savedCart) setCart(JSON.parse(savedCart));
			}
		} catch (error) {
			console.error("Erreur lors du chargement depuis localStorage :", error);
		}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem("cartHenko", JSON.stringify(cart));
		} catch (error) {
			console.error("Erreur lors de la sauvegarde dans localStorage :", error);
		}
	}, [cart]);

	const addToCart = (item) => {
		setCart((prevCart) => [...prevCart, item]);
	};

	const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	const clearCart = useCallback(() => {
		setCart([]);
		try {
			localStorage.removeItem("cartHenko");
		} catch (error) {
			console.error(
				"Erreur lors de la suppression du panier dans localStorage :",
				error,
			);
		}
	}, []);

	// const calculateTotal = () => {
	// 	return cart.reduce((total, item) => total + item.prix * item.quantity, 0);
	// };
	const cartCount = cart.length;

	return (
		<CartContext.Provider
			value={{
				cart,
				addToCart,
				removeFromCart,
				clearCart,
				cartCount,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useCart = () => useContext(CartContext);
