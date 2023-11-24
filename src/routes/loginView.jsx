import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/firebase';

export default function LoginView(){

async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider();
    await signInWithGoogle(googleProvider)
    
    async function signInWithGoogle(provider){
        try {
            const res = await signInWithPopup(auth,provider);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }
}

return (
    <div>
        <button onClick={handleOnClick}>
            Login whith Google
        </button>
    </div>
    )
}