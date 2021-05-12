import React, {useState} from 'react';
import styled from 'styled-components/macro'
import ProgramskaSemaTopNav from "./ProgramskaSemaTopNav";
import ProgramList from "./ProgramList";
import {useSelector} from "react-redux";
import {selectActiveProgram} from "./ProgramSemaSlice";


const ProgramskaSema = styled(({className, sema}) => {
    const activeProgram = useSelector(selectActiveProgram)
    return (
        <div className={className}>
            <ProgramskaSemaTopNav sema={sema} />
            <ProgramList programList={activeProgram} />
        </div>
    );
})`

`

export default ProgramskaSema;