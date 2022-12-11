import SignInForm from '../SignInForm';

import SignUpForm from '../SignUpForm';
import './style.scss';

function Authentication() {
    // useEffect(async () => {
    //     const response = await getRedirectResult(auth);
    //     console.log(response);
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user);
    //     }
    // }, []);
    // const logGoogleUser = async () => {
    //     const { user } = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // };

    return (
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;