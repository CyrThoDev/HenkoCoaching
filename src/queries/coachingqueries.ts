import { defineQuery } from "next-sanity";

export const TARIFSCOACHING_QUERY = defineQuery(`
*[_type == "tarifs"] | order(_createdAt asc) {
  sectionTitle,
  items[] {
    label,
    price,
    mention,
    isPromoted
  },
  footerText
}`);

  export const TEXTETARIFS_QUERY = defineQuery(`
  *[_type == "texteTarifCoaching"][0] {
    titre,
    contenu
  }
`);

export const SEO_QUERY = defineQuery(`
  *[_type == "pageSeo" && slug == "coaching"][0] {
    slug,
    title,
    description,
    keywords,
    "ogImageUrl": ogImage.asset->url
  }
`);


export const COACHINGPRESENTATION_QUERY = defineQuery(`
  *[_type == "coachingPresentation"][0] {
  titre,
  "imageUrl": image.asset->url,
  features,
  cta {
    text,
    url,
    note
  }
}
  	`);


    export const COACHING_MAIN_QUERY =defineQuery( `
  *[_type == "coachingPourquoi"][0] {
  titre,
    intro,
    benefits,
    "imageUrl": image.asset->url
  }
`);

export const PLANNING_QUERY = `*[_type == "planning"][0]{
  titre,
  details[] {
    title,
    description,
    type
  },
  imageMobile {
    asset->{
      url,
      metadata { lqip }
    },
    alt
  },
  imageDesktop {
    asset->{
      url,
      metadata { lqip }
    },
    alt
  },
  imageCoaching {
    asset->{
      url,
      metadata { lqip }
    },
    alt
  },
  imageLibreAcces {
    asset->{
      url,
      metadata { lqip }
    },
    alt
  },
  ctaButtons[] {
    title,
    url,
    note,
    style,
    page
  }
}`;




export   const FAQ_QUERY = defineQuery(`*[_type == "faq"][0]{
    title,
    items[]{
      question,
      answer
    }
  }`);

  export const SEANCE_QUERY = `*[_type == "seanceStep"] | order(ordre asc) {
  _id,
  ordre,
  contenu,
  cote
}`;