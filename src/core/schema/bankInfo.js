import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
const shabaRegex = /^IR\d{24}$/;
const cardRegex = /^(?:6037|6273|6393|6219)\d{12}$/;
const accountRegex = /^\d{8,13}$/;

const bankInfo = object({
  shaba_code: string()
    .nullable()
    .notRequired()
    .test("len", "شماره شبا اشتباه است (..IR254 )", (value) => !value || shabaRegex.test(value)),
  debitCard_code: string()
    .nullable()
    .notRequired()
    .test("len", "شماره کارت اشتباه است", (value) => !value || cardRegex.test(value)),
  accountIdentifier: string()
    .nullable()
    .notRequired()
    .test("len", "شماره حساب اشتباه است", (value) => !value || accountRegex.test(value)),
});

export const bankInfoSchema = { resolver: yupResolver(bankInfo) };
