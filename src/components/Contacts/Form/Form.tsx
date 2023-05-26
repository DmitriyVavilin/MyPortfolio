import React from 'react';
import {useFormik} from 'formik';
import s from './Form.module.css'

export const SignupForm = () => {
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
                <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder={'Your name*'}
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder={'Your e-mail*'}
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <textarea
                    id="lastName"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder={'Your message'}
                />
                <button className={s.buttonSend} type="submit">SEND MESSAGE</button>
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

