import qs from "qs";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const serverFetch = async (
  endPoint,
  query,
  cache = { cache: "no-store" },
) => {
  let url = BASE_URL;
  if (endPoint) url += endPoint;
  if (query) url += `?${qs.stringify(query)}`;
  try {
    const response = await fetch(`${url}`, cache);
    const json = await response.json();
    return json;
  } catch (error) {
    return false;
  }
};
