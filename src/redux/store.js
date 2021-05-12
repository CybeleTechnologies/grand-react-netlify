import { configureStore } from '@reduxjs/toolkit';
import programSliceReducer from "../components/grand/programska-sema/ProgramSemaSlice";

export default configureStore({
    reducer: {
        programSema:programSliceReducer
    },
});
