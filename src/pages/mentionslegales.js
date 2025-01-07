import NavBar from "@/components/NavBar";
import logoOrange from "@images/logoHenkoOrange.svg";
import HeadPages from "@/components/HeadPages";
import WaveOrange from "@/components/WaveOrange";

export default function MentionsLegales() {
	return (
		<>
			<NavBar logo={logoOrange} />
			<div className="flex flex-col gap-10">
				<HeadPages title="Mentions légales et politique de confidentialité" />
				<WaveOrange />
			</div>
			<div className="flex flex-col gap-10 px-10 lg:px-20 my-10 md:mb-0  ">
				<div className="space-y-6 mb-10">
					<section className="flex flex-col gap-4 ">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							Éditeur du Site
						</h2>
						<p>Henko Coaching - Jessica Perestrelo</p>
						<p>SIREN : [Votre SIREN] </p>
						<p>
							Conformément aux dispositions des Articles 6-III et 19 de la Loi
							n°2004-575 du 21 juin 2004 pour la Confiance dans l&#39;économie
							numérique, dite L.C.E.N., il est porté à la connaissance des
							utilisateurs et visiteurs, ci-après l&#39; « Utilisateur », du
							site https://www.henkocoachingmimizan.fr, ci-après le « Site » ,
							les présentes mentions légales.
						</p>
						<p>
							La connexion et la navigation sur le Site par l&#39;Utilisateur
							implique acceptation intégrale et sans réserve des présentes
							mentions légales.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							Réalisation du site{" "}
						</h2>
						<p>Conception graphique et développement : Cyrielle Thomas</p>
						<p>Hébergement : Vercel</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							Accès au site
						</h2>
						<p>
							Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de
							force majeure, interruption programmée ou non et pouvant découlant
							d&#39;une nécessité de maintenance.
						</p>
						<p>
							En cas de modification, interruption ou suspension du Site,
							l&#39;Éditeur ne saurait être tenu responsable.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							Collecte de données personnelles
						</h2>
						<p>
							Le Site assure à l&#39;Utilisateur une collecte et un traitement
							d&#39;informations personnelles dans le respect de la vie privée
							conformément à la loi n°78-17 du 6 janvier 1978 relative à
							l&#39;informatique, aux fichiers et aux libertés.
						</p>

						<p>
							Les données collectées dans le cadre du formulaire de contact sont
							utilisées uniquement pour répondre à votre demande. Aucune donnée
							ne sera utilisée à d&#39;autres fins.
						</p>
						<p>
							Par ailleurs nous utilisons des technologies pour stocker
							temporairement votre panier d&#39;achat. Ces données sont locales
							au navigateur et aucune donnée personnelle ni sensible n&#39;est
							stockée.
						</p>
						<p>
							En vertu de la loi Informatique et Libertés, en date du 6 janvier
							1978, l&#39;Utilisateur dispose d&#39;un droit d&#39;accès, de
							rectification, de suppression et d&#39;opposition de ses données
							personnelles. L&#39;Utilisateur peut demander la suppression de
							ses données directement par mail à [votre email]
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							Propriété intellectuelle{" "}
						</h2>
						<p>
							Tous les éléments présents sur ce site (textes, images,
							graphismes, logos, vidéos, icônes, logiciels, etc.) sont protégés
							par les lois en vigueur sur la propriété intellectuelle et restent
							la propriété exclusive de Henko Coaching, sauf mention contraire.
							Toute reproduction, distribution, modification, adaptation,
							retransmission ou publication, même partielle, de ces différents
							éléments, sans l&#39;accord écrit préalable de Henko Coaching, est
							strictement interdite. L&#39;utilisation de ces contenus à des
							fins commerciales ou publicitaires est également prohibée. Toute
							infraction à ces règles constitue une contrefaçon susceptible
							d&#39;engager la responsabilité civile et pénale de son auteur.
						</p>
					</section>

					<p className="italic">Dernière mise à jour : 07/01/2024</p>
				</div>
			</div>
		</>
	);
}
