import {useFormik} from 'formik';
import * as yup from 'yup';

function SignInForm(){
    
    const formSchema = yup.object().shape({
        "email": yup.string().required("Must enter email.").email("Invalid email"),
        "password": yup.string().required("Must enter password.")
    });

    const formik = useFormik({
        initialValues: {
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
            <h1>Please Sign In:</h1>
            <form onSubmit={formik.handleSubmit}>
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
                <input type="submit" value="Sign In" />
            </form>
        </>
    )
    
}

export default SignInForm
