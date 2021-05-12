import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// import './css/style.css';
import { Horoskop } from './components/horoskop/Horoskop';
import { NikadNijeKasno } from './components/nikad-nije-kasno/NikadNijeKasno';
import { PrakticnaZena } from './components/prakticna-zena/PrakticnaZena';
import { Recepti } from './components/recepti/Recepti';
import { Showbizz } from './components/showbizz/Showbizz';
import { ZvezdeGranda } from './components/zvezde-granda/ZvezdeGranda';
import { Grandoskop } from './components/horoskop/Grandoskop';
// import { Emisije } from './components/grand/Emisije';
import { ProgramskaSemaPage } from './components/grand/programska-sema/ProgramskaSemaPage';
import { NewsTest } from './components/news-test-page/NewsTest';
import PostPage from "./components/post/PostPage";
import ShowsCategoryListPage from "./components/emisije/ShowsCategoryListPage";
import SingleCategoryShowListPage from "./components/emisije/SingleCategoryShowListPage";
import GlobalStyle from "./components/GlobalStyles/GlobalStyles";
import {Fragment} from "react";

function App() {
  return (
      <Fragment>
        <GlobalStyle />
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route component={Showbizz} exact path="/showbizz" />
          <Route component={ZvezdeGranda} exact path="/zvezde-granda" />
          <Route component={NikadNijeKasno} exact path="/nikad-nije-kasno" />
          <Route component={PrakticnaZena} exact path="/prakticna-zena" />
          <Route component={Grandoskop} exact path="/grandoskop" />
          <Route component={Horoskop} exact path="/horoskop" />
          <Route component={Recepti} exact path="/recepti" />
          <Route component={ShowsCategoryListPage} exact path="/emisije" />
          <Route component={SingleCategoryShowListPage} path="/emisije/:category" />
          <Route component={ProgramskaSemaPage} exact path="/programska-sema" />
          <Route component={NewsTest} exact path="/NewsTest" />
          <Route component={PostPage} path="/posts/:id" />
          <Redirect from="/" to="showbizz" />  
        </Switch>
      </BrowserRouter>
    </div>
      </Fragment>
  );
}

export default App;
