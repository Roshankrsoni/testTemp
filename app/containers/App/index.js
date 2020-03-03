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

import HomePage from 'containers/HomePage/Loadable'; 
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import OurTeam from 'containers/StaticPages/OurTeam/Loadable';
import AboutUs from 'containers/StaticPages/AboutUs/Loadable';
import CompensationPlan from 'containers/StaticPages/CompensationPlan/Loadable';
import RulesUnauthorized from 'containers/StaticPages/RulesUnauthorized/Loadable';
import faq from 'containers/StaticPages/FAQ/Loadable';
import ContactUs from 'containers/StaticPages/ContactUs/Loadable';
import PrivacyPolicy from 'containers/StaticPages/PrivacyPolicy/Loadable';

import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';
import "../../stylesheets/main.css";

const AppWrapper = styled.div`
  // max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  flex-direction: column;
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} /> 
        <Route path="/our-team" component={OurTeam} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/compensation-plan" component={CompensationPlan} /> 
        <Route path="/rules-unauthorized" component={RulesUnauthorized} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/faq" component={faq} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="" component={NotFoundPage} />
      </Switch>
      <Footer />
      <GlobalStyle />
    </AppWrapper>
  );
}
