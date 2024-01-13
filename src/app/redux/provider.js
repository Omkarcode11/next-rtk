'use client'
import { Provider } from "react-redux";
import { store } from "./store";

export function Providers({child}){
    return <Provider store={store}>
   {child}
    </Provider>
}