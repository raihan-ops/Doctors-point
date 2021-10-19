import { getAuth, updateProfile, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../FirebaseConfig/firebaseInitilizer";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const running = auth.currentUser;


    const googleProvider = new GoogleAuthProvider();
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    const CreateEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password,);
    }

    const loginEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // const updateForName = (name) => {
    //     updateProfile(running, { displayName: { name } })
    //         .then(() => {
    //             // Profile updated!
    //             // ...
    //         })
    //         .catch((error) => {
    //             // An error occurred
    //             // ...
    //         });

    // }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            setIsLoading(false);
        })
    }, []);


    return {
        user,
        signInUsingGoogle,
        logout,
        CreateEmailPassword,
        loginEmailPassword,
        isLoading,
        setIsLoading,
        running,
        updateProfile
    }

}

export default useFirebase;