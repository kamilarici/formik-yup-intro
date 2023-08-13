import React from "react";
import { Formik } from "formik";
import validation from "./signUp";

const FormikValidasyon = () => {
  return (
    <div className="formik">
      <h1>FORMİK-YUP ÇALIŞMASI</h1>
      <h3>HATA-UYARI-ALTA YAZI VE ŞİFRE TEKKRARI ÇALIŞMASI</h3>
      <Formik
        initialValues={{
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validation}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          errors,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {/* //? touched daha önce focus olmuşsa uyarıyı göster demek ama
            göstermesi için de onblur özelliği çağırılmalı */}
            {errors.email && touched.email && (
              <div className="error">{errors.email}</div>
            )}
            <br />
            <br />
            <label>password</label>
            <input
              name="password"
              value={values.password}
              placeholder="jane@acme.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password && (
              <div className="error">{errors.password}</div>
            )}
            <br />
            <br />
            <label>password2</label>
            <input
              name="password2"
              value={values.password2}
              placeholder="jane@acme.com"
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password2 && touched.password2 && (
              <div className="error">{errors.password2}</div>
            )}
            <br />
            <br />
            <button type="submit">Submit</button>
            <br />
            <br />
            {JSON.stringify(values)}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikValidasyon;
