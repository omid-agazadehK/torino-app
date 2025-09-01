import { useRegister } from "@/core/services/mutation";
import { toast } from "react-toastify";

function ResendOtpButton({ phoneNumber, setIsExpired, setCountDown }) {
  const { mutate: registerHalnder, isPending } = useRegister();

  const resendHandler = () => {
    registerHalnder(phoneNumber, {
      onSuccess: (data) => {
        toast.success(data.message + " " + data.code);
        setIsExpired(false);
        setCountDown(120);
      },
      onError: (err) => console.log(err),
    });
  };
  return (
    <button
      type="button"
      className={`${isPending ? "hover:text-primary cursor-default" : "hover:text-secondary"} text-primary transition-colors`}
      onClick={() => resendHandler()}
    >
      {!isPending ? "ارسال مجدد کد" : "در حال ارسال ..."}
    </button>
  );
}

export default ResendOtpButton;
