import React, {useState} from 'react';
import styled from 'styled-components/macro'
import {BsChevronDown, BsChevronUp} from 'react-icons/bs'
import {colors} from "../../../scss_variables";
import Slide from "react-reveal/Slide"
import {useSelector, useDispatch} from "react-redux";
import {selectedTime, setSelectedTime} from "./ProgramSemaSlice";

const ProgramListItem = styled(({className,program}) => {
    const dispatch = useDispatch()
    const selectedProgram = useSelector(selectedTime)
    // const logtest = selectedProgram === program.time;
    // const [active, setActive] = useState(logtest)
    const handleClick = () => {
        if(selectedProgram === program.time) {
            dispatch(setSelectedTime(""))
        }else {
            dispatch(setSelectedTime(program.time))
        }
        // setActive(prevState => {
        //     return program.time === selectedProgram
        // })

    }
    return <div className={className}>
        <div onClick={handleClick} className={`top-bar ${selectedProgram === program.time ? " active" : "null"}`}>
            <div className="time"><span className={`animate ${selectedProgram === program.time ? "animate--bigger" : "null"}`}>{program.time}</span>
                <div className={`content ${selectedProgram === program.time ? " active" : null}`} />
            </div>
            <div className="title">
                <span className={`animate ${selectedProgram === program.time ? "animate--bigger" : "null"}`}>{program.title}</span>
                <div className={`content ${selectedProgram === program.time ? " active" : null}`}>
                    <Slide down when={selectedProgram === program.time}>
                        <div style={{padding:"1rem 0"}} className="content-inner">
                            {program.info}
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="thumb">
                <div className={`content ${selectedProgram === program.time ? " active" : null}`}>
                    <Slide down when={selectedProgram === program.time}>
                        <div className="content--inner">
                            <img src={program.thumbnail} alt=""/>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className="icon">
                {selectedProgram === program.time ? <BsChevronUp size="25" /> : <BsChevronDown size="25" /> }
                <div className={`content ${selectedProgram === program.time ? " active" : null}`} />
            </div>
        </div>
        {/*<div className={`content ${active ? " active" : null}`}>*/}
        {/*    <Slide down when={active}>*/}
        {/*        <div className="content-inner">*/}
        {/*            <div className="text">*/}
        {/*                {program.info}*/}
        {/*            </div>*/}
        {/*            <div className="thumb">*/}
        {/*                <img src={program.thumbnail} alt="program thumb"/>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </Slide>*/}
        {/*</div>*/}
    </div>
})`
    width:90%;
    margin:auto;
    border-top:1px solid ${colors.primaryColor5};
    border-bottom:1px solid ${colors.primaryColor5};
    .top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap:wrap;
      width:100%;
      padding:1rem;
      &:hover {
        cursor:pointer;
      }
      &.active {
        background-color:${colors.primaryColor5};
      }
      .time {
        color:${colors.primaryColor7};
        width:10%;
        align-self:flex-start;
        .animate {
          transition:all .3s ease-in;
          &--bigger {
            font-size:calc(17px + (23 - 17) * ((100vw - 300px) / (1600 - 300)));
          }
        }
      }
      .title {
        width:100%;
        @media screen and (min-width: 768px){
          width:calc(40% - .5rem);
        }
        align-self: flex-start;
        margin-right:.5rem;
        color: ${colors.secondaryColor2};
        .animate {
          transition:all .3s ease-in;
          &--bigger {
            font-size:calc(17px + (27 - 17) * ((100vw - 300px) / (1600 - 300)));
          }
        }
        .content-inner {
          font-size:calc(14px + (16 - 14) * ((100vw - 300px) / (1600 - 300)));
        }
      }
      .thumb {
        width:100%;
        @media screen and (min-width: 768px){
          width:45%;
        }
        position: relative;
        top:5px;
        align-self:flex-start;
      }
      .icon {
        width:5%;
        display:none;
        @media screen and (min-width: 768px){
          display: flex;
        }
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self:flex-start;
      }
      span {
        //display:block;
        font-weight:bold;
        
      }
    }
  .content-inner {
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;
    align-items: flex-start;
    //margin-left:15%;
    padding:2rem 0;
    .text {
      width:45%;
    }
    .thumb {
      width:55%;
    }
  }
  .content {
    display: flex;
    align-items: flex-start;
    height:0;
    overflow: hidden;
    transition: all .3s ease;
    &.active {
      height:auto;
      @media screen and (min-width: 768px){
        height:300px;
      }
    }
    img {
      display: block;
      width:100%;
    }
  }
`

const ProgramList = styled(({className, programList}) => {
    return (
        <div className={className}>
            {programList?.length > 0 ? programList.map((program) => {
                return <ProgramListItem program={program} />
            }): "No program list"}
        </div>
    );
})`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  margin:3rem 0;
`

export default ProgramList;