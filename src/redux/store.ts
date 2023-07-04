import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { codeReducer } from "./codeSlice";

export const store = configureStore({
    reducer: {
        
        auth: authReducer,
        errorCode: codeReducer
        

    }


})