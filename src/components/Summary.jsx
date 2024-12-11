import vector from "../../public/images/vector.svg";
import Image from "next/image";
import salle3 from "../../public/images/salle3.jpg";
import Link from "next/link";

function Summary() {
	return (
		<div className="bg-darkorange text-white">
			<div className=" px-10 lg:px-20 py-10 flex flex-col md:flex-row gap-10 justify-around items-center">
				<Image src={salle3} width={300} height={""} className="" />
				<div className="flex flex-col gap-8 lg:basis-1/2 ">
					<h2 className="text-2xl md:text-3xl ">
						Un accompagnement pour tous , entouré de professionnels de santé{" "}
					</h2>
					<p>
						Cras hendrerit sapien vel tellus rutrum, tempor semper eros porta.
						Suspendisse at leo volutpat, lacinia nisl quis, mollis arcu. Etiam
						turpis lacus, aliquet ut mi at, aliquet ultricies diam. Nullam
						elementum purus at odio elementum, vel accumsan turpis congue.
					</p>
					<Link
						href="/#contact"
						className="bg-black text-center text-white rounded-md self-center md:self-start p-2 w-[15rem] md:w-[18rem]"
					>
						JE SOUHAITE AVOIR PLUS D’INFOS
					</Link>
				</div>
			</div>
			<Image src={vector} width={"auto"} height={"auto"} />
		</div>
	);
}

export default Summary;
