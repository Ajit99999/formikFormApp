import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
// import { boolean } from "yup/lib/locale";
// const validateFunc = (values) => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!values.email.includes("@")) {
//     errors.email = "email format should be correct";
//   }

//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length < 6) {
//     errors.firstName = "Name should be greater than 6";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length < 3) {
//     errors.lastName = "Name should be greater than 3";
//   }

//   return errors;
// };

const Login = () => {
  const [documents, setDocuments] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      checkBox: false,
      selectOption: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required")
        .min(4, "Should be 4 or more than that"),
      lastName: Yup.string()
        .required("Required")
        .min("2", "Should be 2 or more than that"),
      email: Yup.string()
        .required("Required")
        .email("Email should be in correct format"),
      checkBox: Yup.boolean()
        .required("Required")
        .isTrue("Please tick the checkbox"),
      selectOption: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      setDocuments(values);
      formik.resetForm({
        values: {
          email: "",
          lastName: "",
          firstName: "",
          checkBox: false,
          selectOption: "",
        },
      });
    },
  });

  console.log(documents);
  return (
    <div className="form-div">
      <form onSubmit={formik.handleSubmit}>
        <div className="input-div">
          <input
            className={
              formik.touched.email && formik.errors.email ? "input-error" : ""
            }
            id="email"
            //   name="email"
            placeholder="Enter email"
            type="email"
            //   onChange={formik.handleChange}
            //   value={formik.values.email}
            //   onBlur={formik.handleBlur}
            {...formik.getFieldProps("email")}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="error-class"> {formik.errors.email} </p>
          )}
        </div>
        <div className="input-div">
          <input
            id="firstName"
            placeholder="Enter first name"
            className={
              formik.touched.firstName && formik.errors.firstName
                ? "input-error"
                : ""
            }
            //   name="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
            //   value={formik.values.firstName}
            //   onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
          />
          {formik.errors.firstName && formik.touched.firstName && (
            <p className="error-class"> {formik.errors.firstName} </p>
          )}
        </div>
        <div className="input-div">
          <input
            id="lastName"
            placeholder="Enter last name"
            type="text"
            className={
              formik.touched.lastName && formik.errors.lastName
                ? "input-error"
                : ""
            }
            {...formik.getFieldProps("lastName")}
            //   name="lastName"
            //   value={formik.values.lastName}
            //   onChange={formik.handleChange}
            //   onBlur={formik.handleBlur}
          />
          {formik.errors.lastName && formik.touched.lastName && (
            <p className="error-class"> {formik.errors.lastName} </p>
          )}
        </div>
        <div className="input-div">
          <select
            id="selectOption"
            {...formik.getFieldProps("selectOption")}
            className={
              formik.touched.selectOption && formik.errors.selectOption
                ? "input-error"
                : ""
            }
          >
            <option value=""> Select any job option </option>
            <option value="Developer"> Developer </option>
            <option value="Product Manager"> Product Manager </option>
            <option value="Tester"> Tester </option>
            <option value="Other"> Other </option>
          </select>
          {formik.touched.selectOption && formik.errors.selectOption && (
            <p className="error-class"> {formik.errors.selectOption} </p>
          )}
        </div>

        <div className="input-div">
          <div className="checkbox-container">
            <input
              className="checkbox"
              type="checkbox"
              id="checkBox"
              {...formik.getFieldProps("checkBox")}
            />
            <p> I agree with terms & condition</p>
          </div>
          {formik.touched.checkBox && formik.errors.checkBox && (
            <p className="error-class  checkbox-error">
              {" "}
              {formik.errors.checkBox}{" "}
            </p>
          )}
        </div>
        <button type="submit"> Register </button>
      </form>
    </div>
  );
};

export default Login;
