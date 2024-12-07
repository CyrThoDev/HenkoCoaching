import { Pinyon_Script, Poppins } from "next/font/google";

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

function Layout({ children }) {
	return (
		<div
			className={`${poppins.variable} ${pinyon.variable} bg-white min-h-screen`}
		>
			<main>{children}</main>
		</div>
	);
}

export default Layout;
