import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { Panel } = Collapse;

// eslint-disable-next-line react/prefer-stateless-function
export class index extends PureComponent {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="about faq">
        <Helmet>
          <title>Frequently asked questions</title>
          <meta
            name="description"
            content="We are always happy to welcome you as a Guest Customer,it is not necessary to register with us to shop on www.asort.com."
          />
        </Helmet>
        <div className="banner">
          <h2 className="banner-text">We are DS.Asort</h2>
        </div>
        <div className="title">
          <h3>frequently asked question</h3>
        </div>
        <div className="question container-fluid container-fluid-nopad">
          <div className="order-ques ui vertical accordion">
            <div className="head">
              <h3>Ranks</h3>
            </div>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="How many ranks are DS.Asort Distributors divided into?"
                key="1"
                className="site-collapse-custom-panel"
              >
                <p>We have seven ranks for our distributors- Fashion Consultant, Franchisee, Baron, Count, Marquis, Duke, and Archduke. Anyone who first signs up to DS.Asort becomes a Fashion Consultant.
                </p>
              </Panel>
              <Panel
                header="How does the rank system work and how will it affect discounts and perks?"
                key="2"
                className="site-collapse-custom-panel"
              >
                <p>
                  As you advance through the ranks you are eligible for higher
                  discounts and perks. To get the full details of how the rank
                  system works and how you can access total discounts of upto
                  65% on our product prices you can check out our Compensation
                  Plan page
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Registration</h3>
            </div>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="What are the requirements to become a DS.Asort Fashion Consultant?"
                key="1"
                className="site-collapse-custom-panel"
              >
                <p>Everyone who is over 18 years of age and is an Indian citizen is eligible to become a DS.Asort fashion consultant. You will need to be invited by an existing DS.Asort distributor in order to sign up.
                  <br />
                  <br />You will also need an Aadhar card, PAN card, and valid bank details to sign up as a DS.Asort fashion consultant. Please visit sign up section for more details.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
                header="What does it mean to be a DS.Asort Fashion Consultant?"
                key="2"
                className="site-collapse-custom-panel"
              >
                <p>
                  Once you become a DS.Asort fashion consultant, you become a
                  part of a vibrant community. Some of the advantages of a
                  DS.Asort membership are:
                  <br />
                  - You can purchase DS.Asort products at discounted prices
                  <br />
                  - You can take part in our loyalty and reward programme for
                  distributors
                  <br />- You would be eligible to take advantage of unique
                  promotions and offers
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
                header="Do I have to pay to become a DS.Asort Fashion Consultant?"
                key="3"
                className="site-collapse-custom-panel"
              >
                <p>
                  You can sign up as a DS.Asort Fashion Consultant for FREE.
                  Subject to certain terms and conditions
                  <br />
                  <br /> DS.Asort also does not host or charge any amount for any kind of training. As a Fashion Consultant, you only have to pay for the DS.Asort products that you order on our website.
                </p>
              </Panel>
              <Panel
                header="How do I register myself as a DS.Asort Fashion Consultant?"
                key="4"
                className="site-collapse-custom-panel" >
                <p>Registration with DS.Asort is usually by invitation only. In order to become a DS.Asort Fashion consultant you must be invited to join by an existing DS.Asort Fashion Consultant.
                  <br />
                  <br />You can't sign up as a DS.Asort Fashion Consultant by visiting our website or our offices.
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="order-ques ui vertical accordion">
            <div className="head">
              <h3>Ordering</h3>
            </div>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="How do I place an order?"
                key="1"
                className="site-collapse-custom-panel" >
                <p>There are two ways in which you can order DS.Asort products:
                  <br />
                  <br /> 1. Place an order on the website
                  <br /> Log in to your account at ds.asort.com, browse our site, and place your order online. Only DS.Asort distributors are eligible to order online.
                  <br />
                  <br /> 2. Become a Customer
                  <br /> You can place your order through one of our many distributors. They will be able to advise you, show you samples of our products, and answer any questions you may have about our products.
                </p>
                <small>* Terms and Conditions apply</small>
              </Panel>
              <Panel
header="How much time will it take for my order be delivered?"
                key="2"
                className="site-collapse-custom-panel" >
                <p>DS.Asort' works with several logistics partners to deliver nearly all orders within 5 working days. If you are in a remote location your order might be delayed by a couple of more days.
                </p>
              </Panel>
              <Panel
header="Does DS.Asort provide a Money Back Guarantee?"
                key="4"
                className="site-collapse-custom-panel" >
                <p>DS.Asort specializes in trendy and high quality apparel for men and women and creates clothing manufactured to the highest specifications possible.
                  <br />
                  <br /> We believe strongly in our product so much so that we offer a 100% satisfaction guarantee on all the products we sell. If you are not completely satisfied with our product you may return it within 30 days from the date of invoice for a full refund.
                  <br />
                  <br /> The Following conditions apply when returning a product:
                  <br /> - The product must be returned by a DS.Asort distributor to DS.Asort within 30 days from the date of invoice.
                  <br /> - All tags/labels/packaging should be intact before returning an item.
                  <br /> - DS.Asort reserves the right to accept or reject any claim in case the physical product does not match the description of the product sold or if the product does not fall within the timeline during which it can be returned.
                  <br /> - The DS.Asort distributor will either be offered a replacement or be refunded the sum due to his or her registered bank account.
                  <br /> - All handling charges for shipping an item or items must be borne by the sender.
                </p>
              </Panel>
              <Panel
header="Which ordering mode should I use?"
                key="5"
                className="site-collapse-custom-panel" >
                <p>We recommend that you place your order directly online from ds.asort.com after logging in to your distributor account.
                </p>
              </Panel>
              <Panel
header="Where can I find information about DS.Asort products?"
                key="6"
                className="site-collapse-custom-panel" >
                <p>Each product has its own page online on the DS.Asort website where you will find a detailed description of the product.
                  <br />
                  <br /> If you buy from a distributor, you can also contact them to receive further product information and recommendations.
                </p>
              </Panel>
              <Panel
header="What happens If the products I have ordered are out of stock?"
                key="7"
                className="site-collapse-custom-panel" >
                <p>Only products that are available for sale and delivery within the time stipulated are visible on the DS.Asort website.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="Why do I need an Invoice Number in addition to an Order Number?"
                key="8"
                className="site-collapse-custom-panel" >
                <p>For each order you will receive a confirmation with your invoice number. The invoice number will be written clearly on your bill and will be visible on your confirmation screen and will be available in your order history as well.
                  <br />
                  <br /> The invoice number helps us identify you when you contact DS.Asort Customer Care. It also helps in solving potential problems more quickly if you need help.
                  <br />
                  <br /> You invoice number is also needed in case you need to make a complaint or return a product
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Shipping</h3>
            </div>

            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="Shipping Charges"
                key="1"
                className="site-collapse-custom-panel" >
                <p>We strive to deliver products purchased from DS.Asort in excellent condition and in the fastest time possible. Shipping charges are mentioned below:
                  <br /> Rs 50000 and above: Rs 799
                  <br /> From Rs 10000 to Rs 49999: Rs 699
                  <br /> From Rs 4800 to Rs 9999: Rs 190
                  <br /> From Rs 4000 to Rs 4799: Rs 125
                  <br /> Upto Rs 3999 : Rs 99
                  <br />
                  <br /> If the order is cancelled, lost or un-delivered to your preferred location, we will refund the complete order amount in the form of credit points including any shipping charges.
                  <br />
                  <br /> If you cancel part of the order, shipping charges will not be refunded.
                  <br /> If you return an order delivered to you, original shipping charges will not be refunded. However if you self-ship your returns, you will be reimbursed based on DS.Asort.com Returns Policy.
                  <br />
                  <br /> Most in-stock items ship within 24 hours of ordering; however, some orders may take up to 48 hours to process.
                </p>
              </Panel>
              <Panel
                header="Shipping Times"
                key="2"
                className="site-collapse-custom-panel" >
                <p>DOMESTIC
                  <br /> North India: 2-4 working days.
                  <br /> Other Regions: 4-7 working days.
                  <br />
                  <br /> NOTE: We don't Ship international Orders
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Payment</h3>
            </div>
            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="What payment options do I have when buying from DS.Asort?"
                key="1"
                className="site-collapse-custom-panel" >
                <p>You may choose between several payment options on our website during checkout.
                  <br />
                  <br /> I. Credit/ Debit Cards: Payments can be made using a credit or debit card on the DS.Asort website
                  <br />
                  <br /> II. Net Banking: Payments to DS.Asort can also be made using either of the IMPS, UPI, or NEFT modes of payment.
                  <br />
                  <br /> We do not accept cash deposits into our account.<br /><br />
                  <strong>** Please do not handover cash or deposit cash to the account of any distributor **</strong>
                </p>
              </Panel>
              <Panel
header="What advantage do distributors get when they share their PAN card details with DS.Asort ?"
                key="2"
                className="site-collapse-custom-panel" >
                <p>If a distributor shares their PAN card details with DS.Asort, TDS on their performance bonus will be deducted at the rate of 5%.
                  <br />
                  <br /> If distributors don't share their PAN card details with us in the form of a self-attested copy, we will deduct TDS at the rate of 20% as per TDS rules as defined in the Income Tax Act of 1961.
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Claims and returns</h3>
            </div>

            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse"
            >
              <Panel
                header="What is the Guarantee of Excellence?"
                key="1"
                className="site-collapse-custom-panel" >
                <p>Guarantee of Excellence along with its Claims Policy (hereinafter referred to as the “Claims Policy”), aims to keep every DS.Asort distributor satisfied by ensuring fast and timely resolution of all kinds of complaints associated with the products you purchase, against a valid invoice issued by DS.Asort.
                  <br />
                  <br /> The Guarantee of Excellence is our belief that the quality we offer you merits a 100% satisfaction guarantee. If you are unsatisfied with our product you may return it within 30 days from the date of invoice for a full refund.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="I want to cancel the full order but I do not see any option to do so"
                key="2"
                className="site-collapse-custom-panel" >
                <p>You can cancel your order by logging into your distributor account and visiting to the order section. You cannot cancel your order if it has already been dispatched. However, you can raise your claim under our Guarantee of Excellence in case you no longer required the products.
                </p>
              </Panel>
              <Panel
header="By what time should I report any claim?"
                key="3"
                className="site-collapse-custom-panel" >
                <p>Any Refund complaint must be reported within 30 days of invoicing. Refund Claims that are reported after more than thirty days from invoicing will not be entertained.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="How will I get the money back if my claim is accepted?"
                key="4"
                className="site-collapse-custom-panel" >
                <p>We will refund the money to your bank account using the banking details you have shared with us.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="In case of damaged product/wrong product/quality issues what should I do?"
                key="5"
                className="site-collapse-custom-panel" >
                <p>You can register your complaint by clicking on the chat button within 24 to 48 hours from date of delivery of product and create an online ticket. You can also call us at 0124-4576162 and register your complaint online.<br />
                  Once your claim has been filed we will arrange for a reverse
                  pickup (if you send us the damaged product we will adjust you
                  the shipping fees against your next purchase)
                  <br />
                  Any claim pertaining to damage will not be approved unless the
                  Asort warehouse team has received the physical product and
                  conducted a quality control test.
                  <br />
                  You will be kept updated about the progress of your claim
                  through automated emails.
                  <br />
                  Note: Any claim for damaged product/quality issue/wrong
                  product reported after 48 hours from the date of delivery will
                  not be entertained
                </p>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Rewards programme</h3>
            </div>

            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse">
              <Panel
                header="What is the DS.Asort reward programme?"
                key="1"
                className="site-collapse-custom-panel" >
                <p>We offer attractive rewards to our distributors who achieve goals against their set targets. These rewards are a mix of gadgets (smartphones, cameras), cars, bikes, and personalized experiences.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="Where can I find more information about it?"
                key="2"
                className="site-collapse-custom-panel" >
                <p>We keep on updating our rewards programme to keep it fresh and exciting. To find out more details, please click on the DS.Asort rewards page
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
            </Collapse>
          </div>

          <div className="payment-ques ui vertical accordion">
            <div className="head">
              <h3>Code of conduct</h3>
            </div>

            <Collapse
              bordered={false}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="site-collapse-custom-collapse">
              <Panel
                header="What are the rules to be followed by DS.Asort distributors while running their business?"
                key="1"
                className="site-collapse-custom-panel" >
                <p>DS.Asort has strict rules of conduct for its distributors. Some of the highlights<br />
                  <br />- Distributors must abide the guidelines of{' '}
                  <strong>
                    <a
                      href="https://consumeraffairs.nic.in/writereaddata/Direct%20Selling%20Guidelines%20Final%20.pdf"
                      style={{ display: 'inline' }}
                      target="_blank"
                    >
                      Ministry of Consumer Affairs
                    </a>
                  </strong>{' '}
                  in their daily conduct in addition to our{' '}
                  <Link to="/rules-unauthorized">Code of Conduct</Link>.<br />
                  - Distributors cannot sell products over MRP
                  <br />
                  - Distributors can't use the DS.Asort platform to sell
                  products from other brands.
                  <br />
                  - Distributors shall respect the decision of customer and
                  shall not compel them to purchase.
                  <br />
                  - Protect the intellectual property rights of Asort.
                  <br />
                  To find the full details of DS.Asort rules and regulations for
                  distributors please see the{' '}
                  <Link to="/rules-unauthorized">Code of Conduct</Link> page
                </p>
              </Panel>
              <Panel
                header="What happens if distributors don't follow the Code of Conduct?"
                key="2"
                className="site-collapse-custom-panel" >
                <p>If a distributor fails to follow the <Link to="/rules-unauthorized">Code of Conduct</Link>, his/ her distributorship is liable for immediate termination or such other disciplinary actions such as Rank Demotion, Forfeiture of commission, Suspension of distributorship, legal action etc. as may be decided by the Company at its sole discretion on case to case basis.
                </p>
                <small>* Terms and conditions apply</small>
              </Panel>
              <Panel
header="Does DS.Asort provide jobs or salaries to distributors?"
                key="3"
                className="site-collapse-custom-panel" >
                <p>No, DS.Asort doesn't offer any jobs to distribiotors, only business opportunities. In case someone offers jobs in the name of DS.Asort, please inform us at ds.help@asort.com
                </p>
              </Panel>
            </Collapse>


          </div>
        </div>
      </section>
    );
  }
}

export default index;
