/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Customers from 'containers/Customers/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import '../../stylesheets/main.css';
import '../../stylesheets/semantic.css';


export default function App() {
  return (
    <div>
      <Helmet
        titleTemplate="%s - Maloka"
        defaultTitle="Maloka"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>






      <div  id="reactionAppContainer">
        <input type="checkbox" id="sideMenuOpen" />
        <div className="pusher">
          <div className="ui mob-container" id="topheader">

          <Header />
            <div className="cart-and-page-container">
              {/* <Blaze template="cartDrawer" className="reaction-cart-drawer" /> */}
              <div className="pageWrapperMain">
                <main>
                <Switch>
        <Route path="/" component={Customers} />
        <Route path="" component={NotFoundPage} />
      </Switch>
                </main>

                <Footer />
              </div>
            </div>

          </div>
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}
