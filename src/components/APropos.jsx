import Link from "next/link";
import Image from "next/image";
import apropos from "../../public/images/apropos.jpg";

const APropos = () => {
	return (
		<div className="px-10 lg:px-20 py-20 flex flex-col md:flex-row gap-10 justify-around items-center">
			<Image src={apropos} width={"500"} height={""} className="" />
			<div className="flex flex-col gap-8 basis-1/2 ">
				<h2 className="text-3xl font-tanker">A propos</h2>
				<p className="font-pinyon text-5xl">Jessica Perestrelo</p>
				<p className="font-poppins ">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don&#39;t look even slightly
					believable. If you are going to use a passage of Lorem Ipsum, you need
					to be sure there isn&#39;t anything embarrassing hidden in the middle
					of text. All the Lorem Ipsum generators on the Internet tend to repeat
					predefined chunks as necessary, making this the first true generator
					on the.
				</p>
			</div>
		</div>
	);
};

export default APropos;
