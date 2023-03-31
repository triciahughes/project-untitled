import { useFormik } from "formik";
import * as yup from "yup";


function NewCommentForm({
  comments,
  promptId,
  user,
  setCommentsArray,
}) {


  console.log(promptId);
  console.log(user);
  console.log(comments);

  const formSchema = yup.object().shape({
    comment: yup.string().required("Must enter comment"),
  });

  const formik = useFormik({
    initialValues: {
      comment: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const submission = { ...values, prompt_id: promptId, user_id: user.id };
      console.log(submission);
      resetForm({ values: "" });

      fetch(`/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })
        .then((res) => res.json())
        .then((newComment) => {
          const updatedArray = [...comments, newComment];
          setCommentsArray(updatedArray);
          console.log(newComment);
        });
    },
  });

  return (
    <div>
      <h3>Add Comment</h3>
      <form onSubmit={formik.handleSubmit}>
        <label>
          New Comment:
          <textarea
            type="text"
            name="comment"
            value={formik.values.comment}
            onChange={formik.handleChange}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}

export default NewCommentForm;
