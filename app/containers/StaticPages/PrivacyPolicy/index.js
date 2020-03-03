import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

let title_head = 'Asort';

export class index extends Component {
  render() {
    return ( 
        <section className="about team privacy">
           <Helmet>
          <title>Privacy Policy & Rules</title>
          <meta
            name="description"
            content="In line with Digital India initiative, there are no cash transactions and all transactions will be made digitally."
          />
        </Helmet>
        <div className="banner">
            <h2 className="banner-text">We are {title_head}</h2>
        </div>
        <div className="title">
            <h3>Privacy policy and rules of conduct</h3>
        </div>

        <div className="container-fluid ">

            <div className="topic">
                <h2>Business Policies</h2>
                <img src="https://cdn.asort.com/resources/images/policy.png" alt="" />
                <p>
                    In line with Digital India initiative, there are no cash transactions and all transactions will be
                    made digitally.
       </p>
                <p>
                    We will require to collect information like your PAN, Aadhar Card number, Photograph and Bank
                    Account details for KYC and for payout purposes. Be assured, your data will be safe with us and shall
                    not be used for any other purpose.
        </p>
                <p>
                    We strictly adhere to the norms by RBI, and therefore all the payments and refunds are done
                    through  NEFT, RTGS, and other electronic transaction methods.
        </p>
                <p>
                    As per the Income Tax Act, we will deduct TDS and share a ​consolidated​ ​TDS​ ​certificate​ ​towards
                    tax deducted​ ​at​ ​source​ ​for​ ​the​ ​period​ ​or​ ​year​ ​ending​ ​on​ ​31​st​​ ​March,​ ​every​ ​year with our members.
        </p>
                <p>
                    In case we don’t have a valid PAN Card, we will have to deduct tax at a higher rate, as applicable
                    in Income Tax Act, from time to time.
        </p>
                <p>
                    To keep our business smooth and process all the payments timely we need you to share with us
                    any changes in your Bank Account details at the earliest.
        </p>
                <p>
                    We assure you prompt service in the trading discounts and performance commission unless
                    an unexpected situation beyond the control of the company.
       </p>
                <p>
                    The discounts provided are the sole discretion of {title_head}, and we reserve the rights to change them at
                    any time.
        </p>
                <p>
                    We also reserve our right to amend, modify, launch, re-launch or discontinue any existing or new plans.
        </p>




            </div>
            <div className="topic">
                <h2>Privacy Policies</h2>
                <img src="https://cdn.asort.com/resources/images/privacy.png" alt="" />
                <h3>
                    At Your Private information is as valuable to us as it to you.
        </h3>
                <p>
                    We don’t share your personal information with anyone except for those in our business, like
                    our corporate entities and that too with your consent only.
        </p>
                <p>
                    We store and process all your information including your precious Financial information as prescribed
                    by the Information and Technology Act, 2000 and the rules underlying in it.
        </p>
                <p>
                    If need be, details are provided only if necessary to respond to subpoenas, court orders and other
                    legal matters.
        </p>
                <p>
                    Disclosure of your Personal Information from our end will take place only to law enforcement
                    offices,  third party rights owners, or others if necessary to implement our Terms or Privacy Policy.
        </p>
                <p>
                    If there is a violation of a third party’s interests, we would have to intervene to protect the
                    rights,  property or personal safety of our users or the general public.
        </p>
                <h3>
                    Our sole purpose is to provide you with a smooth, hassle-free and safe online experience, and for that, we process your Personal information very promptly.
        </h3>




            </div>
            <div className="topic">
                <h2>Privacy and Cookie Policy includes</h2>
                <p>
                    Correspondence Information: These are a set of some basic information which you share when
                    you become a part of our online family.
      </p>
                <p>
                    Personal Information: Just the mandatory ones like your Name, Gender, Images, Contact/Address,
                    Phone number, email id, Nationality and Content.
      </p>
                <p>
                    Some Financial details if you are opting for online payment methods, Like Credit/Debit card
                    details including Card Number, Expiry Information, Details for Net Banking and Wallet services.
      </p>
                <p>
                    Some Identity related Information: like AADHAR and PAN as per the prevailing government
                    prescribed norm.
      </p>
                <p>
                    We ensure the whole information is encrypted as per the guidelines specified by Payments
                    Cards Industry Data Security Standard (PCI DSS).
      </p>
                <p>
                    Nobody, not even the company employees, can access your personal information without authorization.
      </p>
                <p>
                    We are bound the by legal obligations to make sure that only the people above the age of 18 years
                    access  the server, under the Indian Contract Act 1872.
      </p>
                <p>
                    Those who are “Incompetent to Contract” by the Indian Contract Act, 1872 that include minors,
                    undischarged insolvents etc. are not eligible to use the platform.
      </p>
                <p>
                    If you are a Minor, you are advised not to register as a User on the platform and make any transactions.
                    If you need to do so, make sure you do it under the guidance of your legal guardian or parents.
      </p>
                <p>
                    We will maintain a record of your account history including Billing details and payment history.
      </p>
                <p>
                    We also preserve your transaction IDs and e-commerce activities (Other than Banking Details) on
                    our secure and encrypted servers.
      </p>
                <p>
                    In case you forget your password or user IDs we got your back! We have all your usernames, passwords,
                    email ids contact and account details with us including third-party accounts secured with us.
      </p>
                <p>
                    Any content that is provocative or threatening is strictly banned on the {title_head} platforms.
      </p>

            </div>

        </div>
    </section>
    );
  }
}

export default index;
