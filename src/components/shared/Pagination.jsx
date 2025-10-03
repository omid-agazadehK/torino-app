import { useEffect, useState } from "react";

export default function Pagination({ limit, data = [], setState }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(data?.length / limit);
  const start = (page - 1) * limit;
  const currentPosts = data?.slice(start, start + limit);
  useEffect(() => {
    setState(currentPosts);
  }, [start, limit]);
  if (data.length <= limit) return null;
  return (
    <div className="col-span-12 flex items-center justify-center gap-2 max-md:text-sm">
      <button
        disabled={page <= 1}
        onClick={() => setPage(page - 1)}
        className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
      >
        قبلی
      </button>

      {Array.from({ length: totalPages }).map((_, i) => {
        const p = i + 1;
        return (
          <button
            key={p}
            onClick={() => setPage(p)}
            className={`rounded px-3 py-1 ${
              p === page ? "bg-primary text-white" : "bg-gray-200"
            }`}
          >
            {p}
          </button>
        );
      })}

      <button
        disabled={page === totalPages}
        onClick={() => setPage(page + 1)}
        className="rounded bg-gray-200 px-3 py-1 disabled:opacity-50"
      >
        بعدی
      </button>
    </div>
  );
}
