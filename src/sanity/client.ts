import { createClient } from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
export const client = createClient({
	projectId: "3d97sryo",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});

export const urlFor = (source) => createImageUrlBuilder(client).image(source)
