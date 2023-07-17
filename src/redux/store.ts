import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./authSlice";
import { codeReducer } from "./codeSlice";
import { goodsReducer } from "./goodsSlice";

export const store = configureStore({
    reducer: {
        
        auth: authReducer,
        errorCode: codeReducer,
        goodsBox: goodsReducer

    }


})