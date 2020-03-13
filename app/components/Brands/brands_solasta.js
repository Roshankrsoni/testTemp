/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_solasta = () => {
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
      id="specific-solasta"
    >
      <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="Solasta" />
      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <img
            alt=""
            src="/assets/images/brands/solasta/Solasta_Slider-1.0.jpg"
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 Solasta-Women">
            <Link slug="/solasta-women">
              <span>Women</span>
              <img alt="" src="/assets/images/brands/solasta/WOMEN-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item3 Solasta-Men">
            <Link slug="/solasta-men">
              <span>Men</span>{' '}
              <img alt="" src="/assets/images/brands/solasta/MEN-1.0.jpg" />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="Solasta-Formals">
            <Link slug="/solasta-shoes-formal">
              <span>FORMAL SHOES</span>
              <img
                alt=""
                src="/assets/images/brands/solasta/FORMAL_SHOES-1.0.jpg"
              />
            </Link>
          </div>
          <div>
            <Link
              slug="/solasta-espadrilles"
              className="brand-page-top-grid Solasta-Espadrilles"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/solasta/ESPADRILLES-1.0.jpg')",
              }}
            >
              <span>Espadrilles</span>
            </Link>
            <Link
              slug="/solasta-flats"
              className="brand-page-bottom-grid Solasta-Flats"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/solasta/FLATS-1.0.jpg')",
              }}
            >
              <span>Flats</span>
            </Link>
          </div>
          <div className="Solasta-Sneakers">
            <Link slug="/solasta-sneaker">
              {' '}
              <span>Sneaker</span>
              <img
                alt=""
                src="/assets/images/brands/solasta/SNEAKERS-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 Solasta-Belts">
            <Link slug="/solasta-shoes-belts">
              <span>Belts</span>
              <img alt="" src="/assets/images/brands/solasta/BELTS-1.0.jpg" />
            </Link>
          </div>
          <div className="brand-page-item10 Solasta-Socks">
            <Link slug="/solasta-shoes-socks">
              <span>Socks</span>
              <img alt="" src="/assets/images/brands/solasta/SOCKS-1.0.jpg" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_solasta;
