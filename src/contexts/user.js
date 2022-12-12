import { createContext, useState, useEffect } from "react";
import { onAuthStateChangeListener, createUserDocumentFromAuth } from "../utils/firebase";

// useContext re-render the JSX in each component he is called when we trigger his update
export const UserContext = createContext({
    // Value we want to access
    currentUser: null,
    setCurrentUser: () => null,
});

// Component
export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsuscribe = onAuthStateChangeListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsuscribe;
    }, []);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}