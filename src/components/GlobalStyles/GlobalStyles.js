import React from 'react'
import { createGlobalStyle } from 'styled-components/macro';


const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Montserrat", sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    font-size: calc(13px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
    line-height: calc(1.3em + (1.5 - 1.2) * ((100vw - 300px)/(1600 - 300)));
  }

  ._2p3a {
    width: 100% !important;
  }

  .App > div:first-child {
    padding-top: 100px;
  }

  .fluid-all {
    padding: 2.3rem 0;
    background: #EDEDED;
  }

  .inner-content {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
  }
  @media screen and (min-width: 1200px) {
    .inner-content {
      width: 70%;
    }
  }

  .container-wrapper {
    padding-top: 80px;
  }

  .emisije {
    padding-top: 80px;
  }

  .emisije-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .emisije-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .emisije-contentCenterMain {
    display: flex;
  }

  .emisije-contentCenterMainNews {
    width: 70%;
  }

  .emisije-contentCenterPromotions {
    width: 30%;
  }

  .emisije-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .emisije-leftBannerImage {
    width: 100%;
  }

  .emisije-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .emisije-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .emisije-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .emisije-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .emisije-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .emisije {
      padding-top: 30px;
    }

    .emisije-content {
      padding-top: 3%;
    }

    .emisije-contentCenterMain {
      display: block;
    }

    .emisije-contentCenterMainNews {
      width: 100%;
    }

    .emisije-contentCenterPromotions {
      width: 100%;
    }
  }
  .emisije-popularNews {
    width: 100%;
  }

  .emisije-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .emisije-popularNewsMainTitleText {
    background-color: #B17216;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .emisije-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .emisijePopularNews-image {
    height: 50%;
    width: 100%;
  }

  .emisijePopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .emisijePopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .emisije-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .emisije-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .footer {
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    border-top: 1px solid #d6d6d6;
  }

  .footer-inner {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: auto;
  }
  @media screen and (min-width: 1200px) {
    .footer-inner {
      width: 70%;
    }
  }

  .footer-links {
    padding-top: 3rem;
    text-align: center;
  }

  .footer-link {
    color: #ffffff;
    padding: 0.5rem;
  }
  .footer-link ul {
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .footer-link li {
    list-style-type: none;
    display: inline-block;
    margin-right: 15px;
  }
  .footer-link li a {
    text-decoration: none;
    color: #525156;
  }

  .footer-icons {
    filter: invert(100%) sepia(99%) saturate(16%) hue-rotate(239deg) brightness(103%) contrast(100%);
    width: 25%;
    display: flex;
    margin: auto;
    justify-content: center;
    padding-top: 2rem;
  }

  .footer-copyright {
    color: #ffffff;
    text-align: center;
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    .footer-link {
      display: inline-block;
    }
  }
  .grandoskop {
    padding-top: 80px;
  }

  .grandoskop-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 33px;
  }

  .grandoskop-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .horoskop-contentCenterMain {
    display: flex;
  }

  .horoskop-contentCenterMainNews {
    width: 70%;
  }

  .horoskop-contentCenterPromotions {
    width: 30%;
  }

  .grandoskop-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .grandoskop-leftBannerImage {
    width: 100%;
  }

  .grandoskop-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .grandoskop-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .grandoskop-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .grandoskop-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .grandoskop-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .grandoskop {
      padding-top: 30px;
    }

    .grandoskop-content {
      padding-top: 3%;
    }

    .horoskop-contentCenterMain {
      display: block;
    }

    .horoskop-contentCenterMainNews {
      width: 100%;
    }

    .horoskop-contentCenterPromotions {
      width: 100%;
    }
  }
  .horoskop {
    padding-top: 80px;
  }

  .horoskop-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .horoskop-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .horoskop-contentCenterMain {
    display: flex;
  }

  .horoskop-contentCenterMainNews {
    width: 70%;
  }

  .horoskop-contentCenterPromotions {
    width: 30%;
  }

  .horoskop-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .horoskop-leftBannerImage {
    width: 100%;
  }

  .horoskop-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .horoskop-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .horoskop-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .horoskop-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .horoskop-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .horoskop {
      padding-top: 30px;
    }

    .horoskop-content {
      padding-top: 3%;
    }

    .horoskop-contentCenterMain {
      display: block;
    }

    .horoskop-contentCenterMainNews {
      width: 100%;
    }

    .horoskop-contentCenterPromotions {
      width: 100%;
    }
  }
  .grandoskop-popularNews {
    width: 100%;
  }

  .grandoskop-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .grandoskop-popularNewsMainTitleText {
    background-color: #3774A6;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .grandoskop-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .grandoskopPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .grandoskopPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .grandoskopPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .grandoskop-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .grandoskop-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .horoskop-popularNews {
    width: 100%;
  }

  .horoskop-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .horoskop-popularNewsMainTitleText {
    background-color: #3774A6;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .horoskop-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .horoskopPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .horoskopPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .horoskopPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .horoskop-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .horoskop-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .horoskop-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .horoskop-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .horoskop-facebook {
      padding-left: 0;
    }
  }
  .horoskop-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .horoskop-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .horoskop-premijeraMainTitleText {
    background-color: #3774A6;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .horoskop-premijeraImageItem {
    width: 100%;
  }

  .horoskop-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .horoskop-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .horoskop-premijera {
      padding-left: 0;
    }
  }
  .navbar-logo-placeholder {
    background-color: #E44326;
    width: 15%;
  }

  .navbar-logo {
    height: 100%;
    width: 100%;
  }

  .navbar {
    background-color: #ffffff !important;
    width: 100% !important;
    padding: 0 !important;
    flex-flow: wrap !important;
    height: 100px;
  }

  .navbar-nav {
    text-align: center !important;
    margin: 0 auto;
    align-self: flex-end;
  }

  .nav-item {
    padding-right: 1.2em;
    border: none !important;
  }
  @media screen and (min-width: 576px) {
    .nav-item {
      padding-left: 1.2em;
    }
  }

  .nav-link {
    color: #525156 !important;
    height: 100%;
    padding-left: 0 !important;
    padding-right: 0 !important;
    font-weight: bold;
    padding-bottom: 2rem;
  }

  .showbizzLink {
    border-bottom: 2px solid red;
  }

  .zvezde-grandaLink {
    border-bottom: 2px solid #dda92f;
  }

  .nikad-nije-kasnoLink {
    border-bottom: 2px solid #793BE0;
  }

  .prakticna-zenaLink {
    border-bottom: 2px solid #B17216;
  }

  .horoskopLink {
    border-bottom: 2px solid #3774A6;
  }

  .receptiLink {
    border-bottom: 2px solid #886C52;
  }

  .grandLink {
    border-bottom: 2px solid #B17216;
  }

  .dropdown-menu {
    background-color: #525156 !important;
    text-align: center;
  }

  .dropdown-item {
    color: #ffffff !important;
  }

  .dropdown-item-grandoskop:hover {
    background-color: #3774A6 !important;
  }

  .dropdown-item-horoskop:hover {
    background-color: #3774A6 !important;
  }

  .dropdown-item-emisije:hover {
    background-color: #B17216 !important;
  }

  .dropdown-item-programska-sema:hover {
    background-color: #B17216 !important;
  }

  .dropdown-horoskop {
    border: 3px solid #3774A6;
  }

  .dropdown-grand {
    border: 3px solid #B17216;
  }

  .navbar-collapse {
    text-align: -webkit-center;
  }

  .navbar-toggler {
    color: #000000 !important;
    border-color: #525156 !important;
    margin: 0.25rem;
    background-color: #525156;
  }

  .navbar-toggler-icon {
    width: 2em !important;
    height: 2em !important;
  }

  .navbar > .container, .navbar > .container-fluid {
    align-items: initial;
    min-width: 100%;
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    height: 100%;
  }

  .navbar-user {
    background-color: #E44326;
    width: 8%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 576px) {
    .navbar-user {
      height: 100%;
    }
  }

  .user-icon {
    fill: #000000 !important;
  }

  @media screen and (max-width: 576px) {
    .navbar {
      height: max-content;
    }

    .navbar-user {
      padding: 1%;
    }

    .nav-link {
      font-size: large;
    }

    .dropdown-item {
      font-size: large;
    }

    .dropdown-toggle::after {
      vertical-align: 0;
    }

    .showbizzLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid red;
    }

    .zvezde-grandaLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #dda92f;
    }

    .nikad-nije-kasnoLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #793BE0;
    }

    .prakticna-zenaLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #B17216;
    }

    .horoskopLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #3774A6;
    }

    .receptiLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #886C52;
    }

    .grandLink {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #B17216;
    }

    .navbar-user {
      border-bottom: 1px solid #000000;
      border-left: 15px solid #E44326;
      width: 100%;
    }
  }
  .nav-track {
    display: flex;
    justify-content: space-between;
    padding: 4px 10%;
    min-height: 20px;
    width: 100%;
    background-color: #EDEDED;
    color: #515153;
    border-bottom: 1px solid #d6d6d6;
    border-top: 1px solid #d6d6d6;
    position: fixed;
    z-index: 10;
  }

  .nav-track-program {
    display: flex;
    align-items: center;
    font-size: calc(11px + (18 - 14) * ((100vw - 300px) / (1600 - 300)));
  }

  .nav-track-programItem {
    font-weight: bold;
    display: inline-block;
    margin-left: 10px;
  }

  .nav-track-social {
    display: flex;
    align-items: center;
  }
  .nav-track-social a:hover svg {
    transform: scale(1.1);
  }
  .nav-track-social svg {
    margin-left: 15px;
    transition: all 0.3s ease;
  }

  .nav-track-social-icon {
    height: 1.5rem;
    margin-left: 1rem;
  }

  @media screen and (max-width: 840px) {
    .nav-track {
      font-size: 80%;
    }
  }
  @media screen and (max-width: 576px) {
    .nav-track {
      display: none;
    }
  }
  @media screen and (max-width: 1005px) {
    .nav-track {
      padding: 4px 10px;
    }
  }
  .nikadNijeKasno {
    padding-top: 80px;
  }

  .nikadNijeKasno-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .nikadNijeKasno-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .nikadNijeKasno-contentCenterMain {
    display: flex;
  }

  .nikadNijeKasno-contentCenterMainNews {
    width: 70%;
  }

  .nikadNijeKasno-contentCenterPromotions {
    width: 30%;
  }

  .nikadNijeKasno-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .nikadNijeKasno-leftBannerImage {
    width: 100%;
  }

  .nikadNijeKasno-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .nikadNijeKasno-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .nikadNijeKasno-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .nikadNijeKasno-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .nikadNijeKasno-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .nikadNijeKasno {
      padding-top: 30px;
    }

    .nikadNijeKasno-content {
      padding-top: 3%;
    }

    .nikadNijeKasno-contentCenterMain {
      display: block;
    }

    .nikadNijeKasno-contentCenterMainNews {
      width: 100%;
    }

    .nikadNijeKasno-contentCenterPromotions {
      width: 100%;
    }
  }
  .nikadNijeKasno-popularNews {
    width: 100%;
  }

  .nikadNijeKasno-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .nikadNijeKasno-popularNewsMainTitleText {
    background-color: #793BE0;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .nikadNijeKasno-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .nikadNijeKasnoPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .nikadNijeKasnoPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .nikadNijeKasnoPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .nikadNijeKasno-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .nikadNijeKasno-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .nikadNijeKasno-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .nikadNijeKasno-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .nikadNijeKasno-premijeraMainTitleText {
    background-color: #793BE0;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .nikadNijeKasno-premijeraImageItem {
    width: 100%;
  }

  .nikadNijeKasno-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .nikadNijeKasno-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .nikadNijeKasno-premijera {
      padding-left: 0;
    }
  }
  .nikadNijeKasno-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .nikadNijeKasno-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .nikadNijeKasno-facebook {
      padding-left: 0;
    }
  }
  .prakticnaZena {
    padding-top: 80px;
  }

  .prakticnaZena-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .prakticnaZena-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .prakticnaZena-contentCenterMain {
    display: flex;
  }

  .prakticnaZena-contentCenterMainNews {
    width: 70%;
  }

  .prakticnaZena-contentCenterPromotions {
    width: 30%;
  }

  .prakticnaZena-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .prakticnaZena-leftBannerImage {
    width: 100%;
  }

  .prakticnaZena-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .prakticnaZena-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .prakticnaZena-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .prakticnaZena-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .prakticnaZena-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .prakticnaZena {
      padding-top: 30px;
    }

    .prakticnaZena-content {
      padding-top: 3%;
    }

    .prakticnaZena-contentCenterMain {
      display: inline-block;
    }

    .prakticnaZena-contentCenterMainNews {
      width: 100%;
    }

    .prakticnaZena-contentCenterPromotions {
      width: 100%;
    }
  }
  .prakticnaZena-popularNews {
    width: 100%;
  }

  .prakticnaZena-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .prakticnaZena-popularNewsMainTitleText {
    background-color: #B17216;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .prakticnaZena-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .prakticnaZenaPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .prakticnaZenaPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .prakticnaZenaPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .prakticnaZena-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .prakticnaZena-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .prakticnaZena-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .prakticnaZena-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .prakticnaZena-facebook {
      padding-left: 0;
    }
  }
  .prakticnaZena-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .prakticnaZena-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .prakticnaZena-premijeraMainTitleText {
    background-color: #B17216;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .prakticnaZena-premijeraImageItem {
    width: 100%;
  }

  .prakticnaZena-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .prakticnaZena-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .prakticnaZena-premijera {
      padding-left: 0;
    }
  }
  .programskaSema {
    padding-top: 80px;
  }

  .programskaSema-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 33px;
  }

  .programskaSema-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .emisije-contentCenterMain {
    display: flex;
  }

  .emisije-contentCenterMainNews {
    width: 70%;
  }

  .emisije-contentCenterPromotions {
    width: 30%;
  }

  .programskaSema-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .programskaSema-leftBannerImage {
    width: 100%;
  }

  .programskaSema-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .programskaSema-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .programskaSema-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .programskaSema-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .programskaSema-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .programskaSema {
      padding-top: 30px;
    }

    .programskaSema-content {
      padding-top: 3%;
    }

    .emisije-contentCenterMain {
      display: block;
    }

    .emisije-contentCenterMainNews {
      width: 100%;
    }

    .emisije-contentCenterPromotions {
      width: 100%;
    }
  }
  .programskaSema-popularNews {
    width: 100%;
  }

  .programskaSema-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .programskaSema-popularNewsMainTitleText {
    background-color: #B17216;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .programskaSema-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .programskaSemaPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .programskaSemaPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .programskaSemaPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .programskaSema-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .programskaSema-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .emisije-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .emisije-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .emisije-facebook {
      padding-left: 0;
    }
  }
  .emisije-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .emisije-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .emisije-premijeraMainTitleText {
    background-color: #B17216;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .emisije-premijeraImageItem {
    width: 100%;
  }

  .emisije-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .emisije-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .emisije-premijera {
      padding-left: 0;
    }
  }
  .recepti {
    padding-top: 80px;
  }

  .recepti-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 33px;
  }

  .recepti-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .recepti-contentCenterMain {
    display: flex;
  }

  .recepti-contentCenterMainNews {
    width: 70%;
  }

  .recepti-contentCenterPromotions {
    width: 30%;
  }

  .recepti-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .recepti-leftBannerImage {
    width: 100%;
  }

  .recepti-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .recepti-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .recepti-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .recepti-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .recepti-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .recepti {
      padding-top: 30px;
    }

    .recepti-content {
      padding-top: 3%;
    }

    .recepti-contentCenterMain {
      display: block;
    }

    .recepti-contentCenterMainNews {
      width: 100%;
    }

    .recepti-contentCenterPromotions {
      width: 100%;
    }
  }
  .recepti-popularNews {
    width: 100%;
  }

  .recepti-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .recepti-popularNewsMainTitleText {
    background-color: #886C52;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .recepti-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .receptiPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .receptiPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .receptiPopularNews-titleText {
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .recepti-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .recepti-popularNewsMainTitleText {
      width: 100%;
    }
  }
  .recepti-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .recepti-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .recepti-facebook {
      padding-left: 0;
    }
  }
  .recepti-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .recepti-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .recepti-premijeraMainTitleText {
    background-color: #886C52;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .recepti-premijeraImageItem {
    width: 100%;
  }

  .recepti-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .recepti-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .recepti-premijera {
      padding-left: 0;
    }
  }
  .showbizz {
    padding-top: 80px;
  }

  .showbizz-content {
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .showbizz-contentCenter {
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
  }

  .showbizz-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .showbizz-leftBannerImage {
    width: 100%;
  }

  .showbizz-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .showbizz-rightBannerImage {
    width: 100%;
  }

  .showbizz-contentCenterCarousel {
    display: flex;
    justify-content: space-between;
  }

  .showbizz-contentCenterSecond {
    display: flex;
  }

  .showbizz-contentCenterShows {
    width: 40%;
  }

  .showbizz-contentCenterMostReadNews {
    width: 60%;
  }

  @media (max-width: 1200px) {
    .showbizz-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .showbizz-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .showbizz-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .showbizz {
      padding-top: 30px;
    }

    .showbizz-content {
      padding-top: 3%;
    }

    .showbizz-contentCenterCarousel {
      display: block;
    }

    .showbizz-contentCenterSecond {
      display: block;
    }

    .showbizz-contentCenterShows {
      width: 100%;
    }

    .showbizz-contentCenterMostReadNews {
      width: 100%;
    }
  }
  .zvezdeGranda {
    padding-top: 80px;
  }

  .zvezdeGranda-content {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #ffffff;
    padding-top: 50px;
  }

  .zvezdeGranda-contentCenter {
    width: 70%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .zvezdeGranda-contentCenterMain {
    display: flex;
  }

  .zvezdeGranda-contentCenterMainNews {
    width: 70%;
  }

  .zvezdeGranda-contentCenterPromotions {
    width: 30%;
  }

  .zvezdeGranda-contentCenterReklama {
    width: 100%;
    padding-bottom: 1rem;
    text-align: center;
  }

  .zvezdeGranda-reklamaImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 80%;
  }

  .zvezdeGranda-leftBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    left: 0;
  }

  .zvezdeGranda-leftBannerImage {
    width: 100%;
  }

  .zvezdeGranda-rightBanner {
    height: 100vh;
    max-width: 15%;
    position: fixed;
    right: 0;
  }

  .zvezdeGranda-rightBannerImage {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .zvezdeGranda-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 1200px) {
    .zvezdeGranda-leftBanner {
      display: none;
    }
  }
  @media screen and (max-width: 1200px) {
    .zvezdeGranda-rightBanner {
      display: none;
    }
  }
  @media screen and (max-width: 576px) {
    .zvezdeGranda {
      padding-top: 30px;
    }

    .zvezdeGranda-content {
      padding-top: 3%;
    }

    .zvezdeGranda-reklamaImage {
      width: 100%;
    }

    .zvezdeGranda-contentCenterMain {
      display: block;
    }

    .zvezdeGranda-contentCenterMainNews {
      width: 100%;
    }

    .zvezdeGranda-contentCenterPromotions {
      width: 100%;
    }
  }
  .zvezdeGranda-popularNews {
    width: 100%;
  }

  .zvezdeGranda-popularNewsMainTitle {
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .zvezdeGranda-popularNewsMainTitleText {
    background-color: #dda92f;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 40%;
  }

  .zvezdeGranda-popularNewsItems {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }

  .zvezdeGrandaPopularNews-image {
    height: 50%;
    width: 100%;
  }

  .zvezdeGrandaPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .zvezdeGrandaPopularNews-titleText {
    font-weight: bold;
  }

  .zvezdeGranda-popularMainNewsItems {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
    padding-bottom: 4rem;
  }

  .zvezdeGranda-popularMainNewsItems :first-child {
    grid-column: 1/-1;
  }

  .zvezdeGrandaOneMainPopularNewsItem {
    padding-bottom: 1rem;
  }

  .zvezdeGrandaOneMainPopularNews-image {
    height: 90%;
    width: 100%;
  }

  .zvezdeGrandaOneMainPopularNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .zvezdeGranda-popularNewsItems {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
      padding-bottom: 2.5rem;
    }

    .zvezdeGranda-popularNewsMainTitleText {
      width: 100%;
    }

    .zvezdeGranda-popularMainNewsItems {
      display: block;
      padding-bottom: 0;
    }

    .zvezdeGrandaOneMainPopularNews-image {
      height: 50%;
      width: 100%;
    }

    .zvezdeGrandaOneMainPopularNewsItem {
      padding-bottom: 1rem;
    }
  }
  .zvezdeGrandaNews {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 1rem;
  }

  .zvezdeGrandaNewsItem {
    display: flex;
    width: 100%;
  }

  .zvezdeGrandaNews-image {
    height: 100px;
    width: 300px;
    padding-right: 0.5rem;
  }

  .zvezdeGrandaNews-imageItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .zvezdeGrandaNews-titleText {
    font-size: 14px;
  }

  .swiper-container {
    padding-bottom: 1rem !important;
  }

  .zvezdeGranda-premijera {
    width: 100%;
    padding-left: 1rem;
  }

  .zvezdeGranda-premijeraMainTitle {
    padding-bottom: 0.5rem;
  }

  .zvezdeGranda-premijeraMainTitleText {
    background-color: #dda92f;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .zvezdeGranda-premijeraImageItem {
    width: 100%;
  }

  .zvezdeGranda-premijeraImage {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .zvezdeGranda-premijeraTitleText {
    padding-bottom: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .zvezdeGranda-premijera {
      padding-left: 0;
    }
  }
  .zvezdeGranda-facebook {
    padding-left: 1rem;
    padding-top: 1rem;
  }

  .zvezdeGranda-facebookMain {
    height: 500px;
    width: 100%;
    border: none;
    overflow: hidden;
  }

  @media screen and (max-width: 576px) {
    .zvezdeGranda-facebook {
      padding-left: 0;
    }
  }
  .showbizz-carousel {
    width: 60%;
    height: 45%;
    box-sizing: border-box;
    padding-right: 1rem;
  }

  .carousel .carousel-item {
    height: 400px;
  }

  .carousel-item img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    min-height: 400px;
  }

  .carousel-caption {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    left: 0;
    bottom: 0;
  }

  .carousel-captionDateTitle {
    text-align: left;
    padding-left: 1rem;
  }

  .carousel-indicators {
    margin-bottom: 0;
  }

  @media screen and (max-width: 576px) {
    .showbizz-carousel {
      width: 100%;
      padding-right: 0;
      padding-bottom: 1rem;
    }
  }
  .showbizz-poll {
    width: 40%;
    height: 400px;
    box-sizing: border-box;
    position: relative;
  }
  .showbizz-poll .bg-poll {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    z-index: 100;
    background: rgba(121, 56, 224, 0.71);
  }

  .showbizz-pollItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .showbizz-pollInner {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 101;
  }

  .showbizz-pollItemBrandText {
    color: #ffffff;
    position: absolute;
    width: fit-content;
    box-sizing: border-box;
    background-color: #793AE0;
    top: 0;
    left: 0;
    padding: 0.3rem 0.7rem;
    font-size: 0.7em;
    font-weight: bold;
  }

  .showbizz-pollItemLayer {
    color: #ffffff;
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    bottom: 0;
    top: 10%;
    padding: 1rem 1.7rem;
  }
  .showbizz-pollItemLayer h3 {
    margin-bottom: 1.7em;
    font-size: 1.5em;
    font-weight: bold;
  }
  .showbizz-pollItemLayer .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .showbizz-pollItemLayer .rezultati {
    color: white;
    font-weight: bold;
    font-size: 0.9em;
    text-decoration: none;
  }
  .showbizz-pollItemLayer button {
    font-weight: bold;
    min-width: 130px;
    font-size: 0.9em;
    color: #793AE0;
    margin: 0;
  }

  .form-check {
    margin-bottom: 1.7em;
  }
  .form-check label {
    font-weight: 200;
  }

  .btn-poll {
    margin-top: 0.5rem;
  }

  @media screen and (max-width: 576px) {
    .showbizz-poll {
      width: 100%;
      margin-right: 2rem;
    }
  }
  .showbizz-news {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 1rem;
  }

  .showbizz-newsItems {
    max-width: 100%;
    box-sizing: border-box;
    padding-top: 1rem;
  }

  .showbizz-newsItemsImage {
    width: 100%;
  }

  .showbizz-newsItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: auto;
    width: 100%;
  }

  .showbizz-newsTitle {
    position: relative;
  }

  .showbizz-newsBrand {
    position: relative;
  }

  .showbizz-newsBrandText {
    color: #ffffff;
    position: absolute;
    width: fit-content;
    box-sizing: border-box;
    top: 0;
    left: 0;
    padding: 0.3rem;
  }

  .showbizz-nikadNijeKasno {
    background-color: #5a319d;
  }

  .showbizz-grand {
    background-color: #B17216;
  }

  .showbizz-newsItemTitle {
    position: absolute;
    width: 100%;
    height: 4.5rem;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    bottom: 0;
    padding: 0.2rem;
    margin: auto;
  }

  @media screen and (max-width: 1600px) {
    .showbizz-newsItemTitle {
      font-size: small;
    }
  }
  @media screen and (max-width: 1100px) {
    .showbizz-news {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    .showbizz-news {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      column-gap: 1rem;
    }

    .showbizz-newsItemTitle {
      font-size: 1.2vh;
      height: 3rem;
    }

    .showbizz-newsBrandText {
      font-size: 1vh;
    }
  }
  .showbizz-popularNews {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
    row-gap: 1rem;
  }

  .showbizz-contentCenterPopularNews {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 1rem;
    row-gap: 1rem;
  }
  @media screen and (min-width: 1500px) {
    .showbizz-contentCenterPopularNews {
      grid-template-columns: 2fr 1fr;
    }
  }

  .showbizz-popularNewsMainTitle {
    padding-bottom: 0.5rem;
  }

  .showbizz-popularNewsMainTitleText {
    background-color: #E44326;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 50%;
  }

  .showbizz-popularNewsItems {
    max-width: 100%;
    box-sizing: border-box;
  }

  .showbizz-popularNewsItemsImage {
    height: 100%;
    width: 100%;
  }

  .showbizz-popularNewsItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .showbizz-popularNewsBrand {
    position: relative;
  }

  .showbizz-popularNewsBrandText {
    color: #ffffff;
    position: absolute;
    width: fit-content;
    box-sizing: border-box;
    top: 0;
    left: 0;
    padding: 0.3rem;
  }

  .showbizz-zvezdeGranda {
    background-color: #dda92f;
  }

  .showbizz-popularNewsTitle {
    position: relative;
  }

  .showbizz-popularNewsItemTitle {
    width: 100%;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    padding: 0.2rem;
  }

  .showbizz-popularNewsbtnWrap {
    width: 100%;
    text-align: end;
    padding-top: 1rem;
  }

  .showbizz-popularNewsbtn {
    border: 1px solid red;
    box-sizing: border-box;
    padding: 0.5rem;
  }

  @media screen and (max-width: 768px) {
    .showbizz-popularNews {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 1rem;
    }

    .showbizz-popularNewsMainTitleText {
      width: 100%;
    }

    .showbizz-popularNewsItemTitle {
      font-size: 10px;
    }

    .showbizz-popularNewsBrandText {
      font-size: 10px;
    }
  }
  .shows {
    display: block;
    max-width: 100%;
    padding-right: 1rem;
  }

  .showsMainTitle {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media screen and (min-width: 1500px) {
    .showbizz-show-content {
      display: grid;
      grid-column-gap: 2rem;
      grid-template-columns: 65% auto;
    }
  }

  .showsMainTitleText {
    background-color: #E44326;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 70%;
  }

  .showsItems {
    max-width: 100%;
    box-sizing: border-box;
    padding-bottom: 1rem;
  }

  .showsItemsImage {
    height: 100%;
    width: 100%;
  }

  .showsItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .showsItemText {
    position: relative;
  }

  .showsItemCaption {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    bottom: 0;
    padding: 0.2rem;
  }

  .showsItemTitle {
    width: 100%;
    color: #ffffff;
  }

  .showsItemTime {
    width: 100%;
    color: #ffffff;
  }

  @media screen and (max-width: 576px) {
    .shows {
      width: 100%;
      padding-right: 0;
    }

    .showsMainTitleText {
      width: 100%;
    }
  }
  .mostReadNews {
    display: block;
    width: 100%;
  }

  .mostReadNewsMainTitle {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  .mostReadNewsMainTitleText {
    background-color: #E44326;
    color: #ffffff;
    padding: 0.5rem;
    box-sizing: border-box;
    clip-path: polygon(0 0, 85% 0, 100% 100%, 0% 100%);
    width: 100%;
  }

  .mostReadNewsItems {
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 1rem;
  }

  .mostReadNewsItemsImage {
    height: auto;
  }

  .mostReadNewsItem {
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
  }

  .mostReadNewsItemTitle {
    width: 100%;
    color: #000000;
    background-color: #EDEDED;
    height: 100%;
    padding-left: 0.5rem;
  }

  .showbizz-mostReadNewsBrand {
    position: relative;
  }

  .showbizz-mostReadNewsBrandText {
    color: #ffffff;
    position: absolute;
    width: fit-content;
    box-sizing: border-box;
    bottom: 0;
    right: 0;
    padding: 0.3rem;
    margin-bottom: 0.5rem;
  }

  .showbizz-horoskop {
    background-color: #3774A6;
  }

  .showbizz-grand {
    background-color: #B17216;
  }

  .showbizz-zvezdeGranda {
    background-color: #dda92f;
  }

  @media screen and (max-width: 576px) {
    .mostReadNews {
      width: 100%;
    }

    .mostReadNewsMainTitleText {
      width: 100%;
    }

    .mostReadNewsItemTitle {
      padding-bottom: 1.7rem;
      font-size: 1.4vh;
    }

    .mostReadNewsMainTitle {
      padding-top: 0;
    }

    .showbizz-mostReadNewsBrandText {
      font-size: 10px;
    }

    .mostReadNewsItem {
      width: 150px;
    }
  }
  @media screen and (max-width: 1200px) {
    .mostReadNewsItem {
      width: 150px;
    }
  }
  @media screen and (min-width: 1200px) {
    .mostReadNewsItem {
      width: 250px;
    }
  }
  .newsTest {
    padding-top: 80px;
  }

  .newsTest-content {
    background-color: #ffffff;
    padding-top: 33px;
    margin: 0 15%;
  }

  .newsTest-contentCenter {
    width: 100%;
    height: 100vh;
    margin: auto;
    box-sizing: border-box;
    padding: 0.5rem;
  }

  .newsTest-newsItem {
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    .newsTest-contentCenter {
      display: block;
      width: 100%;
    }
  }
  @media screen and (max-width: 575px) {
    .newsTest {
      padding-top: 0;
    }
  }
  .image-gallery {
    width: 100%;
  }

  .mojitem {
    height: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    .mojitem {
      min-width: 500px;
    }
  }
  .mojitem .caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  .video {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    section {
      display: block;
    }
  }
`;

export default React.memo(GlobalStyle);