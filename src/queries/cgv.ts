import { defineQuery } from "next-sanity";

export const CGV_QUERY = defineQuery(`
  *[_type == "conditionsVente"][0]{
    titre,
    sections[]{
      titreSection,
      contenu
    }
  }
`);
