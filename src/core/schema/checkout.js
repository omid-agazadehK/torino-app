import { object, string } from "yup";
const checkoutSchema = object({
  fullName: string()
    .required("این فیلد الزامی است")
    .min(3, "نام و نام خانوادگی باید بیشتر از 3 حرف باشند")
    .max(20, "نام و نام خانوادگی باید کمتر از 20 حرف باشند"),
  nationalCode: string()
    .required("این فیلد الزامی است")
    .min(10, "کد ملی باید 10 رفم باشد")
    .max(10, "کد ملی باید 10 رفم باشد"),
});

export default checkoutSchema;
