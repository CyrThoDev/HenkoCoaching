import Link from "next/link";
import Image from "next/image";
import apropos from "../../public/images/apropos.jpg";

const APropos = () => {
	return (
		<div className="px-10 lg:px-20 flex flex-col gap-8">
			<h2 className="text-3xl font-tanker">Présentation de la coach</h2>
			<div className=" flex flex-col lg:flex-row gap-10 justify-around items-center">
				<Image
					src={apropos}
					width={"auto"}
					height={"auto"}
					className="basis-1/2"
					alt=""
				/>
				<div className="flex flex-col gap-4 basis-1/2 ">
					<p className="font-pinyon text-4xl">Jessica Perestrelo</p>
					<p className="">
						Passionnée et pratiquant le sport depuis toujours, j&#39;ai su me
						réorienter dans mon domaine de prédilection après avoir travaillé
						quelques années dans le commerce et plus particulièrement dans les
						différents métiers de l&#39;immobilier. J&#39;ai pu grâce à ce
						métier développer un bon sens de l&#39;écoute et d&#39;adaptation.
					</p>
					<p className="">
						Après avoir pratiqué le rugby durant 14 ans dont 4 années à haut
						niveau dans les clubs d&#39;Elite 1ère et 2ème division nationale à
						Bayonne, Dax ou encore en région parisienne je décide de me lancer
						en tant que coach afin d&#39;allier deux domaines essentiels pour
						moi : le sport et les valeurs humaines.
					</p>
					<p className="">
						Je suis animée par une vision simple, durable et équilibrée du
						sport. Mon rôle est de vous accompagner, vous motiver et vous
						conseiller dans votre démarche sportive au quotidien afin de trouver
						votre équilibre. Je m&#39;adapte à vos besoins et à votre niveau
						pour vous faire bénéficier des bienfaits de l&#39;activité physique
						et vous rendre acteur de votre forme et surtout de votre santé.
					</p>
				</div>
			</div>
		</div>
	);
};

export default APropos;