import { useState } from 'react';

import FormInput from '../FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase';

import { SignInContainer, ButtonsContainer } from './signInForm.styles';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: '',
    password: '', 
};

function SignInForm() {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
    const navigate = useNavigate();

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
        navigate('/');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // if it does then check if the user is authenticated
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
            navigate('/');

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
        <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer>
          <Button type='submit'>Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type='button'
            onClick={signInWithGoogle}
          >
            Sign In With Google
          </Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
    );
}

export default SignInForm;
