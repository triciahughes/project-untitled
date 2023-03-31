import { useFormik } from "formik";
import * as yup from "yup";

function NewGroupForm({ hostGroups, setHostGroups, host }) {
  //   console.log(featuredBook);

  //   console.log(host.id);
  //   console.log(hostGroups);
  //   console.log(setHostGroup);

  const host_id = host.id;
  console.log(host_id);

  const formSchema = yup.object().shape({
    name: yup.string().required("Must enter name."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const submission = { ...values, host_id: host_id };
      //   console.log(formik.errors);
      console.log(submission);
      resetForm({ values: "" });

      fetch(`/group`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })
        .then((res) => res.json())
        .then((newGroup) => {
          const updatedArray = [...hostGroups, newGroup];
          setHostGroups(updatedArray);
          console.log(newGroup);
        });
    },
  });

  return (
    <>
      {/* <h3>Choose a New Book</h3> */}
      <form onSubmit={formik.handleSubmit}>
        <label className="addGroup">
          New Group Name:
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="hostMembersBook"
            placeholder="A very epic group name..."
          />
        </label>
        <input type="submit" value="Add" className="addNew" />
      </form>
    </>
  );
}

export default NewGroupForm;
