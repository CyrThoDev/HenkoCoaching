import Link from "next/link";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";
import ButtonOrange from "./ButtonOrange";
import ButtonBlack from "./ButtonBlack";

export default function Google() {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		async function fetchReviews() {
			try {
				const response = await fetch("/api/googlereview");
				const data = await response.json();
				setReviews(data);
			} catch (error) {
				console.error("Erreur lors de la récupération des avis:", error);
			}
		}
		fetchReviews();
	}, []);

	return (
		<div className="px-10 lg:px-20 flex flex-col gap-10">
			<h2 className="text-3xl font-tanker text-start ">
				✨ Ils me font confiance ✨
			</h2>

			{/* Swiper pour mobile */}
			<div className="w-full lg:hidden">
				<Swiper
					slidesPerView={"1.3"}
					spaceBetween={30}
					modules={[Pagination]}
					className="mySwiper"
				>
					<ul>
						{reviews.length > 0 ? (
							reviews.map((review) => (
								<SwiperSlide key={review.time}>
									<li className="border-[0.025rem] rounded-xl border-gold flex flex-col w-full gap-2 p-4  shadow-lg">
										<p className="text-mb font-bold font-tanker">
											{review.author_name.split(" ")[0].toUpperCase()}
										</p>
										<p className="line-clamp-4 italic text-gray-700">
											&quot;{review.text}&quot;
										</p>
										<Link
											href={review.author_url}
											className="font-semibold text-darkorange hover:text-darkorange"
											target="_blank"
										>
											Lire plus
										</Link>
										<p className="text-sm text-gray-600">
											<strong>Note :</strong> {review.rating}/5
										</p>
										<div className="flex flex-row">
											{[...Array(review.rating)].map((_, i) => (
												<span key={i}>
													<FaStar className="text-yellow-400" />
												</span>
											))}
										</div>
									</li>
								</SwiperSlide>
							))
						) : (
							<p>Aucun avis trouvé.</p>
						)}
					</ul>
				</Swiper>
			</div>

			{/* Affichage sur desktop */}
			<ul className="hidden lg:flex lg:flex-row gap-4">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<li
							key={review.time}
							className="border-[0.025rem] rounded-xl border-gold flex flex-col w-full lg:w-1/5 gap-2 p-4 bg-white shadow-md  transition-all"
						>
							<p className=" text-mb font-bold font-poppin">
								{review.author_name.split(" ")[0].toUpperCase()}
							</p>
							<p className="line-clamp-4 text-gray-600">
								&quot;{review.text}&quot;
							</p>
							<Link
								href={review.author_url}
								className="font-semibold text-darkorange hover:text-darkorange"
								target="_blank"
							>
								Lire plus
							</Link>
							<p className="text-sm text-gray-600">
								<strong>Note :</strong> {review.rating}/5
							</p>
							<div className="flex flex-row">
								{[...Array(review.rating)].map((_, i) => (
									<span key={i}>
										<FaStar className="text-yellow-400" />
									</span>
								))}
							</div>
						</li>
					))
				) : (
					<p>Aucun avis trouvé.</p>
				)}
			</ul>
			<div className="self-center flex flex-col lg:flex-row  gap-4">
				<ButtonOrange
					title="VOIR TOUS LES AVIS"
					link="https://g.co/kgs/UyfvY31"
					width="w-[16rem]"
				/>
				<ButtonBlack
					title="DEPOSER UN AVIS"
					link="https://g.page/r/CZCxZG3lZqzeEAE/review"
					width="w-[16rem]"
				/>
			</div>
		</div>
	);
}
