export default async function sitemap() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

  const tours = await fetch(`${API_URL}/tour`).then((res) => res.json());
  const staticRoutes = [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const dynamicRoutes = tours.map((t) => ({
    url: `${BASE_URL}/tours/${t.id}`,
    lastModified: new Date(t.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
