import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase';
import './style.scss';

function SignIn() {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div className="sign-in">
            <button onClick={logGoogleUser}>SignIn with google</button>
        </div>
    );
}

export default SignIn;