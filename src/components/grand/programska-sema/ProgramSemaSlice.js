import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import {programskaShema} from "./sema";


export const programSemaSlice = createSlice({
    name: 'programSema',
    initialState: {
        semaList: programskaShema,
        activeDate:programskaShema[0].day,
        selectedTime:"",
        loading: true,
        failed: ''
    },
    reducers: {
        loadProgramSchema: (state, action) => {
            state.list = action.payload
        },
        setActiveDate: (state, action) => {
            state.activeDate = action.payload
        },
        setSelectedTime:(state, action) => {
            state.selectedTime = action.payload
        },
        loading: state => {
            state.loading = !state.loading;
        },
        failed: (state, action) => {
            state.failed += action.payload;
        },
    },
});

export const { loadProgramSchema, setSelectedTime ,setActiveDate, loading, failed } = programSemaSlice.actions;

export const selectedTime = state => state.programSema.selectedTime
export const selectSemaList = state => state.programSema.semaList
export const selectActiveDate = state => state.programSema.activeDate
export const selectActiveProgram = createSelector(
    selectSemaList,
    selectActiveDate,
    (semaList, activeDate) => {
        return semaList.find((s) => {
            return s.day === activeDate
        }).sema
    }
)


export default programSemaSlice.reducer;