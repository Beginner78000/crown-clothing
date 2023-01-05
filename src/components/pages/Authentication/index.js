import SignInForm from '../../SignInForm';

import SignUpForm from '../../SignUpForm';
import { AuthenticationContainer } from './authentication.styles';

function Authentication() {
    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    );
}

export default Authentication;