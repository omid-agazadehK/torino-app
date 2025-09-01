import { useMutation } from "@tanstack/react-query";
import api from "../config/axios";

const useRegister = () => {
  const mutationKey = ["register"];
  const mutationFn = (phoneNumber) => {
    const mobile = phoneNumber;
    return api.post("/auth/send-otp", { mobile });
  };

  return useMutation({
    mutationFn,
    mutationKey,
  });
};

const useLogin = () => {
  const mutationKey = ["login"];
  const mutationFn = ({ phoneNumber, otp }) => {
    return api.post("/auth/check-otp", {
      mobile: phoneNumber,
      code: otp,
    });
  };

  return useMutation({
    mutationKey,
    mutationFn,
  });
};
export { useRegister, useLogin };
