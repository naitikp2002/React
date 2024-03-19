import { createContext } from "react";

export const ShoppingContext= createContext({
    items: [],
    addItemToCart:()=>{},
    updateItemQuantity: ()=>{}
});
