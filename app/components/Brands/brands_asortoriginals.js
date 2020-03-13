/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import './BrandStyles/asort-originals.less';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_asortoriginals = () => {
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
      id="specific-asortoriginals"
    >
      <BreadcrumbComponent
        breadcrumbs={breadcrumbs}
        active_path="Asort Originals"
      />
      <div className="asort-originals-pageWrp">
        <div className="item1">
          <img
            alt=""
            src="/assets/images/brands/asortoriginals/asort-originals-brand-page-slider-1.0.jpg"
          />
        </div>
        <div className="grid-container" id="homegrid">
          <div className="item2 originals-graphic">
            <Link slug="/asortoriginals-graphic-tshirts">
              {' '}
              <img
                alt=""
                src="/assets/images/brands/asortoriginals/graphic-tshirts-asortoriginals-category-banner-1.0.jpg"
              />
            </Link>
          </div>
          <div className="item3 originals-men">
            <Link slug="/asortoriginals-men-tshirts">
              {' '}
              <img
                alt=""
                src="/assets/images/brands/asortoriginals/men-tshirts-asortoriginals-category-banner-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="grid-container-2" id="homegrid">
          <div className="item4 originals-street">
            <Link slug="/asortoriginals-streetstyle">
              {' '}
              <img
                alt=""
                src="/assets/images/brands/asortoriginals/street-style-asortoriginals-category-banner-1.0.jpg"
              />
            </Link>
          </div>
          <div className="item5 originals-women">
            <Link slug="/asortoriginals-women-tshirts">
              <img
                alt=""
                src="/assets/images/brands/asortoriginals/women-tshirts-asortoriginals-category-banner-1.0.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_asortoriginals;
