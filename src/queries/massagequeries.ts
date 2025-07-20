import { defineQuery } from "next-sanity";


export const SEO_QUERY = defineQuery(`
  *[_type == "pageSeo" && slug == "massages"][0]{
    slug,
    title,
    description,
    keywords,
    "ogImageUrl": ogImage.asset->url
  }
    `);
export const MASSAGES_QUERY = defineQuery(`
  *[_type == "massages"]{
      order,
      title,
      "slug": slug.current,
      description,
      detailsList[]{
        title,
        description
      },
      prix1,
      prix2,
      calendlyUrl,
      button
    }
  `);


export const PHOTOS_MASSAGES_QUERY = defineQuery(`
  *[_type == "photosmassages"][0] {
    titreSection,
    photos[] {
      asset->{url},
      alt
    }
  }
`);

export const PHOTO_MASSAGEBAS_QUERY = defineQuery(`
  *[_type == "photoMassages"][0] {
    titreSection,
    image {
      asset->{url},
      alt
    }
  }
`);

export const TEXTE_MASSAGES_QUERY = defineQuery(`
  *[_type == "textemassages"][0] {
    titreSection,
    contenu
  }
`);
