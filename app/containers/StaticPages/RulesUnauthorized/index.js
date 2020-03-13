import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

const titleHead = 'Asort';
// eslint-disable-next-line react/prefer-stateless-function
export class index extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const extraUi = (
      <a href="http://ds.asort.com/blogs/code-ethics/" target="_blank">
        Click here
      </a>
    );
    const extraUi2 = (
      <a href="http://ds.asort.com/blogs/terms-conditions/" target="_blank">
        click here
      </a>
    );

    return (
      <section className="about faq">
        <Helmet>
          <title>Rules Anauthorized</title>
          <meta
            name="description"
            content="Unauthorized distributors and false information"
          />
        </Helmet>
        <div className="banner">
          <h2 className="banner-text">We are {titleHead}</h2>
        </div>
        <div className="title">
          <h3>Unauthorized Distributors and False Information</h3>
        </div>
        <div className="question container-fluid">
          <div className="payment-ques ui vertical accordion">
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="All Entities Must Refrain from the Unauthorized Selling of DS.Asort Products"
                key="1"
                className="site-collapse-custom-panel"
              >
                <p>
                  It is the value and policy of DS.Asort to sell its products
                  only through authorized channels. Authorized Social Sellers
                  can only sell apparel created by DS.Asort. Products created by
                  DS.Asort cannot be sold on any other websites or in retail
                  shops. The opportunity that is presented to distributors of
                  DS.Asort products will diminish immeasurably if DS.Asort
                  products are sold through unauthorized channels. DS.Asort
                  values stand opposed to sales through unauthorized channels
                  and DS.Asort does not vouch for the authenticity of products
                  purchased through such channels.
                </p>
              </Panel>
              <Panel
                header="False Information & Job Promises "
                key="2"
                className="site-collapse-custom-panel"
              >
                <p>
                  DS.Asort is not providing any jobs and does not have any
                  vacancies. It has come to our attention that certain
                  individuals are promising employment with DS.Asort by
                  advertising on social media sites, newspapers, classified
                  listing, and job sites. DS.Asort does not recruit using any of
                  these platforms. DS.Asort is a direct sales company that deals
                  in fashion and lifestyle products. Individuals who wish to
                  partner with DS.Asort can contact their nearest and most
                  trusted social seller or affiliates. If you require further
                  information please contact DS.Asort customer care at
                  info@asort.com
                </p>
              </Panel>
              <Panel
                header="To know more about our distributor Code of Conduct."
                key="3"
                extra={extraUi}
                className="site-collapse-custom-panel"
              />
              <Panel
                header="Read the DS.Asort Distributors Terms and Conditions."
                key="4"
                className="site-collapse-custom-panel"
                extra={extraUi2}
              />
            </Collapse>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
