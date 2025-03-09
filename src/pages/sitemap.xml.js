const BASE_URL = "www.henkocoachingmimizan.fr" || "http://localhost:3000";

function generateSiteMap(pages) {
	return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
				.map((page) => {
					return `
       <url>
           <loc>${`${BASE_URL}${page.path}`}</loc>
           <lastmod>${page.lastModified}</lastmod>
       </url>
     `;
				})
				.join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }) {
	const pages = [
		{ path: "/", lastModified: new Date().toISOString() },
		{ path: "/coaching", lastModified: new Date().toISOString() },
		{ path: "/massages", lastModified: new Date().toISOString() },
		{ path: "/acces-libre", lastModified: new Date().toISOString() },
		{ path: "/location-espace-pro", lastModified: new Date().toISOString() },
		{ path: "/contact", lastModified: new Date().toISOString() },
	];

	const sitemap = generateSiteMap(pages);

	res.setHeader("Content-Type", "text/xml");
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default function Sitemap() {
	return null;
}
