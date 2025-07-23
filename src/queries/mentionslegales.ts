import { defineQuery } from "next-sanity";

export const MENTIONS_LEGALES_QUERY = defineQuery(`
  *[_type == "mentionsLegales"][0]{
    titre,
    sections[]{
      titreSection,
      contenu
    }
  }
`);
