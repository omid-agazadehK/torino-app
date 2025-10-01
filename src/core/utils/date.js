import jalaali, { toJalaali } from "jalaali-js";
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
export function toJalaliString(dateString) {
  const date = new Date(dateString);

  const { jy, jm, jd } = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  const months = [
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

  return `${jd} ${months[jm - 1]} ${jy}`;
}
export function formatJalaliWithTime(isoDateStr) {
  if (!isoDateStr) return null;

  const date = new Date(isoDateStr);

  const { jy, jm, jd } = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  // فرمت نهایی
  return `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")} - ${hours}:${minutes}`;
}

export function toJalaliDate(isoDateStr) {
  if (!isoDateStr) return null;

  const date = new Date(isoDateStr);

  const { jy, jm, jd } = toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  );

  // خروجی در فرمت yyyy/mm/dd
  return `${jy}/${jm.toString().padStart(2, "0")}/${jd
    .toString()
    .padStart(2, "0")}`;
}

export function formatToPersianDate(isoDate) {
  const date = new Date(isoDate);

  const j = toJalaali(date);

  const weekdays = [
    "یکشنبه",
    "دوشنبه",
    "سه‌شنبه",
    "چهارشنبه",
    "پنج‌شنبه",
    "جمعه",
    "شنبه",
  ];
  const dayName = weekdays[date.getDay()];

  const months = [
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
  const monthName = months[j.jm - 1];

  return `${dayName} ${j.jd} ${monthName} ${j.jy}`;
}
export function getStatus(startDateStr, endDateStr) {
  const now = new Date();
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);

  if (now < startDate) {
    return { status: "not_started", message: "مانده تا شروع" };
  } else if (now >= startDate && now <= endDate) {
    return { status: "running", message: "در حال اجرا" };
  } else {
    return { status: "done", message: "به اتمام رسیده" };
  }
}
