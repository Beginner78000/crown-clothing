import SignInForm from '../../SignInForm';

import SignUpForm from '../../SignUpForm';
import './style.scss';

function Authentication() {
    return (
        <div className="auth-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default Authentication;