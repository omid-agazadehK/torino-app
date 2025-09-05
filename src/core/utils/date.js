import jalaali from "jalaali-js";
function faToEnNumbers(str) {
  return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
}
export function shamsiToGregorian(shamsiDate) {
  if (!shamsiDate) return null;
  const englishDate = faToEnNumbers(shamsiDate);

  const parts = englishDate.split("/").map(Number);
  if (parts.length !== 3) return null;

  const [jy, jm, jd] = parts;
  const { gy, gm, gd } = jalaali.toGregorian(jy, jm, jd);
  return `${gy}-${String(gm).padStart(2, "0")}-${String(gd).padStart(2, "0")}`;
}

export const DateObj = (gregDateStr) => {
  if (!gregDateStr) return null;

  return new Date(gregDateStr);
};
