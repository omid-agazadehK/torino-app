import { useMutation } from "@tanstack/react-query";
import api from "../config/axios";
import { toast } from "react-toastify";
const useRegister = (reset, setStep) => {
  const mutationKey = ["register"];
  const mutationFn = (phoneNumber) => {
    const mobile = phoneNumber;
    return api.post("/auth/send-otp", { mobile });
  };

  return useMutation({
    mutationFn,
    mutationKey,
    onSuccess: (data) => {
      console.log(data.code)
      toast.success(data.message + " " + data.code), setStep(2), reset();
    },
    onError: (err) => console.log(err),
  });
};

const useLogin = (setError) => {
  const mutationKey = ["login"];
  const mutationFn = ({ phoneNumber, otp }) => {
    console.log(otp);

    return api.post("/auth/check-otp", {
      mobile: phoneNumber,
      code: otp,
    });
  };
  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: (data) => console.log(data),
    onError: (err) => console.log(err),
  });
};
export { useRegister, useLogin };
