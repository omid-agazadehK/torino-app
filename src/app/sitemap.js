export default async function sitemap() {
  const tours = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/tour`).then(
    (res) => res.json(),
  );
  const staticRoutes = [
    {
      url: "https://example.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
  ];

  const dynamicRoutes = tours.map((t) => ({
    url: `https://example.com/tour/${t.id}`,
    lastModified: new Date(t.updatedAt),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
