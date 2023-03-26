import { useFormik } from "formik";
import * as yup from "yup";
import YupPassword from "yup-password";
import { useHistory } from "react-router-dom";
YupPassword(yup);

function SignUpForm() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    first_name: yup.string().required("Must enter first name."),
    last_name: yup.string().required("Must enter last name."),
    email: yup.string().required("Must enter email.").email("Invalid email"),
    password: yup.string().required("Must enter password."),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      debugger;
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then(history.push("/"));
      resetForm({ values: "" });
    },
  });

  return (
    <>
      <h1 className="signup">Please Sign Up:</h1>
      <form onSubmit={formik.handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
        </label>
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
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Sign Up" className="input-btn" />
      </form>
    </>
  );
}

export default SignUpForm;
