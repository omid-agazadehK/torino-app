import { object, string } from "yup";
const userAccountDetails = object({
  email: string()
    .test(
      "is-empty-or-valid",
      "آدرس ایمیل باید معتبر باشد (example@gmail.com)",
      (value) => {
        if (!value) return true;
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
    ),
});

export { userAccountDetails };
