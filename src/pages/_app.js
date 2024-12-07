import "@/styles/globals.css";
import FloatingGiftIcon from "@/components/FloatingGiftIcon";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
				<FloatingGiftIcon />
			</Layout>
		</>
	);
}
