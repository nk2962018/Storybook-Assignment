import LoginForm from "./Form";

export default {
    title:'LoginForm',
    component:LoginForm,
    tags:['autodocs']
}

export const UserLogin = {
    args:{
        onLogin:(username) =>{
            console.log(`Username: ${username}`);
        }
    }
}