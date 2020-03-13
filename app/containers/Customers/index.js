/*
 * Customers
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import OurTeam from 'containers/StaticPages/OurTeam/Loadable';
import AboutUs from 'containers/StaticPages/AboutUs/Loadable';
import CompensationPlan from 'containers/StaticPages/CompensationPlan/Loadable';
import RulesUnauthorized from 'containers/StaticPages/RulesUnauthorized/Loadable';
import faq from 'containers/StaticPages/FAQ/Loadable';
import ContactUs from 'containers/StaticPages/ContactUs/Loadable';
import PrivacyPolicy from 'containers/StaticPages/PrivacyPolicy/Loadable';
import HomePage from './HomePage/Loadable';
import ProductList from './ProductList/Loadable';
import './styles.css';
import './variables.less';
import ourBrands from '../BrandsPage/brands';
import { AbgBrand, AmiigaBrand, AsortOriginals, EarthlyScent, Haul, Huffman, Ifazone, Kuefit, Solasta } from '../../components/Brands';
import './asort-main.css';
import './button.less';

// eslint-disable-next-line react/prefer-stateless-function
class Customers extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application customers"
          />
        </Helmet>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/brands" component={ourBrands} />
            <Route exact path="/brands/ABG" component={AbgBrand} />
            <Route exact path="/brands/EarthyScent" component={EarthlyScent} />
            <Route exact path="/brands/Mrhuffman" component={Huffman} />
            <Route exact path="/brands/Ifazone" component={Ifazone} />
            <Route exact path="/brands/Kuefit" component={Kuefit} />
            <Route exact path="/brands/solasta-shoes" component={Solasta} />
            <Route exact path="/brands/amiiga" component={AmiigaBrand} />
            <Route exact path="/brands/asortoriginals" component={AsortOriginals} />
            <Route exact path="/brands/haul" component={Haul} />
            <Route exact path="/our-team" component={OurTeam} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route
              exact
              path="/compensation-plan"
              component={CompensationPlan}
            />
            <Route
              exact
              path="/rules-unauthorized"
              component={RulesUnauthorized}
            />
            <Route exact path="/contact-us" component={ContactUs} />
            <Route exact path="/faq" component={faq} />
            <Route exact path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/:slug" render={props => <ProductList key={props.match.params.slug || 'empty'} />} />
          </Switch>
        </div>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  null,
);
export default compose(
  withConnect,
  memo,
)(Customers);
