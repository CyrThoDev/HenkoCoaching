import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		try {
			const savedCart = localStorage.getItem("cartHenko");
			console.log("Données chargées depuis localStorage :", savedCart);
			if (savedCart) {
				setCart(JSON.parse(savedCart));
			}
		} catch (error) {
			console.error("Erreur lors du chargement depuis localStorage :", error);
		}
	}, []);

	useEffect(() => {
		try {
			console.log("Données sauvegardées dans localStorage :", cart);
			localStorage.setItem("cartHenko", JSON.stringify(cart));
		} catch (error) {
			console.error("Erreur lors de la sauvegarde dans localStorage :", error);
		}
	}, [cart]);

	const addToCart = (item) => {
		console.log("Article ajouté :", item); // Journal pour voir l'article ajouté
		setCart((prevCart) => {
			const newCart = [...prevCart, item];
			console.log("Nouveau contenu du panier :", newCart); // Vérifie le contenu après ajout
			return newCart;
		});
	};

	const removeFromCart = (itemId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
	};

	const clearCart = () => {
		setCart([]);
	};

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
