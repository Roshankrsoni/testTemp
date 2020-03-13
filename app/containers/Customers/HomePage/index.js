/*
 * Customers
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import Slider from 'react-slick';
import { isMobile } from 'react-device-detect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Card from 'components/Card';
import Carousel from 'components/Carousel';
import { makeHotSellingSelector } from './selectors';
import { getHotSellingProducts } from './actions';
import reducer from './reducer';
import saga from './saga';
import './stylesheets/home.less';
import './stylesheets/common.less';

import {
  stores,
  trendingwomen,
  newarrival,
  trendingmen,
  trendingaccessories,
  shopbycategory,
  asortstyle,
} from './constants';

const homeBannerImages = {
  value: [
    {
      bannerimage: 'resources/home/banners/webDsAsort/deal-zone.jpg',
      redirecturl: '/deal-zone',
      position: 2,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '40599xnk6m8l2cz',
      unique_id: 'banner_1581688651570',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/gulnar-slider-1.0.jpg',
      redirecturl: '/earthyscent-gulnar-collection',
      position: 4,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '4059a1jk7ez8w74',
      unique_id: 'banner_1583426486272',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/wasabi-slider-1.0.jpg',
      redirecturl: '/abg-wabi-sabi-collection',
      position: 5,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '40599xok6jd6ybx',
      unique_id: 'banner_1581514992717',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/trip-to-goa-1.0.jpg',
      redirecturl: 'https://blog.asort.com/get-ready-to-win-free-trip-to-goa/',
      position: 7,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '40599yok4y12i03',
      unique_id: 'banner_1578048057506',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/taabir-slider-1.0.jpg',
      redirecturl: '/earthyscent-taabir-collection',
      position: 9,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '4059a1ok67tzpvp',
      unique_id: 'banner_1580817614532',
    },
    {
      bannerimage:
        'resources/home/banners/webDsAsort/annoucement-slider-1.0.jpg',
      redirecturl: '/',
      position: 10,
      active: true,
      isAuthenticated: true,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '40599xok6jd4igx',
      unique_id: 'banner_1581514878849',
    },
    {
      bannerimage:
        'resources/home/banners/webDsAsort/abg-bms-collection-ds-1.0.jpg',
      redirecturl: '/abg-being-myself-collection',
      position: 11,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: '40599vik4s28i63',
      unique_id: 'banner_1577687220218',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/pehraav-1.0.jpg',
      redirecturl: '/earthyscent-peharav-collection',
      position: 16,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: 'ef7w46hsk37hg0x0',
      unique_id: 'banner_earthyscent-peharav-collection',
    },
    {
      bannerimage: 'resources/home/banners/webDsAsort/bundle-slider-1.0.jpg',
      redirecturl: '/bundle-sale',
      position: 17,
      active: true,
      isAuthenticated: false,
      sectionId: 'HYLzGRYu6ezKPbNw4',
      _id: 'ef7w46hsk37hdmaq',
      unique_id: 'bundle_sale_unique',
    },
  ],
  timestamp: 1583478227916,
};

// eslint-disable-next-line react/prefer-stateless-function
class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.getHotSellingProducts();
  }

  render() {
    const settings = {
      className: `center`,
      centerMode: true,
      infinite: !isMobile,
      centerPadding: isMobile ? `60px` : `0`,
      slidesToShow: 1,
      speed: 500,
    };
    return (
      <>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div className="home">
          <section className="container-fluid container-fluid-nopamapd">
            <div className="pageWrp">
              {/* style={style} */}
              <div className="item1">
                <Carousel bannerImages={homeBannerImages.value} />
              </div>

              <div className="storeWrapper">
                {isMobile ? (
                  <h2>Stores</h2>
                ) : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/stores/title-1.0.png"
                  />
                )}
                <div className="store">
                  {stores.map((store, index) => {
                    const key = `storeBox-${index}`;
                    if (store.active) {
                      return (
                        <Card
                          className="storeBox"
                          key={key}
                          style={{ boxShadow: store.shadow }}
                          redirectTo={store.redirecturl}
                          imgSrc={store.storeimage}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className="men trendingWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/trending-men/title-1.0.png"
                  />
                )}
                <div className="trending">
                  {trendingmen.map((trending, index) => {
                    const key = `trendingBox-${index}`;
                    if (trending.active) {
                      return (
                        <Card
                          className="trendingBox"
                          key={key}
                          redirectTo={trending.redirecturl}
                          imgSrc={trending.trendingurl}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className="arrivalWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/new-collections/title-1.0.png"
                  />
                )}
                {isMobile ? (
                  <Slider
                    {...{
                      ...settings,
                      ...(isMobile ? {} : { slidesToShow: 3 }),
                    }}
                  >
                    {newarrival.map((arrival, index) => {
                      const key = `arrivalBox-${index}`;
                      if (arrival.active) {
                        return (
                          <Card
                            className="arrivalBox"
                            key={key}
                            redirectTo={arrival.redirecturl}
                            imgSrc={arrival.newarrivalurl}
                          />
                        );
                      }
                      return null;
                    })}
                  </Slider>
                ) : (
                  <div className="arrivalContainer">
                    <Slider
                      {...{
                        ...settings,
                        ...(isMobile ? {} : { slidesToShow: 3 }),
                      }}
                    >
                      {newarrival.map((arrival, index) => {
                        const key = `arrivalBox-${index}`;
                        if (arrival.active) {
                          return (
                            <Card
                              className="arrivalBox"
                              key={key}
                              redirectTo={arrival.redirecturl}
                              imgSrc={arrival.newarrivalurl}
                            />
                          );
                        }
                        return null;
                      })}
                    </Slider>
                  </div>
                )}
              </div>
              <div className="women trendingWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/trending-women/title-1.0.png"
                  />
                )}
                <div className="trending">
                  {trendingwomen.map((trending, index) => {
                    const key = `trendingBox-${index}`;
                    if (trending.active) {
                      return (
                        <Card
                          className="trendingBox"
                          key={key}
                          redirectTo={trending.redirecturl}
                          imgSrc={trending.trendingurl}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className="hotSellingWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/title-1.0.png"
                  />
                )}
                {/* {isMobile ?
                <Components.HotSelling />
                :
                <div className="hotSellingContainer">
                  <Components.HotSelling />
                </div>
              } */}
              </div>
              <div className="accessories trendingWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/accessories/title-1.0.png"
                  />
                )}
                <div className="trending">
                  {trendingaccessories.map((trendingaccessorie, index) => {
                    const key = `trendingBox-${index}`;
                    if (trendingaccessorie.active) {
                      return (
                        <Card
                          className="trendingBox"
                          key={key}
                          redirectTo={trendingaccessorie.redirecturl}
                          imgSrc={trendingaccessorie.trendingaccessoriesurl}
                        />
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
              <div className="shopByCategoryWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/categories/title-1.0.png"
                  />
                )}
                <Slider
                  {...{ ...settings, ...(isMobile ? {} : { slidesToShow: 6 }) }}
                  slidesPerRow={isMobile ? 2 : 1}
                  centerPadding={isMobile ? '20px' : '0'}
                >
                  {shopbycategory.map((category, index) => {
                    const key = `shopByCategoryBox-${index}`;
                    if (category.active) {
                      return (
                        <div key={key}>
                          <Card
                            className="shopByCategoryBox"
                            key={key}
                            redirectTo={category.redirecturl}
                            imgSrc={category.shopbycategoryurl}
                            text={category.text}
                          />
                        </div>
                      );
                    }
                    return null;
                  })}
                </Slider>
              </div>
              <div className="asortStyleWrapper">
                {isMobile ? null : (
                  <img
                    className="title"
                    alt=""
                    src="/assets/home/images/dsAsort/asort-style/title-1.0.png"
                  />
                )}
                {isMobile ? (
                  <Slider
                    {...{
                      ...settings,
                      ...(isMobile ? {} : { slidesToShow: 4 }),
                    }}
                    infinite
                  >
                    {asortstyle.map((style, index) => {
                      const key = `asortStyle-${index}`;
                      if (style.active) {
                        return (
                          <Card
                            className="asortStyle"
                            key={key}
                            imgSrc={style.asortstyleurl}
                          />
                        );
                      }
                      return null;
                    })}
                  </Slider>
                ) : (
                  <div className="asortStylecontainer">
                    <Slider
                      {...{
                        ...settings,
                        ...(isMobile ? {} : { slidesToShow: 4 }),
                      }}
                      infinite
                    >
                      {asortstyle.map((style, index) => {
                        const key = `asortStyle-${index}`;
                        if (style.active) {
                          return (
                            <Card
                              className="asortStyle"
                              key={key}
                              imgSrc={style.asortstyleurl}
                            />
                          );
                        }
                        return null;
                      })}
                    </Slider>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

HomePage.propTypes = {
  // username: PropTypes.string,
  hotSellingProducts: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  getHotSellingProducts: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  hotSellingProducts: makeHotSellingSelector(),
  // username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    // onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    getHotSellingProducts: () => dispatch(getHotSellingProducts()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'homePage', reducer });
const withSaga = injectSaga({ key: 'homePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(HomePage);
