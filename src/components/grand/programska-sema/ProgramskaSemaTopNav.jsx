import React, {useState} from 'react';
import styled from 'styled-components/macro'
import {colors} from "../../../scss_variables";
import { useSelector , useDispatch} from "react-redux";

import {
    selectActiveDate,
    setActiveDate
} from "./ProgramSemaSlice";

var days = ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', 'Cetvrtak', 'Petak', 'Subota'];
var months = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar']

const DayNavItem = styled(({className,active, date}) => {
    const dispatch = useDispatch()
    const handleClick = (e) => {

        dispatch(setActiveDate(date.day))
    }
    const d = new Date(date.day)
    return <div onClick={handleClick} className={`${className} ${active ? " active" : null}`}>
        <span className="name">{days[d.getDay()]}</span>
        <span className="date">{`${d.getDate()}.${months[d.getMonth()]}`}</span>
    </div>
})`
  display:flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin:.5rem;
  padding:1rem;
  background-color:${colors.primaryColor5};
  border: 1px solid ${colors.primaryColor6};
  &:hover {
    cursor:pointer;
  }
  &.active {
    background:${colors.primaryColor7};
    .name, .date {
      color:white;
    }
  }
  @media screen and (min-width: 1200px){
    margin:.5rem 0;
    padding:1rem 0;
    width:14.2857%;
    border-right:none;
    &:last-child {
      border-right:1px solid ${colors.primaryColor6};
    }
  }
  .name {
    font-weight: bold;
    color:${colors.primaryColor1};
    margin-bottom:.5rem;
  }
  .date {
    color: ${colors.secondaryColor2}
  }
`

const ProgramskaSemaTopNav = styled(({className, sema=[]}) => {
    const activeDate = useSelector(selectActiveDate)

    const d = new Date(activeDate)

    return (
        <div className={className}>
            <div className="days">
                {sema?.length > 0 ? sema.map((date, index) => {
                    return <DayNavItem active={activeDate === date.day}  key={index} date={date} />
                }): "Programska sema u izradi"}
            </div>
            <div className="current-date">
                <strong>{days[d.getDay()]}</strong> | {d.getDate()}. {months[d.getMonth()]}
            </div>
        </div>
    );
})`
  display:flex;
  flex-wrap: wrap;
  width:95%;
  margin:auto;
  .days {
    display: flex;
    flex-wrap:wrap;
    justify-content: flex-start;
    width:100%;
  }
  .current-date {
    width:100%;
    display: flex;
    justify-content: center;
    margin:1rem auto;
    font-size:calc(24px + (36 - 24) * ((100vw - 300px) / (1600 - 300)));
    color:${colors.primaryColor7};
    strong {
      font-size:inherit;
    }
  }
`

export default ProgramskaSemaTopNav;