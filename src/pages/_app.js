import "@/styles/globals.css";
import FloatingGiftIcon from "@/components/FloatingGiftIcon";
import Layout from "@/components/Layout";
import { CartProvider } from "@/context/CartContext";

export default function App({ Component, pageProps }) {
	return (
		<CartProvider>
			<Layout>
				<Component {...pageProps} />
				<FloatingGiftIcon />
			</Layout>
		</CartProvider>
	);
}
