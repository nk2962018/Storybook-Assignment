import Header from "./Header";

export default {
    title:'Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
}

export const SimpleHeader = {
  args : {
    text : 'Header',
  }
}

export const FoodAppHeader = {
    args : {
      text : 'FoodApp',
    }
}