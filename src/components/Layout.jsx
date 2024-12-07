import { Pinyon_Script, Poppins } from "next/font/google";
import localFont from "next/font/local";

const pinyon = Pinyon_Script({
	subsets: ["latin"],
	weight: ["400"],
	style: ["normal"],
	variable: "--font-pinyon",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"],
	variable: "--font-poppins",
});

const tanker = localFont({
	src: "../../public/fonts/Tanker-Regular.woff2",
	variable: "--font-tanker",
	weight: "400",
});

function Layout({ children }) {
	return (
		<div
			className={`${poppins.variable} ${pinyon.variable} ${tanker.variable} bg-white min-h-screen`}
		>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
