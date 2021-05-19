import * as yup from "yup";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password needs at least 5 characters")
    .matches(/^[-,.a-zA-Z0-9+=_!@#$%^&*()]+$/, "Password can only consist of letters, numbers and symbols"),
  terms: yup.boolean()
});

export default schema;
