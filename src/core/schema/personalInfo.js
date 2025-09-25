import { object, string, date } from "yup";

const personalSchema = object({
  fullName: string()
    .nullable()
    .notRequired()
    .test(
      "len",
      "نام و نام خانوادگی باید بین 3 تا 20 کاراکتر باشد",
      (value) => {
        if (!value) return true;
        return value.length >= 3 && value.length <= 20;
      },
    ),

  nationalCode: string()
    .nullable()
    .notRequired()
    .test("len", "کد ملی باید دقیقا 10 رقم باشد", (value) => {
      if (!value) return true;
      return /^\d{10}$/.test(value);
    }),

  birthDate: date().nullable().notRequired().typeError("تاریخ معتبر نیست"),

  gender: string().nullable().notRequired(),
});
export default personalSchema;
