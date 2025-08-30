

function PhoneNumberInput({ register, errors }) {
  return (
    <div className="flex flex-col gap-y-2.5 mt-9  ">
      <label htmlFor="register" className="font-morabba-light w-fit">
        شماره موبایل خود را وارد کنید
      </label>
      <input
        {...register("phoneNumber")}
        type="number"
        id="register"
        placeholder="4253***0912"
        className={`${
          errors?.phoneNumber?.message && "border-red-500"
        } border rounded-lg border-black/25 outline-0 text-dark px-2 py-3.5 w-125 hover:border-primary focus:border-secondary transition-colors duration-100`}
      />
      <span className="h-10 text-red-500">{errors?.phoneNumber?.message}</span>
    </div>
  );
}

export default PhoneNumberInput;
