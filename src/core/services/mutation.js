import { useMutation } from "@tanstack/react-query";
import api from "../config/axios";
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
      setStep(2), reset();
    },
    onError: (err) => console.log(err),
  });
};

export { useRegister };
