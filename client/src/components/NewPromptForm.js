import { useFormik } from 'formik';
import * as yup from 'yup';

function NewPromptForm() {
    const formSchema = yup.object().shape({
        prompt: yup
            .string()
            .required("Must enter prompt.")
    })

    const formik = useFormik({
        initialValues: {
            prompt: ""
        },
        validationSchema: formSchema,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({values: ""})
        }
    })
    return (
        <>
        <h3>New Prompt Form</h3>
        <form onSubmit={formik.handleSubmit}>
            <label>Enter New Prompt:
            <textarea type="text" name="prompt" value={formik.values.prompt} onChange={formik.handleChange}/>
            </label>
            <input type="submit" value="Add"/>
        </form>
        </>
    )
}

export default NewPromptForm;

