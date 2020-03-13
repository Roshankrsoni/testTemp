/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../common/link';
import CUSTOMDOM from '../common/customdom';
import BreadcrumbComponent from '../BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [{ name: 'Brand', path: '/brands' }];

const brands_huffman = () => {
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
      id="specific-huffman"
    >
      <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="Mr.Huffman" />
      <div className="brand-page-pageWrp">
        <div className="brand-page-item1">
          <img
            alt=""
            src="/assets/images/brands/mr_huffman/Huffman_Slider-1.0.jpg"
          />
        </div>
        <div className="brand-page-grid-container brand-page-homegrid">
          <div className="brand-page-item2 Huffman-resort">
            <Link slug="/mrhuffman-resort-wear">
              {' '}
              <span>Resort Wear </span>
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/RESORT-1.0.jpg"
              />
            </Link>
          </div>
          <div className="brand-page-item3 Huffman-Formal">
            <Link slug="/mrhuffman-formal-wear">
              <span>Formal Wear</span>{' '}
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/FORMAL-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container2 brand-page-homegrid">
          <div className="Huffman-Shirts">
            <Link slug="/mrhuffman-shirts">
              <span>Shirts</span>
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/SHIRTS-1.0.jpg"
              />
            </Link>
          </div>
          <div>
            <Link
              slug="/mrhuffman-polos"
              className="brand-page-top-grid Huffman-Polos"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/mr_huffman/POLOS-1.0.jpg')",
              }}
            >
              <span>Polos</span>
            </Link>
            <Link
              slug="/mrhuffman-blazers"
              className="brand-page-bottom-grid Huffman-Blazers"
              style={{
                backgroundImage:
                  "url('/assets/images/brands/mr_huffman/BLAZER-1.0.jpg')",
              }}
            >
              <span>Blazers</span>
            </Link>
          </div>
          <div className="Huffman-Bottoms">
            <Link slug="/mrhuffman-bottoms">
              <span>Bottoms</span>
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/BOTTOM-1.0.jpg"
              />
            </Link>
          </div>
        </div>
        <div className="brand-page-grid-container3 brand-page-homegrid">
          <div className="brand-page-item9 Huffman-Shoes">
            <Link slug="/mrhuffman-footwear">
              <span>Shoes</span>
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/SHOES-1.0.jpg"
              />
            </Link>
          </div>
          <div className="brand-page-item10 Huffman-Accessories">
            <Link slug="/mrhuffman-accessories">
              <span>Accessories</span>
              <img
                alt=""
                src="/assets/images/brands/mr_huffman/ACCESSORIES-1.0.jpg"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default brands_huffman;
