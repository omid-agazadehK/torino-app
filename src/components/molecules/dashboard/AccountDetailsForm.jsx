import ErrorMessage from "@/components/atoms/ErrorMessage";
import { userAccountDetails } from "@/core/schema/userProfile";
import { useUpdateUser } from "@/core/services/mutation";
import { useGetUserData } from "@/core/services/query";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
export default function AccountDetailsForm({ setFormStatus }) {
  const { data: userData } = useGetUserData();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(userAccountDetails),
    values: { email: userData?.email },
  });
  const { mutate, isPending } = useUpdateUser();
  const shouldSkipUpdate = (data) =>
    !data.email || data.email === userData?.email;
  const submitHandler = (data) => {
    if (shouldSkipUpdate(data)) {
      setFormStatus((prev) => ({ ...prev, accountForm: false }));
      reset();
      return;
    }
    mutate(data, {
      onSuccess: (data) => {
        setFormStatus((prev) => ({ ...prev, accountForm: false }));
        toast.success(data.message);
      },
      onError: (err) => console.log(err),
    });
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className="col-span-12 flex flex-col gap-2 md:col-span-6"
    >
      <div className="flex justify-between gap-x-3 *:transition-colors *:duration-200">
        <input
          type="text"
          {...register("email")}
          className="focus:border-primary hover:border-primary text-dark w-full max-w-65 rounded-lg border border-black/50 px-2 py-3 text-sm placeholder:text-black/50 focus:outline-none max-sm:text-xs"
          placeholder="آدرس ایمیل"
        />
        <button
          disabled={isPending}
          className={`${isPending && "cursor-not-allowed grayscale"} bg-primary font-dana-semiBold hover:bg-secondary rounded-lg px-7 py-3 text-white lg:px-11`}
        >
          تایید
        </button>
      </div>
      <ErrorMessage message={errors?.email?.message} />
    </form>
  );
}
