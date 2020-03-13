import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

const brandsName = 'Asort';

// eslint-disable-next-line react/prefer-stateless-function
export class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="about">
        <Helmet>
          <title>About Us</title>
          <meta
            name="description"
            content="Ds.asort is a direct sales company proudly built in India with the aim of building the largest opportunity creating platform in India."
          />
        </Helmet>
        <section>
          <div className="banner">
            <h2 className="banner-text">We are {brandsName}</h2>
          </div>

          <div className="title">
            <h3>about us</h3>
            <p>
              Asort is a fashion e-commerce and lifestyle platform working to
              change the way people shop fashion online We are a brand with
              focus on things beyond just sales & profits. Based on unique blend
              of social networking and referral marketing, we seek to build a
              community of members who can monetarily empower themself even as
              they shop with us. With private labels like A.B.G, Earthy Scent,
              Mr.Huffman, Ifazone, Kuefit & Solasta and many more upcoming
              brands exclusively curated for Asort, we offer a large choice of
              products for everyone
            </p>
          </div>

          <div className="container-fluid brand-detail about-detail">
            <hr />
            <div className="vision">
              <div className="brand-content">
                <h2>our vision</h2>
                <ul>
                  <li>
                    <p>
                      Help people earn rewards while they also enhance their
                      dressing style.
                    </p>
                  </li>
                  <li>
                    {' '}
                    <p>
                      Offer quality products with great designs at affordable
                      prices for everyone.
                    </p>{' '}
                  </li>
                  <li>
                    {' '}
                    <p>
                      Present a remarkable combination of in-house brands as
                      well as carefully curated fashion apparels
                    </p>{' '}
                  </li>
                  <li>
                    {' '}
                    <p>
                      Create a community of happy customers instead of just
                      focussing on marketing and advertising.
                    </p>{' '}
                  </li>
                  <li>
                    {' '}
                    <p>
                      Share all rewards with our customers for sharing our
                      products with their community of friends and family.
                    </p>{' '}
                  </li>
                  <li>
                    {' '}
                    <p>
                      {' '}
                      Building up a unique Reward program that blends monetary
                      gains with fashion experience.
                    </p>{' '}
                  </li>
                </ul>
              </div>
              <div className="brand-image" />
            </div>
            <div className="approch">
              <div className="brand-image" />
              <div className="brand-content">
                <h2>our work approach</h2>
                <p>
                  Social Sellers who use the Asort platform to make purchases
                  get an opportunity to refer products to friends & family, and
                  then also get rewarded for every transaction.
                </p>
                <ul>
                  <li>
                    <p>
                      All products offered here reflect high-quality production,
                      the latest fashion styles and a wide variety of designs at
                      affordable prices.
                    </p>
                  </li>
                  <li>
                    {' '}
                    <p>
                      Shop for your style, then share it with others and build
                      fashion communities in all corners of the world.
                    </p>{' '}
                  </li>
                  <li>
                    {' '}
                    <p>
                      The Asort team has a passion for attaining perfection – be
                      it in the unique fashion trends offered or in the levels
                      of rewards to bring smiles to as many customers as
                      possible.
                    </p>{' '}
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container-fluid values">
            <h3 className="section-header">our values</h3>
            <div className="card">
              <div className="value-card">
                <div className="card-top">
                  <div className="card-icon">
                    <img
                      src="https://cdn.asort.com/resources/images/integrity.png"
                      alt=""
                    />
                  </div>
                  <h3>integrity</h3>
                </div>
                <div className="card-content">
                  <p>
                    {' '}
                    Our integrity in our work methodology has helped us create a
                    strong system where growth & prosperity of each member of
                    the community is valued more than anything else.
                  </p>
                </div>
              </div>
              <div className="value-card">
                <div className="card-top">
                  <div className="card-icon">
                    <img
                      src="https://cdn.asort.com/resources/images/namaste.png"
                      alt=""
                    />
                  </div>
                  <h3>humility</h3>
                </div>
                <div className="card-content">
                  <p>
                    The humility with which each team member works here leads to
                    a commitment to focus on the community as a whole.
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="value-card">
                <div className="card-top">
                  <div className="card-icon">
                    <img
                      src="https://cdn.asort.com/resources/images/happy.png"
                      alt=""
                    />
                  </div>
                  <h3>customer happiness</h3>
                </div>
                <div className="card-content">
                  <p>
                    {' '}
                    We value customer happiness the most and have worked towards
                    creating systems where each customer stands to gain in some
                    manner with every sale that is made either directly by him
                    or by anybody in his community.
                  </p>
                </div>
              </div>
              <div className="value-card">
                <div className="card-top">
                  <div className="card-icon">
                    <img
                      src="https://cdn.asort.com/resources/images/animal.png"
                      alt=""
                    />
                  </div>
                  <h3>care for animals</h3>
                </div>
                <div className="card-content">
                  <p>
                    We neither sell nor encourage the marketing of any animal
                    products{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default index;
