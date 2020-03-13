/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React from 'react';
import ReactPlayer from 'react-player';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import '../../containers/BrandsPage/brand-page.less';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];
// const isAsort = checkForAsortDomain(window.location.hostname);

const brands_ABG = () => {
  // const page_title = "ABG Best Online Shopping Brand for Men & Women Street & Funky Wear Hub in India | Asort";
  // const page_desc = "ABG best online shopping brand for men & women street & funky wear hub in India. Buy Bottom wear, Graphic t-shirt, Shoes, etc for men & women.";
  // const page_keywords = "street and funky wear hub in India, denims for women, denims jackets for women, tank for women, shirts for men, bottom wear for men, graphic t-shirt for men, bags for men and women, shoes for men.";
  // const seo_title = "ABG Best Online Shopping Brand for Men & Women Street & Funky Wear Hub in India | Asort";
  // const seo_desc = "Buy online wide range of comfortable street & funky wear clothing for men & women from Asort in India. Easy returns.";
  // const page_url = window.location.href;
  // const page_image = `${window.location.host}/assets/images/brands/abg/ABG_Slider-1.0.jpg`;

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
    <section className="container-fluid home specific-brand" id="specific-abg">
      <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="A.B.G." />
      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <ReactPlayer
            url="https://vimeo.com/349392298"
            className="slider_video"
            playing
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 ABG-Women">
            <Link slug="/abg-women">
              <span>Women</span>
              <img alt="" src="/assets/images/brands/abg/WOMEN-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item3 ABG-Men">
            <Link slug="/abg-men">
              <span>Men</span>{' '}
              <img alt="" src="/assets/images/brands/abg/MEN-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="ABG-Shirt">
            <Link slug="/abg-shirts">
              <span>Shirts</span>
              <img alt="" src="/assets/images/brands/abg/SHIRTS-1.0.jpg" />
            </Link>
          </div>
          <div>
            <Link
              slug="/abg-joggers"
              className="brand-page-top-grid ABG-Jogger"
              style={{
                backgroundImage: `url(${'/assets/images/brands/abg/JOGGER-1.0.jpg'}`,
              }}
            >
              <span>Joggers</span>
            </Link>
            <Link
              slug="/abg-tshirts"
              className="brand-page-bottom-grid ABG-Tees"
              style={{
                backgroundImage: `url(${'/assets/images/brands/abg/TEE-1.0.jpg'}`,
              }}
            >
              <span>Tees</span>
            </Link>
          </div>
          <div className="ABG-Bottoms">
            <Link slug="/abg-bottoms">
              {' '}
              <span>Bottoms</span>
              <img alt="" src="/assets/images/brands/abg/BOTTOMS-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 ABG-Shoes">
            <Link slug="/abg-shoes">
              <span>Shoes</span>
              <img alt="" src="/assets/images/brands/abg/SHOES-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item10 ABG-Accessories">
            <Link slug="/abg-accessories">
              <span>Accessories</span>
              <img alt="" src="/assets/images/brands/abg/ACCESSORIES-1.0.jpg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_ABG;
