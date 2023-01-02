import * as Yup from "yup";

export const signUpSchemas = Yup.object({
  name: Yup.string()
    .matches(/^[a-zA-Z\-]+$/, "Enter Valid Name")
    .min(2, "Name should be 2 to 30 characters")
    .max(30, "Name Should be less then 20 characters")
    .required("Please Enter Your Name"), // function chaining

  email: Yup.string()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Enter Valid Email")
    .email("Enter valid email")
    .required("Please Enter Your Email"),

  type: Yup.string(),

  message: Yup.string()
    .min(2, "Message should be 5 to 150 characters")
    .max(30, "Message Should be less then 150 characters"),
});
