import { toJalaliString } from "./date";
//get origin and destination cities from data
export const cityHandler = (data, type) => {
  if (!data || !type) return;

  const result = data
    ?.map((tour) => {
      return tour[type];
    })
    .filter((item, index, self) => {
      return index === self.findIndex((t) => t.id === item.id);
    });
  return result;
};
//100000000 to 100,000,000
export const priceFormat = (number) => {
  return new Intl.NumberFormat("en-US").format(number);
};
export const objDateToCa=(date)=>{
 return new Intl.DateTimeFormat('en-CA').format(date)
}
// Use getInfoItems helper to generate infoItems array
// This keeps JSX clean and handles any necessary formatting (like dates or insurance)
export const getInfoItems = (tour) => {
  if (!tour) return;
  const {
    origin,
    startDate,
    endDate,
    fleetVehicle,
    availableSeats,
    insurance,
  } = tour;
  return [
    {
      icon: "routing",
      label: "مبدا",
      value: origin.name,
    },
    {
      icon: "calendar-fill",
      label: "تاریخ رفت",
      value: startDate,

      formatter: toJalaliString,
    },
    {
      icon: "calendar-fill",
      label: "تاریخ برگشت",
      value: endDate,

      formatter: toJalaliString,
    },
    {
      icon: "bus",
      label: "حمل و نقل",
      value: fleetVehicle,
    },
    {
      icon: "profile-two-user",
      label: "ظرفیت",
      value:
        availableSeats > 0 ? `حداکثر ${availableSeats} نفر` : " ظرفیت تکمیل",
    },
    {
      icon: "security",
      label: "بیمه",
      value: insurance,
      formatter: (v) => (v ? "دارد" : "ندارد"),
    },
  ];
};
