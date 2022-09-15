import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import playerReducer from "../Store/Slice/Player";

const Store = () => configureStore({
    reducer:{
        Players:playerReducer
    }
})

export default Store;