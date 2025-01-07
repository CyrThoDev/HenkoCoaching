import Link from "next/link";
import logoOrange from "@images/logoHenkoOrange.svg";
import HeadPages from "@/components/HeadPages";
import WaveOrange from "@/components/WaveOrange";
import NavBar from "@/components/NavBar";

const cgv = () => {
	return (
		<>
			<NavBar logo={logoOrange} />
			<div className="flex flex-col gap-10">
				<HeadPages title="Conditions générales de vente" />
				<WaveOrange />
			</div>
			<div className="flex flex-col gap-10 px-10 lg:px-40 my-10 md:mb-0  ">
				<div className="space-y-6 mb-10">
					<section className="flex flex-col gap-4 ">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							1 - Objet et détails des conditions générales de vente
						</h2>
						<p>
							Les présentes Conditions Générales de Vente (CGV) régissent
							l&#39ensemble des ventes de cartes cadeaux effectuées sur le site
							Henko Coaching (« le Site »). En validant une commande sur le
							Site, l&#39utilisateur (« le Client ») reconnaît avoir pris
							connaissance des présentes CGV et les accepter sans réserve.
						</p>
						<p>
							La présente CGV lie le prestataire de vente de services, nommés
							ci-après « vendeur », ainsi que la partie faisant appel à ses
							services ou objets vendus et loués, nommé ci-après « client ».
						</p>
						<p>
							Les conditions générales présentes concernent d’une part la
							société : []
							<br />
							Adresse de l’entreprise : 43 avenue Maurice Martin 40200 Mimizan
							<br />
							Adresse électronique de l’entreprise : []
							<br />
							SIREN : [] <br />
						</p>
						<p>
							D’autre part, les clients, personnes physiques ou morales ayant
							réglé une commande sur notre site. Elles font office de contrat
							des droits et des obligations conclues entre les deux parties.
						</p>
						<p>
							La société se réserve le droit d’adapter la CGV ci-présente à tout
							moment, le contrat applicable étant celui consultable sur le site
							web à la date du paiement.
						</p>
						<p>
							Toute transaction passée sur notre site web demande que les
							conditions générales de vente ci-présentes soient préalablement
							lues et acceptées par le client. Elles seront accessibles à tout
							moment sur notre site web et présentées de manière claire et au
							moment du paiement, à travers un clic d’acceptation pour valider
							son accord.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							2 - Description des produits
						</h2>
						<p>
							Les cartes cadeaux disponibles sur le Site permettent au
							bénéficiaire d&#39accéder à des prestations définies par Henko
							Coaching. Les détails des prestations incluses dans chaque carte
							cadeau sont précisés sur la page produit.
						</p>
						<p>
							Les prix sont toujours indiqués en euros TTC ( Toutes taxes
							comprises).À cela s’ajoute d’éventuels frais de livraison et de
							services applicables le jour de la prise de commande, indiqués
							clairement et séparément du prix du service.
						</p>
						<p>Toutes les commandes doivent être payées en euros.</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							3 - Commande
						</h2>
						<p>
							Le Client s&#39engage à fournir des informations exactes lors de
							la passation de commande, notamment pour l&#39adresse e-mail qui
							sera utilisée pour envoyer la carte cadeau. Toute erreur de saisie
							relève de la responsabilité du Client. Après validation du panier,
							le Client est redirigé vers la plateforme de paiement Stripe, qui
							gère l&#39ensemble des transactions de manière sécurisée.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							4 - Paiement
						</h2>
						<p className="italic">
							Le paiement des commandes s&#39effectue exclusivement via Stripe.
							Les moyens de paiement acceptés (carte bancaire, etc.) sont
							indiqués lors de la validation du paiement. Le paiement est
							immédiat, et la commande n&#39est validée qu&#39une fois le
							paiement confirmé. En cas de refus du paiement par Stripe, la
							commande sera automatiquement annulée.
						</p>
					</section>

					<section className="flex flex-col gap-4">
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							5 - Livraison
						</h2>
						<p className="italic">
							Les cartes cadeaux sont envoyées par e-mail à l&#39adresse
							indiquée par le Client lors de la commande, sous un délai maximum
							de 24 heures après confirmation du paiement. Henko Coaching ne
							saurait être tenu responsable des retards ou des erreurs de
							livraison dus à une saisie incorrecte de l&#39adresse e-mail par
							le Client.
						</p>
					</section>

					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							6 -Validité des cartes cadeaux
						</h2>
						<p>
							Conformément à l&#39article L221-28 du Code de la consommation, le
							droit de rétractation ne s&#39applique pas aux cartes cadeaux,
							celles-ci étant considérées comme des produits personnalisés et
							immédiatement utilisables après achat. Toute commande validée est
							donc ferme et définitive.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							7 - Responsabilité
						</h2>
						<p>
							Henko Coaching ne saurait être tenu responsable en cas
							d&#39utilisation frauduleuse de la carte cadeau par un tiers ou en
							cas d&#39erreur dans les informations fournies par le Client lors
							de la commande.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							8 - Protection des données personnelles
						</h2>
						<p>
							Les informations collectées lors de la commande sont traitées
							conformément à notre politique de confidentialité, disponible sur
							le Site. Elles sont utilisées exclusivement pour le traitement des
							commandes et ne sont pas transmises à des tiers, hormis à Stripe
							pour le traitement des paiements.
						</p>
						<br /> En utilisant notre Site et en passant commande, vous déclarez
						accepter sans réserve les termes de la présente{" "}
						<Link href="mentionslegales" className="font-semibold">
							"Politique de protection des données personnelles"
						</Link>{" "}
						. Le vendeur pourra modifier librement la présente Politique de
						protection des données personnelles. Toute modification prendra
						effet dès publication.
					</section>
					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							9 - Modification des CGV
						</h2>
						<p>
							Henko Coaching se réserve le droit de modifier les présentes CGV à
							tout moment. Les CGV applicables sont celles en vigueur à la date
							de la commande.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							10 - Loi applicable et réclamation
						</h2>
						<p>
							Les présentes CGV sont soumises au droit français. En cas de
							litige, une solution amiable sera recherchée avant tout recours
							judiciaire. Si aucune solution amiable n&#39est trouvée, les
							tribunaux compétents seront ceux du ressort du siège social de
							Henko Coaching.
						</p>
					</section>
					<section>
						<h2 className="text-xl font-bold mb-3 text-darkorange">
							10 - Contact
						</h2>
						<p>
							Pour toute question ou réclamation concernant les cartes cadeaux
							ou les présentes CGV, le Client peut contacter Henko Coaching via
							[]
						</p>
					</section>
					<p className="italic">Dernière mise à jour : 07/01/2024</p>
				</div>
			</div>
		</>
	);
};

export default cgv;
