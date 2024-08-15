import * as yup from "yup";

const validation = {
  Required: "این گزینه الزامی است",
  nationalCode: "کدملی نامعتبر است",
  min: "طول متن کوتاه می باشد",
  max: "طول متن بلند می باشد",
  PersianOnly: "فقط از حروف فارسی استفاده شود",
  Email: "پست الکترونیک نامعتبر است",
  Password:
    "رمز عبور باید داری حداقل 8 کاراکتر انگلیسی شامل حروف کوچک، بزرگ و عدد باشد.",
  ConfirmPassword: "تکرار کلمه عبور مطابقت ندارد",
  endDate: "تاریخ پایان نباید قبل از تاریخ شروع باشد",
};

yup.setLocale({
  mixed: {
    required: validation.Required,
  },
  string: {
    min: validation.min,
    max: validation.max,
    email: validation.Email,
  },
});
export default yup;
