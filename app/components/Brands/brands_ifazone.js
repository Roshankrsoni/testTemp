/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import './BrandStyles/haul-page.less';

const brands_ifazone = () => {
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
      id="specific-ifazone"
    >
      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <img
            alt=""
            src="/assets/images/brands/ifazone/IFAZONE_Slider-1.0.jpg"
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 Ifazone-Women">
            <Link slug="/ifazone-women">
              {' '}
              <span>Women</span>
              <img alt="" src="/assets/images/brands/ifazone/WOMEN-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item3 Ifazone-Men">
            <Link slug="/ifazone-men">
              <span>Men</span>{' '}
              <img alt="" src="/assets/images/brands/ifazone/MEN-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="Ifazone-Shirt">
            <Link slug="/ifazone-shirts">
              <span>Shirts</span>
              <img alt="" src="/assets/images/brands/ifazone/SHIRTS-1.0.jpg" />
            </Link>
          </div>
          <div>
            <Link
              slug="/ifazone-tshirts-and-polos"
              className="brand-page-top-grid Ifazone-Polo"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/ifazone/TEES-1.0.jpg')",
              }}
            >
              <span>Polo And Tees </span>
            </Link>
            <Link
              slug="/ifazone-women-tops"
              className="brand-page-bottom-grid 	Ifazone-Tops"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/ifazone/TOPS&TUNIC-1.0.jpg')",
              }}
            >
              <span>Tops And Tunics</span>
            </Link>
          </div>
          <div className="Ifazone-Bottoms">
            <Link slug="/ifazone-bottoms">
              <span>Bottoms</span>
              <img alt="" src="/assets/images/brands/ifazone/BOTTOM-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 Ifazone-Footwear">
            <Link slug="/ifazone-footwear">
              <span>Footwear</span>
              <img alt="" src="/assets/images/brands/ifazone/SHOES-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item10 Ifazone-Accessories">
            <Link slug="/ifazone-accessories">
              <span>Accessories</span>
              <img
                alt=""
                src="/assets/images/brands/ifazone/ACCESSORIES-1.0.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_ifazone;
