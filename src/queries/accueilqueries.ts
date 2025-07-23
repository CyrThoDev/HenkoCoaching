
import { defineQuery } from "next-sanity";


export const ACCUEIL_HEADER_QUERY = defineQuery(`
  *[_type == "accueilHeader"][0] {
    titre,
    sousTitre,
    bouton1 {
      label,
      url
    },
    bouton2 {
      label,
      url
    }
  }
`);

export const QUERY_ICONS = defineQuery(`
 *[_type == "Accueil-Icones"] | order(orderRank asc) {
  slug,
  nom,
  description
}
    `);

 export const SEO_QUERY = defineQuery(`
	*[_type == "pageSeo" && slug == "accueil"][0]{
		slug,
		title,
		description,
		keywords,
		"ogImageUrl": ogImage.asset->url
	}
		`);


export const resumeQuery = defineQuery(`
  *[_type == "resume"] | order(_createdAt asc) [0] {
    _id,
    image,
    titre,
    contenu
  }
`);

export const presentationQuery=defineQuery(`
   *[_type == "presentation"] | order(_createdAt asc) [0] {
    _id,
    image,
    titre,
    contenu
  }
`)