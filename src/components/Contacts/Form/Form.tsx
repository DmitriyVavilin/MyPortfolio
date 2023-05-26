import React from 'react';
import {useFormik} from 'formik';
import s from './Form.module.css'
import {Button} from "@mui/material";

export const Form = () => {

    const styles = {
        color: 'white',
        marginTop: '20px'
    }


    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={s.form}>
            <form onSubmit={formik.handleSubmit}>
                <label>
                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder={'Your name*'}
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </label>
                <label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder={'Your e-mail*'}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </label>
                <label>
                <textarea
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder={'Your message'}/>

                </label>
                <Button style={styles} variant="contained" type="submit">SEND MESSAGE</Button>
            </form>
        </div>
    );
};


// export const Form = () => {
//     return (
//         <div className={s.form}>
//             <input type={'text'} placeholder={'Your name'}/>
//             <input className={s.input} type={'email'} placeholder={'Your e-mail'}/>
//             <textarea></textarea>
//             <button className={s.buttonSend}>Send</button>
//         </div>
//     );
// };

