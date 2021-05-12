import React, { Fragment } from 'react';
import GlobalStyle from "./GlobalStyles/GlobalStyles";

function Layout({children}) {
    return (
        <Fragment>
            <GlobalStyle />
            {children}
        </Fragment>
    );
}

export default Layout;