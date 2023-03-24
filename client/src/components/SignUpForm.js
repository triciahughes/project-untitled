import {useFormik} from 'formik';
import * as yup from 'yup';

function SignUpForm(){
    
    const formSchema = yup.object().shape({
        "first_name": yup.string().required("Must enter first name."),
        "last_name": yup.string().required("Must enter last name."),
        "email": yup.string().required("Must enter email.").email("Invalid email"),
        "password": yup.string().required("Must enter password.")
    });

    const formik = useFormik({
        initialValues: {
            "first_name": "",
            "last_name": "",
            "email": "",
            "password": ""
        },
        validationSchema: formSchema,
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm({values: ''});
        }
    });

    return (
        <>
            <h1>Please Sign Up:</h1>
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
                <br/>
                <label>
                    Password:
                    <input 
                        type="password" 
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}/>
                </label>
                <br/>
                <input type="submit" value="Sign Up" />
            </form>
        </>
    )
    
}

export default SignUpForm