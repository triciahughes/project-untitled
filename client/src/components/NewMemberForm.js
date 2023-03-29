import { useFormik } from 'formik';
import * as yup from 'yup';

function NewMemberForm() {

    const formSchema = yup.object().shape({
        email: yup
            .string()
            .required("Must enter email.")
            .email("Must enter valid email address.")
    })

    const formik = useFormik({
        initialValues: {
            email: ""
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
        <h3>New Member Form</h3>
        <form onSubmit={formik.handleSubmit}>
            <label>Enter New Member's Email:
            <input 
                type="text" 
                name="email" 
                value={formik.values.email}
                onChange={formik.handleChange}/>
            </label>
            <input type="submit" value="Add"/>
        </form>
        </>
    )
}

export default NewMemberForm;