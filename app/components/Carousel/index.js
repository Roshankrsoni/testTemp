import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { isMobile } from 'react-device-detect';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 200,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
  lazyLoad: true,
  swipeToSlide: true,
};

const divStyle = {
  paddingLeft: '8px',
  paddingRight: '8px',
};

const imgStyle = {
  width: '100%',
  height: '100%',
};

const Carousel = props => {
  // const isAsort = checkForAsortDomain(window.location.hostname);
  // const user = Accounts.user();
  const { bannerImages } = props;
  // if(user && user.username) {
  //   bannerImages = props.homeBannerImages;
  // }
  // else {
  //   bannerImages = _.filter(props.homeBannerImages, (banner) => banner.isAuthenticated == false );
  // }
  return (
    <Slider {...settings}>
      {bannerImages.map((item, index) => {
        const key = `banner-${index}`;
        return (
          <span key={key} style={divStyle}>
            <Link to={item.redirecturl}>
              <img
                srcSet={`https://ds.asort.com/${
                  !isMobile
                    ? item.bannerimage
                    : item.bannerimage.replace('webDsAsort', 'dsAsort')
                }`}
                src={`https://ds.asort.com/${
                  !isMobile
                    ? item.bannerimage
                    : item.bannerimage.replace('webDsAsort', 'dsAsort')
                }`}
                alt=""
                // {`image${item.position}`}
                style={imgStyle}
                className={`responsive Home-Slider-${item.position}`}
              />
            </Link>
          </span>
        );
      })}
    </Slider>
  );
};

Carousel.propTypes = {
  bannerImages: PropTypes.array,
};

export default Carousel;
