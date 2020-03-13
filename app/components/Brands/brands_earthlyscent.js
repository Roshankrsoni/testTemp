/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable camelcase */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import './BrandStyles/asort-originals.less';

import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_earthlyscent = () => {
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
      id="specific-earthlyscent"
    >
      <BreadcrumbComponent
        breadcrumbs={breadcrumbs}
        active_path="Earthy Scent"
      />

      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <img
            alt=""
            src="/assets/images/brands/earthlyscent/EarthyScent_Slider-1.0.jpg"
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 EarthyScent-Women">
            <Link slug="/earthyscent-women">
              <span>Women</span>
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/WOMEN-1.0.jpg"
              />
            </Link>
          </div>
          <div className="brand-page-item3 EarthyScent-Men">
            <Link slug="/earthyscent-men">
              <span>Men</span>{' '}
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/MEN-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="EarthyScent-Kurta">
            <Link slug="/earthyscent-men-kurtas">
              <span>Kurtas</span>
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/KURTA-1.0.jpg"
              />
            </Link>
          </div>
          <div>
            <Link
              slug="/earthyscent-sarees"
              className="brand-page-top-grid EarthyScent-Saree"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/earthlyscent/SAREE-1.0.jpg')",
              }}
            >
              <span>Sarees</span>
            </Link>
            <Link
              slug="/earthyscent-nehru-jacket"
              className="brand-page-bottom-grid EarthyScent-Nehru-Jacket"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/earthlyscent/NEHRU_JACKET-1.0.jpg')",
              }}
            >
              <span>Nehru Jackets</span>
            </Link>
          </div>
          <div className="EarthyScent-Bottoms">
            <Link slug="/earthyscent-bottom">
              <span>Bottom</span>
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/BOTTOM-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 EarthyScent-Footwear">
            <Link slug="/earthyscent-footwear">
              <span>Footwear</span>
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/FOOTWEAR-1.0.jpg"
              />
            </Link>
          </div>
          <div className="brand-page-item10 EarthyScent-Accessories">
            <Link slug="/earthyscent-accessories">
              <span>Accessories</span>
              <img
                alt=""
                src="/assets/images/brands/earthlyscent/ACCESSORIES-1.0.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_earthlyscent;
