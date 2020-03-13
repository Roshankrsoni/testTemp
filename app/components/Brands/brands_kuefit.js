/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_kuefit = () => {
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
      id="specific-kuefit"
    >
      <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="Kuefit" />
      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <img
            alt=""
            src="/assets/images/brands/kuefit/Kuefit_Slider-1.2.jpg"
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 Kuefit-Women">
            <Link slug="/kuefit-women">
              <span>Women</span>
              <img alt="" src="/assets/images/brands/kuefit/WOMEN-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item3 Kuefit-Men">
            <Link slug="/kuefit-men">
              <span>Men</span>{' '}
              <img alt="" src="/assets/images/brands/kuefit/MEN-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="Kuefit-Tees">
            <Link slug="/kuefit-tshirts">
              <span>Tee</span>
              <img alt="" src="/assets/images/brands/kuefit/TEE-1.0.jpg" />
            </Link>
          </div>
          <div>
            <Link
              slug="/kuefit-sports-bra"
              className="brand-page-top-grid Kuefit-Bra"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/kuefit/SPORTS_BRA-1.0.jpg')",
              }}
            >
              <span>Sports Bra</span>
            </Link>
            <Link
              slug="/kuefit-yoga-pants"
              className="brand-page-bottom-grid Kuefit-Yoga-Pants"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/kuefit/YOGA_PANTS-1.0.jpg')",
              }}
            >
              <span>Yoga Pants</span>
            </Link>
          </div>
          <div className="Kuefit-Bottoms">
            <Link slug="/kuefit-bottoms">
              {' '}
              <span>Bottoms</span>
              <img alt="" src="/assets/images/brands/kuefit/BOTTOMS-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 Kuefit-Shoes">
            <Link slug="/kuefit-sports-shoes">
              <span>Shoes</span>
              <img alt="" src="/assets/images/brands/kuefit/SHOES-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item10 Kuefit-Bags">
            <Link slug="/kuefit-bags">
              <span>Bags</span>
              <img alt="" src="/assets/images/brands/kuefit/BAGS-1.0.jpg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_kuefit;
