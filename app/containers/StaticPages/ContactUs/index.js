import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './contact-us.less';

const titleHead = 'Asort';

// eslint-disable-next-line react/prefer-stateless-function
export class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  // componentDidMount() {
  //   setTimeout(() => {
  //     window.fcWidget.init({
  //       token: '090984e4-b774-4304-86c8-1d7b6efe61f5',
  //       host: 'https://wchat.freshchat.com',
  //       config: {
  //         hidePoweredBy: true,
  //       },
  //     });
  //   }, 10000);
  // }

  render() {
    return (
      <section className="about join cart checkout contact">
        <Helmet>
          <title>Contact Us</title>
          <meta
            name="description"
            content="Below channel may be used to submit any query / feedback / complaint through any of our access channels mentioned below:"
          />
          <script src="https://wchat.freshchat.com/js/widget.js" />
        </Helmet>
        <div id="script_div" />

        <div className="banner">
          <h2 className="banner-text">We are {titleHead}</h2>
        </div>
        <div className="title">
          <h3 style={{ fontWeight: 'bold' }}>
            <span className="numberCircle">1</span> QUERIES / FEEDBACK /
            COMPLAINTS
          </h3>
        </div>
        <div className="container-fluid">
          <div className="contactNew">
            <br />
            <br /> Below channel may be used to submit any query / feedback /
            complaint through any of our access channels mentioned below:
            <div className="contactInfo">
              <span className="orangeCr"> Chat with Us</span>:{' '}
              <a href="#." className="blueCr">
                click here
              </a>{' '}
              <br />
              <span className="orangeCr"> Calling Us:</span> We will be happy to
              attend your calls at{' '}
              <span className="blueCr"> 0124 - 4576162</span> between
              <br />
              9:30 am - 6:30 pm from Monday to Saturday
              <br />
              <span className="orangeCr"> Email Us:</span>{' '}
              <a href="mailto:ds.help@asort.com" className="blueCr">
                care@asort.com
              </a>
            </div>
            <span style={{ fontWeight: 500 }}>
              <span className="orangeCr" style={{ fontWeight: 'bold' }}>
                Deadline:
              </span>{' '}
              Deadline for resolution of complaint is 30 days. However, most of
              the cases are solved within a few days only.
            </span>
            <h3>
              <span className="numberCircle">2</span>GRIEVANCE REDRESSAL
            </h3>
            This support system works only if we are not able to resolve your
            issues within 30 days of submission of your initial complaint and
            the resolution provided in the above Step 1 does not meet your
            expectations. You can approach us as per the following:
            <ul>
              <li>
                <span className="orangeCr"> Customer Care Head:</span>{' '}
                <a href="mailto:head.customercare@asort.com" className="blueCr">
                  head.customercare@asort.com
                </a>{' '}
                with all your details including ticket number, mobile number and
                FCID raised in Level 1 above. One of our representatives will
                call you within 2 working days and help you through your
                complaint.
              </li>
              <li>
                <span className="orangeCr">Escalation:</span> In the rare event
                that your complaint remains unresolved you can email at{' '}
                <a href="mailto:ds.help@asort.com" className="blueCr">
                  ds.help@asort.com
                </a>{' '}
                with all your details, ticket number, FCID and phone number -
                and we shall ensure that your issue is resolved to your
                satisfaction.
              </li>
              <li>
                <span className="orangeCr">Fraud Reporting:</span> Your
                grievance related to fraud instances must be reported to us at{' '}
                <a href="mailto:ds.help@asort.com" className="blueCr">
                  ds.help@asort.com
                </a>{' '}
                for enabling us to investigate the matter and take necessary
                actions.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
