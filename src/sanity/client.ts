import { createClient } from "next-sanity";

export const client = createClient({
	projectId: "3d97sryo",
	dataset: "production",
	apiVersion: "2024-01-01",
	useCdn: false,
});
