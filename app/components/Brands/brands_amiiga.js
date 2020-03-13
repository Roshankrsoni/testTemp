/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
// import { Meteor } from "meteor/meteor";
// import BreadcrumbComponent from "/imports/plugins/custom/breadcrumb-products/client/components/breadcrumbComponents";
import CUSTOMDOM from '../common/customdom';
// import { isMobile } from 'react-device-detect';
// import { checkForAsortDomain } from "/imports/plugins/custom/common/checkforAsortDomain";
import '../../containers/BrandsPage/brand-page.less';
import './BrandStyles/amiiga.less';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];
// const isAsort = checkForAsortDomain(window.location.hostname);

const brands_amiiga = () => {
  // const page_title = "Amiiga Western Wear Clothing Brand for Women in India | Asort";
  // const page_desc = "Amiiga is an online western wear clothing brand for women. Buy western dresses tops, jeans, jumpsuits etc. for Women from a wide range available only on Asort.";
  // const page_keywords = "amiiga, asort, buy women bottomwear online in india, buy online dresses for women, jumpsuits for women in India, buy online women tops in India.";
  // const seo_title = "Amiiga Online Clothing Brand for Women in India | Asort";
  // const seo_desc = "Buy online wide range of comfortable western wear clothing for women from Asort in India. Easy returns.";
  // const page_url = window.location.href;
  // const page_image = `${window.location.host}/resources/brands/amiiga/Amiiga-Asort-Banner-1.0.jpg`

  const page_title = 'Ds.Asort | Best Direct Selling Company in India';
  const page_desc =
    'Ds.asort India’s best direct selling company dealing in world class lifestyle products for men and women. Business opportunity.';
  const page_keywords =
    'MLM company, direct selling company, business opportunity.';

  document.title = page_title;

  CUSTOMDOM.setCustomMetaTag({
    findWithKey: 'name',
    findWithValue: 'description',
    content: page_desc,
  });

  CUSTOMDOM.setCustomMetaTag({
    findWithKey: 'name',
    findWithValue: 'keywords',
    content: page_keywords,
  });

  return (
    <section
      className="container-fluid home specific-brand"
      id="specific-amiiga"
    >
      <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="Amiiga" />
      {window.screen.width <= 480 ? (
        <div className="amiiga-pageWrp">
          <div className="amigabanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Amiiga-Asort-Banner-1.0.jpg"
            />
          </div>
          <div className="handPickedBanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Handpicked-Strip-1.0.jpg"
            />
          </div>
          <div className="handPickedCat">
            <div className="handPickedCasual">
              <Link slug="/amiiga-casual-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Casual-wear-mobile-1.0.png"
                />
              </Link>
            </div>
            <div className="handPickedFormal">
              <Link slug="/amiiga-formal-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-1-mobile-1.0.png"
                />
              </Link>
            </div>
            <div className="handPickedStyled">
              <Link slug="/amiiga-culturally-styled">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Culturally-Styled-mobile-1.0.png"
                />
              </Link>
            </div>
          </div>
          <div className="glamLifeCat">
            <div className="fab-head">
              <img
                alt=""
                src="/assets/images/brands/amiiga/Fashionable-feet-1.0.png"
              />
            </div>
            <div className="glamLifeDresses">
              <Link slug="/amiiga-top-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Top-Wear-mobile-1.0.png"
                />
              </Link>
            </div>
            <div className="glamLifeTop">
              <Link slug="/amiiga-bottom-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-2-bottom-wear-mobile-1.0.png"
                />
              </Link>
            </div>
            {/* <div className="glamLifeGraphic">
                <Link slug="/amiiga-graphic-tees">
                  <img alt='' src={"/assets/images/brands/amiiga/Amiiga-Page-2-mobile-1.0.png"} />
                </Link>
              </div> */}
          </div>
          <div className="tipBanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Amiiga-Styling-Tips-mobile-1.1.jpg"
            />
          </div>
          <div className="glamLifeCat2">
            <div className="glam-head">
              <img
                alt=""
                src="/assets/images/brands/amiiga/The-Glam-Life-1.1.png"
              />
            </div>
            <div className="glamLifeBottomDresses">
              <Link slug="/amiiga-dresses-and-jumpsuits">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Dresses&JumpSuits-mobile-1.1.png"
                />
              </Link>
            </div>
            <div className="glamLifeBottomDresses jewellery">
              <Link slug="/amiiga-jewellery">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Jewellery-mobile-1.0.png"
                />
              </Link>
            </div>
          </div>
          <div className="trendsCont">
            <div className="trend-head">
              <img
                alt=""
                src="/assets/images/brands/amiiga/bag-full-of-trends-1.0.png"
              />
            </div>
            <div className="bag-full-of-trends">
              <Link slug="/amiiga-accessories">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/bag-full-of-trends-4-mobile-1.0.png"
                />
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="amiiga-pageWrp">
          <div className="amigabanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Amiiga-Asort-Banner-1.0.jpg"
            />
          </div>
          <div className="handPickedBanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Handpicked-Strip-1.0.jpg"
            />
          </div>
          <div className="handPickedCat">
            <div className="handPickedCasual">
              <Link slug="/amiiga-casual-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Casual-wear-1.0.png"
                />
              </Link>
            </div>
            <div className="handPickedFormal">
              <Link slug="/amiiga-formal-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-1-1.0.png"
                />
              </Link>
            </div>
            <div className="handPickedStyled">
              <Link slug="/amiiga-culturally-styled">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Culturally-Styled-1.0.png"
                />
              </Link>
            </div>
          </div>
          <div className="glamLifeCat">
            <div className="fab-head">
              <img
                alt=""
                src="/assets/images/brands/amiiga/Fashionable-feet-desktop-1.0.png"
              />
            </div>
            <div className="glamLifeDresses">
              <Link slug="/amiiga-top-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-Top-Wear-1.1.png"
                />
              </Link>
            </div>
            <div className="glamLifeTop">
              <Link slug="/amiiga-bottom-wear">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-2-bottom-wear-1.1.png"
                />
              </Link>
            </div>
            {/* <div className="glamLifeGraphic">
                <Link slug="/amiiga-graphic-tees">
                  <img alt='' src={"/assets/images/brands/amiiga/Amiiga-Page-2-1.0.png"} />
                </Link>
              </div> */}
          </div>
          <div className="tipBanner">
            <img
              alt=""
              src="/assets/images/brands/amiiga/Amiiga-Styling-Tips-1.1.jpg"
            />
          </div>
          <div className="glamLifeCat2">
            <div className="glamLifeBottomDresses">
              <Link slug="/amiiga-dresses-and-jumpsuits">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-3-Dresses-&-Jumpsuits-1.1.png"
                />
              </Link>
            </div>
            <div className="glamLifeBottomDresses jewellery">
              <Link slug="/amiiga-jewellery">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-3-Jewellery-1.0.png"
                />
              </Link>
            </div>
          </div>
          <div className="trendsCont">
            <div className="trend-head">
              <img
                alt=""
                src="/assets/images/brands/amiiga/bag-full-of-trends-1.0.png"
              />
            </div>
            <div className="bag-full-of-trends">
              <Link slug="/amiiga-accessories">
                <img
                  alt=""
                  src="/assets/images/brands/amiiga/Amiiga-Page-4-1.0.png"
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default brands_amiiga;
