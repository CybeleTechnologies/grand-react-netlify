import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components/macro"
import {Link} from "react-router-dom";
import { colors } from "../../scss_variables";
import ZGLogo from "../../assets/images/zglogo.jpg"

//<PostInnerNav links={links} />

const PostInnerNav = styled(({className, links}) => {
    return (
        <div className={className}>
            <ul>
                <li className="logo">test</li>
                {links.map((item, index) => {
                    return  <li key={index}><Link to={item.url}>{item.label}</Link></li>
                })}
            </ul>
        </div>
    );
})`
  @media screen and (min-width: 576px) {
    padding-top:50px;
  }
  @media screen and (min-width: 1200px){
    width:70%;
    padding-top:75px;
    margin:auto;
  }
  ul {
    list-style-type:none;
    @media screen and (min-width: 1240px) {
      border:1px solid ${colors.primaryColor6};
    }
    display: flex;
    justify-content: space-between;
    width:98%;
    max-width:1200px;
    margin:0 auto;
    align-items: center;
    flex-wrap:wrap;
  }
  li {
    display:inline-block;
    padding:1rem;
    min-width:170px;
    text-align: center;
    text-transform:uppercase;
    border:1px solid ${colors.primaryColor6};
    margin-top:.5rem;
    @media screen and (min-width: 1240px) {
      border:none;
      margin-top:0;
      border-right: 1px solid ${colors.primaryColor6};
    }
    &:last-child {
     @media screen and (min-width: 1240px) {
       border-right:none;
     }
    }
    a {
      color:${colors.secondaryColor2};
      text-decoration:none;
      font-weight:bold;
      font-size: calc(11px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    }
    &.logo {
      background-color:${colors.zvezdeGranda};
      background-image: url(${ZGLogo});
      background-position: center;
      background-repeat: no-repeat;
      background-size:cover;
      text-indent:-9999px;
    }
  }
`

PostInnerNav.propTypes = {
    links: PropTypes.arrayOf(Object)
};

export default PostInnerNav;