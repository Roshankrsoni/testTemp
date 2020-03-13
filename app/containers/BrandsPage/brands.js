/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from '../../components/common/link';
// import formatImgSrcSet from '/imports/plugins/custom/brand-pages/client/lib/formatImgSrcSet';
// import { Meteor } from 'meteor/meteor';
import './brand-page.less';
import BreadcrumbComponent from '../../components/BreadcrumbComponents/breadcrumbComponents';

const breadcrumbs = [];

const ourBrands = () => (
  <section className="brand-detail brand">
    <BreadcrumbComponent breadcrumbs={breadcrumbs} active_path="Brands" />
    <div className="banner">
      <div className="title">
        <h3>our brands</h3>
      </div>
    </div>
    <div className="container-fluid brand-detail ">
      <Link slug="/brands/ABG">
        <div className="brand1">
          <div className="brand-image">
            <picture>
              <img
                // srcSet={"brands/details/asort_ABG.jpg"
                src="/assets/images/brands/details/asort_ABG.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/ABG.png" alt="" />
            </center>
            <p>
              A brand deeply rooted in art with a motive to rebuild a new
              culture for Indian youth, ABG truly stands for its name, ‘Another
              Bad Generation’. An iconic Indian street style wear that is not
              gender specific and beyond good or bad! Solely for the Indian
              youth that is rebellious yet ready to take the responsibility for
              change. The brand lives and dies for making street wear a
              mainstream in India. ABG is a brand Indian youth can relate to and
              feel comfortable in! .
            </p>
          </div>
        </div>
      </Link>
      <Link slug="/brands/EarthyScent">
        <div className="brand2">
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/EarthyScent.png" alt="" />
            </center>
            <p>
              The name speaks for its self; Earthy Scent takes ethnic fashion
              loving people a step closer to nature. The brand is known for
              promoting Indian crafts & textiles and transforming them into
              silhouettes and styles acceptable to the modern Indian men &
              women. Earthy Scent has modernized the impression of Indian ethnic
              wear and has a contemporary look and feel with an extraordinary
              cluster of rustic colors and appealing Indian handloom fabrics to
              choose from.
            </p>
          </div>
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Earthyscent.jpg"}
                src="/assets/images/brands/details/asort_Earthyscent.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>
      </Link>
      <Link slug="/brands/Mrhuffman">
        <div className="brand3">
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Huffman.jpg"}
                src="/assets/images/brands/details/asort_Huffman.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/Huffman.png" alt="" />
            </center>
            <p>
              A classic man powerhouse with sexy, smooth yet truly masculine
              clothing range! Mr. Huffman is a premium menswear brand known for
              its meticulously and elegantly crafted apparel to add an extra
              dimension to the men’s closet. Designed with the finest choices of
              textures to offer a comfortable and fresh feel, the brand is known
              for not compromising in terms of fabric quality and brief
              detailing. The elite selection is for the men with substances, so
              keep up with the times and overhaul your wardrobe with shrewd and
              in-vogue pieces of clothing.
            </p>
          </div>
        </div>
      </Link>
      <Link slug="/brands/Ifazone">
        <div className="brand4">
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/Ifazone.png" alt="" />
            </center>
            <p>
              Gone are the days when basic wear used to be predictable with old
              denims, loose tees, poorly-fitted trousers and boring shoes.
              Keeping it basic yet in style is what classy people dependably
              look up for. Ifazone is the brand that provides a clean range of
              men and women clothing by playing with the finest fabrics &
              textures. The extra-friendly user interface features the most
              sophisticated edition of soothing colors, affordability and
              quality garment that ensures greatest solace and sturdiness with
              an ultimate objective of enhancing the personality of the wearer.
            </p>
          </div>
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Ifazone.jpg"}
                src="/assets/images/brands/details/asort_Ifazone.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>
      </Link>
      <Link slug="/brands/Kuefit">
        <div className="brand5">
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Kuefit.jpg"}
                src="/assets/images/brands/details/asort_Kuefit.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/Kuefit.png" alt="" />
            </center>
            <p>
              Make your best better with the exclusive sportswear collection by
              Kuefit. The brand is known for adding a dash of sporty spirit and
              athletic enchant clothing range alongside the maximum comfort.
              Kuefit covers all your athletics choices shrouded in supreme style
              with the wide array of men and women sportswear. With finest of
              textures and styles, the brand is best for high measure of sweat
              assimilation and provides the wearer a fresh feel. Find your own
              fitness with Kuefit and get set to perform in style!
            </p>
          </div>
        </div>
      </Link>
      <Link slug="/brands/solasta-shoes">
        <div className="brand6">
          <div className="brand-content  brand-logo">
            <center>
              <img src="/assets/images/brands/details/Solasta.png" alt="" />
            </center>
            <p>
              The right selection of footwear defines the personality of the
              wearer. Keeping that in mind, Solasta is here for spoiling you
              with the best quality and wide exhibit of formal shoes, casual
              shoes, canvas shoes, heels, flats, sports shoes and many more in
              most extreme style. From men’s formal shoes that explain its
              timeless appeal to women’s classic high heels that flaunts the
              strong, powerful yet feminine look, the shoe brand has so much to
              offer. Solasta is the brand that oozes solace, glamour and style.
            </p>
          </div>
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Solasta.jpg"}
                src="/assets/images/brands/details/asort_Solasta.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>
      </Link>
      {/* <Link slug="/brands/haulapparel">
        <div className="brand7">
          <div className="brand-image">
            <picture>
              <img
                srcSet={formatImgSrcSet("brands/details/asort_Haul.jpg"}
        '/assets/images/brands/details/asort_Haul-1.0.jpg"                alt=""
              />
            </picture>
          </div>
          <div className="brand-content  brand-logo">
            <center>
              <img
          '/assets/images/brands/details/Haul-1.0.png`
                alt=""
              />
            </center>
            <p>Haul Apparel is a life style streetwear brand. We promote the style that arises from
              various emerging subcultures that are beginning to have a big influence on our growing society.
              Style is becoming a necessity for the youth and at Haul, we have brought excitement to
              the Indian Apparel Market with our creative designs and styles representing both Indian
              & Western Culture.</p>
          </div>
        </div>
      </Link> */}
      <Link slug="/brands/asortoriginals">
        <div className="brand7">
          <div className="brand-content  brand-logo">
            <center>
              <img
                src="/assets/images/brands/details/Asort-Originals-Logo-1.0.png"
                alt=""
              />
            </center>
            <p>
              Asort Originals is an emerging brand with a free-spirited vibe,
              aiming to strike a note with quirky next generation. This brand
              has quirky take on the mindset of today's individual, with its
              relaxed style clothing in various color hues at very affordable
              prices. We have exciting styles in our basket with a hint of
              modernism and truly reflecting the modern mindset.
            </p>
          </div>
          <div className="brand-image">
            <picture>
              <img
                src="/assets/images/brands/details/AsortOriginals-1.0.jpg"
                alt=""
              />
            </picture>
          </div>
        </div>
      </Link>
      <Link slug="/brands/amiiga">
        <div className="brand8">
          <div className="brand-image">
            <picture>
              <img
                // srcSet={formatImgSrcSet("brands/details/asort_Haul.jpg'}
                src="/assets/images/brands/details/Amiiga-Brand-Image-1.0.jpg"
                alt=""
              />
            </picture>
          </div>
          <div className="brand-content  brand-logo">
            <center>
              <img
                src="/assets/images/brands/details/AMIIGA-LOGO-1.0.png"
                alt=""
              />
            </center>
            <p>
              Amiiga is a friend...you can hold on to your worse times and
              better. She listens to your giggles and to your silence. She has a
              solution to your every dilemma and teaches you the value of being
              you. She is a soulmate to your persona....The missing puzzle to
              your enigma... She is Amiiga.
            </p>
          </div>
        </div>
      </Link>
    </div>

    <div className="ui product">
      <div className="quality" />
      <div className="delivery" />
    </div>
  </section>
);

export default ourBrands;
