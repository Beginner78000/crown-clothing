export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_OUT_FAILED = "SIGN_OUT_FAILED";

export const setCurrentUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
});

export const signOut = () => ({
    type: SIGN_OUT,
});

export const signOutFailed = (error) => ({
    type: SIGN_OUT_FAILED,
    error,
});
