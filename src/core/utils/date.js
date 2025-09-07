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
diffDays;
export function diffDays(dateStr1, dateStr2) {
  const d1 = new Date(dateStr1);
  const d2 = new Date(dateStr2);
  const diffTime = d2 - d1;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}
export function getJalaliMonth(dateStr) {
  const [gy, gm, gd] = dateStr.split("-").map(Number);
  const { jm } = jalaali.toJalaali(gy, gm, gd);

  const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return persianMonths[jm - 1];
}
