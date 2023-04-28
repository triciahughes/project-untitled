import { useFormik } from "formik";
import * as yup from "yup";
import { useParams } from "react-router-dom";

function NewMemberForm({ members, setMembers }) {
  const params = useParams();
  const groupId = params["groupId"];

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Must enter email.")
      .email("Must enter valid email address."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const submission = { ...values, group_id: groupId };
      // console.log(submission);
      resetForm({ values: "" });
      fetch(`/member`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })
        .then((res) => res.json())
        .then((newMember) => {
          const memberships = newMember.memberships;
          // console.log(memberships)
          const memberId = memberships.filter((membership) => {
            return membership.group_id === parseInt(groupId);
          })[0].id;
          const updatedNewMember = { ...newMember, member_id: memberId };
          const updatedArray = [...members, updatedNewMember];
          setMembers(updatedArray);
        });
    },
  });
  return (
    <>
      {/* <h3>New Member Form</h3> */}
      <form onSubmit={formik.handleSubmit}>
        <label>
          Enter New Member's Email:
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="hostMembersPanel"
          />
        </label>
        <input type="submit" value="Add" className="addNew" />
      </form>
    </>
  );
}

export default NewMemberForm;
