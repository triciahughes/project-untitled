import { useFormik } from "formik";
import * as yup from "yup";

function NewBookForm() {
  //   console.log(featuredBook);

  const formSchema = yup.object().shape({
    title: yup.string().required("Must enter title."),
    author: yup.string().required("Must enter author."),
    image: yup.string().required("Must enter image url."),
    publicationYear: yup.number().required("Must enter a publication year."),
    genre: yup.string().required("Must enter a genre."),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      image: "",
      publicationYear: 2023,
      genre: "",
    },
    validationSchema: formSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values, { resetForm }) => {
      const submission = { ...values };
      console.log(formik.errors);
      console.log(submission);
      resetForm({ values: "" });

      //   fetch("/prompt", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(submission),
      //   })
      //     .then((res) => res.json())
      //     .then((newPrompt) => {
      //       const updatedArray = [...promptsArray, newPrompt];
      //       setPromptsArray(updatedArray);
      //       console.log(newPrompt);
      //     });
    },
  });

  return (
    <>
      {/* <h3>Choose a New Book</h3> */}
      <form onSubmit={formik.handleSubmit}>
        <label>
          Book Title:
          <input
            type="text"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            className="hostMembersBook"
          />
        </label>
        <label>
          Author:
          <input
            type="text"
            name="author"
            value={formik.values.author}
            onChange={formik.handleChange}
            className="hostMembersBook"
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            className="hostMembersBook"
          />
        </label>
        <label>
          Year of Publication:
          <input
            type="number"
            name="publicationYear"
            value={formik.values.publicationYear}
            onChange={formik.handleChange}
            className="publication"
          />
        </label>
        <label>
          Genre:
          <input
            type="text"
            name="genre"
            value={formik.values.genre}
            onChange={formik.handleChange}
            className="hostMembersBook"
          />
        </label>
        <input type="submit" value="Add" className="addNew" />
      </form>
    </>
  );
}

export default NewBookForm;
