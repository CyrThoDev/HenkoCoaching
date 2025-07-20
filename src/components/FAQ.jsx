import { useState } from "react";
import ButtonBlack from "./ButtonBlack";
import ButtonOrange from "./ButtonOrange";


function FAQ({faq}) {
	const [openIndex, setOpenIndex] = useState(null);

	if (!faq) return null;

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className=" px-10 lg:px-20 flex flex-col gap-20 py-10 ">
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
			<span className="text-3xl text-black z-10">{faq.title || "FAQ"}</span>
				<div className="w-[2rem] h-3  bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="space-y-6">
				{faq.items?.map((faq, index) => (
					<div key={index} className="border-b border-white pb-4">
						<h3
							className="text-black font-semibold mb-2 cursor-pointer flex items-center justify-between"
							onClick={() => toggleFAQ(index)}
						>
							{faq.question}
							<span
								className={`transform transition-transform duration-300 text-black ${
									openIndex === index ? "rotate-180" : "rotate-0"
								}`}
							>
								▼
							</span>
						</h3>
						{openIndex === index && (
							<p className="text-black mt-2">{faq.answer}</p>
						)}
					</div>
				))}
			</div>
			<div className="flex flex-col gap-8 items-center justify-center text-black">
				<p className="text-center">
					Tu n’as pas trouvé réponse à ta question ?
				</p>
				<ButtonOrange
					title="JE SOUHAITE AVOIR PLUS D'INFOS"
					link="/#contact"
					width="w-[18rem] md:w-[20rem]"
				/>
			</div>
		</div>
	);
}

export default FAQ;
