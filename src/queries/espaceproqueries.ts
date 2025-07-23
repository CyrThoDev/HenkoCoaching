import { defineQuery } from "next-sanity";

export const ESPACE_PRO_QUERY = defineQuery(`
  *[_type == "espaceProfessionnel"][0]{
    "photoHeroUrl": photoHero.asset->url,
    "photoHeroAlt": photoHero.alt,
    texte,
    "photo1Url": photo1.asset->url,
    "photo1Alt": photo1.alt,
    "photo2Url": photo2.asset->url,
    "photo2Alt": photo2.alt
  }
`);


export const SEO_QUERY = defineQuery(`
	*[_type == "pageSeo" && slug == "locationespacepro"][0]{
		slug,
		title,
		description,
		keywords,
		"ogImageUrl": ogImage.asset->url
	}
		`);
