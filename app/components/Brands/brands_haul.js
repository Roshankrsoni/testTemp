/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';

import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_haul = () => {
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
    <section className="container-fluid home specific-brand" id="specific-haul">
      <BreadcrumbComponent
        breadcrumbs={breadcrumbs}
        active_path="Haul Apparel"
      />
      <div className="haul-page-pageWrp">
        <div className="haul-page-item1">
          <img alt="" src="/assets/images/brands/haul/Haul-Slider-1.0.jpg" />
        </div>

        <div className="haul-page-grid-container haul-page-homegrid">
          <div className="haul-page-item2 haul-Baseball-Tees">
            <Link slug="/haulapparel-baseball-tees">
              <img
                alt=""
                src="/assets/images/brands/haul/Haul-Category-Banner-BaseBall-Tees-1.0.jpg"
              />
            </Link>
          </div>

          <div className="haul-page-item3 haul-graphic-Tees">
            <Link slug="/haulapparel-graphic-tees">
              {' '}
              <img
                alt=""
                src="/assets/images/brands/haul/Haul-Category-Banner-Graphic-Tees-1.0.jpg"
              />
            </Link>
          </div>
        </div>

        <div className="haul-page-grid-container2 haul-page-homegrid">
          <div className="haul-page-item4 haul-black-Tees">
            <Link slug="/haulapparel-black-tees">
              <img
                alt=""
                src="/assets/images/brands/haul/Haul-Category-Banner-Black-Plain-Tees-1.0.jpg"
              />
            </Link>
          </div>

          <div className="haul-page-item5	haul-white-Tees">
            <Link slug="/haulapparel-white-tees">
              {' '}
              <img
                alt=""
                src="/assets/images/brands/haul/Haul-Category-Banner-White-Plain-Tees-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="haul-page-grid-container3 haul-page-homegrid">
          <div className="haul-page-item6 haul-snapbacks">
            <Link slug="/haulapparel-snapback-caps">
              <img
                alt=""
                src="/assets/images/brands/haul/Haul-Category-Snapbacks-Caps-1.0.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_haul;
