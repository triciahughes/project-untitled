import { useFormik } from "formik";
import * as yup from "yup";

function NewPromptForm({ featuredBook, prompts, setPrompts }) {
  const formSchema = yup.object().shape({
    prompt: yup.string().required("Must enter prompt."),
  });

  const formik = useFormik({
    initialValues: {
      prompt: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const submission = { ...values, book_id: featuredBook.id };
      console.log(submission);
      resetForm({ values: "" });

      fetch("/prompt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      })
        .then((res) => res.json())
        .then((newPrompt) => {
          const updatedArray = [...prompts, newPrompt];
          setPrompts(updatedArray);
          console.log(newPrompt);
        });
    },
  });
  return (
    <>
      {/* <h3>New Prompt Form</h3> */}
      <form onSubmit={formik.handleSubmit}>
        <label>
          Enter New Prompt:
          <textarea
            type="text"
            name="prompt"
            value={formik.values.prompt}
            onChange={formik.handleChange}
            className="hostMemberPanel"
          />
        </label>
        <input type="submit" value="Add" className="addNew" />
      </form>
    </>
  );
}

export default NewPromptForm;
