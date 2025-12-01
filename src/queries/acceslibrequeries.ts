import { defineQuery } from "next-sanity";

export const ACCESLIBRE_SEO_QUERY = defineQuery(`
*[_type == "pageSeo" && slug == "acceslibre"][0]{
  slug,
  title,
  description,
  keywords,
  "ogImageUrl": ogImage.asset->url
}
  `);

  export const TARIFSACCESLIBRE_QUERY = defineQuery(`
  *[_type=="acceslibretarifs"] {
    id, label, price
  }`);

    export const TEXTETARIFSACCESLIBRE_QUERY = defineQuery(`
  *[_type == "texteTarifAcceslibre"][0] {
    titre,
    contenu
  }
`);

export const TEXTE_ACCES_LIBRE_QUERY = defineQuery(`
  *[_type == "texteAccesLibre"][0] {
    contenu
  }
`);


export const PHOTO_BANDEAU_ACCES_LIBRE_QUERY = defineQuery(`
  *[_type == "photobandeauacceslibre"][0] {
    titreSection,
    "imageUrl": image.asset->url,
    "alt": image.alt
  }
`);

export const ACCESLIBRE_LIENS_QUERY = defineQuery(`
  *[_type == "AccesLibreLien"][0]{
      _id,
      label,
      url
    }`);  