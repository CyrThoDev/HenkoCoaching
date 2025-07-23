import NavBar from "@/components/NavBar";
import logoOrange from "@images/logoHenkoOrange.svg";
import HeadPages from "@/components/HeadPages";
import WaveOrange from "@/components/WaveOrange";

import { client } from "@/sanity/client";
import { MENTIONS_LEGALES_QUERY } from "@/queries/mentionsLegales";
import { PortableText } from "@portabletext/react";

export async function getStaticProps() {
	const mentions = await client.fetch(MENTIONS_LEGALES_QUERY);

	return {
		props: {
			mentions,
		},
	};
}

export default function MentionsLegales({ mentions }) {
	return (
		<>
			<NavBar logo={logoOrange} />
			<div className="flex flex-col gap-10">
				<HeadPages title={mentions.titre || "Mentions légales"} />
				<WaveOrange />
			</div>

			<div className="flex flex-col gap-10 px-10 lg:px-20 my-10 md:mb-0">
				<div className="space-y-6 mb-10">
					{mentions.sections?.map((section, index) => (
						<section key={index} className="flex flex-col gap-4">
							<h2 className="text-xl font-bold mb-3 text-darkorange">
								{section.titreSection}
							</h2>
							<PortableText value={section.contenu} />
						</section>
					))}

					<p className="italic">
						Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
					</p>
				</div>
			</div>
		</>
	);
}
