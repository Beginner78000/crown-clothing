// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    // signInWithGoogleRedirect,
} from '../../utils/firebase';

import SignUpForm from '../SignUpForm';
import './style.scss';

function SignIn() {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    };

    return (
        <div className="sign-in">
            <button onClick={logGoogleUser}>SignIn with google</button>
            <SignUpForm />
        </div>
    );
}

export default SignIn;