import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "@/components/NavBar";
import Head from "next/head";
import Header from "@/components/Header";
import HomePage from "@/components/HomePage";

export default function Home() {
	return (
		<>
			<NavBar />
			<HomePage />
		</>
	);
}
