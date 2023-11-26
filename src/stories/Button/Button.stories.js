import Button from "./Button";

export default {
    title:'Button',
    component:Button,
    tags:['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
}

export const Primary = {
    args : {
        buttonColor:'primary',
        label:'Button',
    }
}

export const Secondary = {
    args: {
      buttonColor:'secondary',
      label: 'Button',
    },
};

export const Success = {
    args: {
      buttonColor:'success',
      label: 'Button',
    },
};