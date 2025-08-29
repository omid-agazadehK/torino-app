import { object, string } from "yup";
const phoneNumberSchema = object({
  phoneNumber: string()
    .required("وارد کردن شماره موبایل الزامی است")
    .matches(
      /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
      "شماره موبایل معتبر نیست. مثال:6789 ***0912"
    ),
});

export default phoneNumberSchema;
