import { useFormik } from "formik";
import * as yup from "yup";

function SignInForm() {
  const formSchema = yup.object().shape({
    email: yup.string().required("Must enter email.").email("Invalid email"),
    password: yup.string().required("Must enter password."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      fetch('/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <h1>Please Sign In:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Sign In" className="input-btn" />
      </form>
    </>
  );
}

export default SignInForm;
