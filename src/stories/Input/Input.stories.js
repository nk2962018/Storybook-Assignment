import Input from './Input';

export default {
    title: 'Input',
    component : Input,
}

export const UserInput = {
    label : 'User Name',
    placeholder: 'Enter your username',
    type :'text',
}

export const PasswordInput = {
    label : 'Password',
    placeholder: 'Enter your password',
    type :'password',
}

export const Small = {
    args : {
        size:'small'
    }
}

export const Medium = {
    args : {
        size:'medium'
    }
}

export const Large = {
    args : {
        size:'large'
    }
}