import * as yup from "yup";

//?mesajları errors dan değil yup aracılığı ile özelleştirmek için buraya gerekli mesajlar yazılmalıdır
let validation = yup.object().shape({
  email: yup.string().email("geçerli bir email girin").required("zorunlu alan"),
  password: yup
    .string()
    .min(5, "prolanız en az 5 karakter olmalıdır ")
    .required(),
  password2: yup
    .string()
    .oneOf([yup.ref("password")], "parolalar uyuşmuyor")
    .required(),
});

export default validation;

// const loginSchema = object({
//     email: string()
//       .email("Lutfen valid bir email giriniz")
//       .required("Bu alan zorunludur"),
//     password: string()
//       .required("Bu alan zorunludur")
//       .min(8, "En az 8 karakter girilmelidir")
//       .max(16, "En fazla 16 karakter girilmelidir")
//       .matches(/\d+/, "En az bir rakam içermelidir.")
//       .matches(/[a-z]/, "En az bir küçük harf içermelidir.")
//       .matches(/[A-Z]/, "En az bir büyük harf içermelidir.")
//       .matches(/[!,?{}><%&$#£+-.]+/, "En az bir özel karekter içermelidir."),
//   });
