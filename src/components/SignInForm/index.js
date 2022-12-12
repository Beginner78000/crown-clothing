import { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../Button';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase';

import './style.scss';

const defaultFormFields = {
    email: '',
    password: '', 
};

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // if it does then check if the user is authenticated
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();

        }catch(error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert('Incorrect email or password')
                    break;
                case "auth/user-not-found":
                    alert('no user associated with this email')
                    break;
                default:
                    console.log(error);
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value });
    }
    return (
        <div className="sign-in-container">
            <h2>I already have an account ?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    type="email"
                    name='email'
                    label='Email'
                    value={email}
                    onChange={handleChange}
                    required
                />
                <FormInput
                    type="password"
                    name='password'
                    label='Password'
                    value={password}
                    onChange={handleChange}
                    required
                />
                <div className='buttons-container'>
                    <Button type='submit'>Sign in</Button>
                    <Button type="button" buttonType='google' onClick={signInWithGoogle}>
                        Google Sign in
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignInForm;
