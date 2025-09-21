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
const useAddBasket = () => {
  const mutationKey = ["basket"];
  const mutationFn = (tourId) => {
    return api.put(`/basket/${tourId}`);
  };

  return useMutation({
    mutationKey,
    mutationFn,
  });
};

const useCheckout = () => {
  const mutationKey = ["checkout"];
  const mutationFn = (userInfo) => api.post("/order", userInfo);
  return useMutation({ mutationFn, mutationKey });
};
export { useRegister, useLogin, useAddBasket, useCheckout };
