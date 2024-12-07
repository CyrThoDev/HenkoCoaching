import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Main from "@/components/Main";
import Head from "next/head";
import Header from "@/components/Header";

export default function Home() {
	return (
		<>
			<NavBar />
			<Header />
			<Main />
		</>
	);
}
