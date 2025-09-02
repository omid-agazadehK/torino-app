function PhoneNumberInput({ register, errors }) {
  return (
    <div className="mt-9 flex flex-col gap-y-2.5">
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
        } text-dark hover:border-primary focus:border-secondary rounded-lg border border-black/25 px-2 py-3.5 outline-0 transition-colors duration-100`}
      />
      <span className="h-10 text-red-500 text-xs xs:text-sm md:text-base">{errors?.phoneNumber?.message}</span>
    </div>
  );
}

export default PhoneNumberInput;
