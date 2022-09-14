//This file is for the redux value from slice to be accessible at global level

import { configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice"

const store= configureStore ({
    reducer:{
        todo:todoSlice,
    }
})

export default store