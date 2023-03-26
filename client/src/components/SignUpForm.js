import { useFormik } from "formik";
import * as yup from "yup";
// import YupPassword from "yup-password";
import { useHistory } from "react-router-dom";
// YupPassword(yup);

function SignUpForm() {
  const history = useHistory();
  const formSchema = yup.object().shape({
    first_name: yup.string().required("Must enter first name."),
    last_name: yup.string().required("Must enter last name."),
    email: yup.string().email("Must enter valid email address.").required("Must enter email.").email("Invalid email"),
    password: yup.string().required("Must enter password."),
    confirm_password: yup.string().required("Must confirm password.").oneOf([yup.ref('password'), null], "Passwords must match.")
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
      <form onSubmit={formik.handleSubmit} className="box">
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
          />
          {formik.errors['first_name'] ? <p style={{color: 'red'}}>{formik.errors['first_name']}</p>: null}
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
          />
          {formik.errors['last_name'] ? <p style={{color: 'red'}}>{formik.errors['last_name']}</p>: null}
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors['email'] ? <p style={{color: 'red'}}>{formik.errors['email']}</p>: null}
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors['password'] ? <p style={{color: 'red'}}>{formik.errors['password']}</p>: null}
        </label>
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors['confirm_password'] ? <p style={{color: 'red'}}>{formik.errors['confirm_password']}</p>: null}
        </label>
        <br />
        <input type="submit" value="Sign Up" className="input-btn" />
      </form>
    </>
  );
}

export default SignUpForm;
