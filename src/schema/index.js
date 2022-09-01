import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Name minimal 6 karakter!")
    .max(50, "Name maksimal 50 karakter!")
    .required("Name tidak boleh kosong!"),
  email: Yup.string()
    .email("Email tidak Valid!")
    .required("Email tidak boleh kosong!"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter!")
    .max(50, "Password maksimal 50 karakter!")
    .required("Password tidak boleh kosong!"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email tidak Valid!")
    .required("Email tidak boleh kosong!"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter!")
    .max(50, "Password maksimal 50 karakter!")
    .required("Password tidak boleh kosong!"),
});
