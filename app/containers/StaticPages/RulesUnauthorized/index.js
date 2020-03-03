import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

let title_head = 'Asort';

export class index extends Component {
  render() {
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
      <h2 className="banner-text">We are {title_head}</h2>
    </div>
    <div className="title">
      <h3>Unauthorized Distributors and False Information</h3>
    </div>
    <div className="question container-fluid">
      <div className="payment-ques ui vertical accordion" >
        <div className="item">
          <input type="checkbox" name="fa1" id="fa1" />
          <label className="title" htmlFor="fa1">All Entities Must Refrain from the Unauthorized Selling of DS.Asort Products</label>
          <div className="content">
            <p>It is the value and policy of DS.Asort to sell its products only through authorized channels. Authorized Social Sellers can only sell apparel created by DS.Asort. Products created by DS.Asort cannot be sold on any other websites or in retail shops. The opportunity that is presented to distributors of DS.Asort products will diminish immeasurably if DS.Asort products are sold through unauthorized channels. DS.Asort values stand opposed to sales through unauthorized channels and DS.Asort does not vouch for the authenticity of products purchased through such channels.
                </p>
          </div>
        </div>
        <div className="item">
          <input type="checkbox" name="fa2" id="fa2" />
          <label className="title" htmlFor="fa2">False Information & Job Promises </label>
          <div className="content">
            <p>DS.Asort is not providing any jobs and does not have any vacancies. It has come to our attention that certain individuals are promising employment with DS.Asort by advertising on social media sites, newspapers, classified listing, and job sites. DS.Asort does not recruit using any of these platforms. DS.Asort is a direct sales company that deals in fashion and lifestyle products. Individuals who wish to partner with DS.Asort can contact their nearest and most trusted social seller or affiliates. If you require further information please contact DS.Asort customer care at info@asort.com
                </p>
          </div>
        </div>
        <div className="item">
          <label className="title">To know more about our distributor Code of Conduct. <a href="http://ds.asort.com/blogs/code-ethics/" target="_blank">Click here</a></label>
        </div>
        <div className="item">
          <label className="title">Read the DS.Asort Distributors Terms and Conditions. <a href="http://ds.asort.com/blogs/terms-conditions/" target="_blank">click here</a></label>
        </div>
      </div>
    </div>
  </section>
    );
  }
}

export default index;
