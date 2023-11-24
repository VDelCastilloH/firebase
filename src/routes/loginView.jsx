import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebase';

export default function LoginView(){

async function handleOnClic(){
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider)
}

async function signInWithGoogle(googleProvider){
    try {
        const res = await signInWithPopup(auth,googleProvider);
        console.log(res);
    } catch (error) {
        console.error(error);
    }
}

return (
    <div>
        <button onClick={handleOnClic}>
            Login whith Google
        </button>
    </div>
    )
}