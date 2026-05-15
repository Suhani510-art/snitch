import {setError,setLoading,setUser} from "../state/auth.slice";
import {register , login} from "../service/auth.api";
import {useDispatch} from "react-redux";



export const useAuth = () => {
    const dispatch = useDispatch();

    async function handleRegister({ email, contact, password, fullname, isSeller = false }) {
    try {
        const data = await register({
            email,
            contact,
            password,
            fullname,
            isSeller
        });

        dispatch(setUser(data.user));
    } catch (error) {
        console.log("ERROR:", error.response?.data); 
    }
}
async function handleLogin({email,password}){
    try {
        const data = await login({email,password})
        dispatch(setUser(data.user));
    } catch (error) {
        console.log("ERROR:", error.response?.data); 
    }   
}   
return { handleRegister ,handleLogin }; 
};