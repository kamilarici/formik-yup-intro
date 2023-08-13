import React from "react";
import { Formik } from "formik";

const FormikIntro = () => {
  return (
    <div className="formik">
      <h1>FORMİK ÇALIŞMASI</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          gender: "male",
          hobies: [],
          country: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit, handleChange, values }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              name="firstName"
              placeholder="Jane"
              onChange={handleChange}
            />
            <br />
            <br />

            <label htmlFor="lastName">Last Name</label>
            <input name="lastName" placeholder="Doe" onChange={handleChange} />
            <br />
            <br />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={handleChange}
            />
            <br />
            <br />

            <span>male</span>
            <input
              name="gender"
              type="radio"
              value="male"
              onChange={handleChange}
              checked={values.gender === "male"}
            />
            <span>female</span>
            <input
              name="gender"
              type="radio"
              value="female"
              onChange={handleChange}
              checked={values.gender === "female"}
            />
            <br />
            <br />
            <div>
              footbal
              <input
                type="checkbox"
                name="hobies"
                value="footbal"
                onChange={handleChange}
              />
            </div>
            <div>
              cinema
              <input
                type="checkbox"
                name="hobies"
                value="cinema"
                onChange={handleChange}
              />
            </div>
            <div>
              photograpy
              <input
                type="checkbox"
                name="hobies"
                value="photograpy"
                onChange={handleChange}
              />
            </div>

            <br />
            <br />
            <select name="country" id="" onChange={handleChange}>
              <option value="tr"> türkiye</option>
              <option value="abd">abd</option>
              <option value="ing">ingiltere</option>
            </select>
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

export default FormikIntro;
