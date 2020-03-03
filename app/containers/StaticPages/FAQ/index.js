import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

let title_head = 'Asort';

export class index extends Component {
  render() {
    return ( 
        <section className="about faq"> 
        <Helmet>
          <title>frequently asked questions</title>
          <meta
            name="description"
            content="We are always happy to welcome you as a Guest Customer,it is not necessary to register with us to shop on www.asort.com."
          />
        </Helmet>
        <div className="banner">
            <h2 className="banner-text">We are Asort</h2>
        </div>
        <div className="title">
            <h3>frequently asked questions</h3>
        </div>
        <div className="question container-fluid container-fluid-nopad">

            {/* Registration */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>Registration</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="Reg_1" id="Reg_1" />
                    <label className="title" htmlFor="Reg_1">Do I need to register to shop?</label>
                    <div className="content">
                        <p>We are always happy to welcome you as a Guest Customer,it is not necessary to register with us to shop on www.asort.com. However, registration will only enhance your shopping experience with Asort where you will get benefits of Asort Credit Points and get regular updates on great deals and discounts.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="Reg_2" id="Reg_2" />
                    <label className="title" htmlFor="Reg_2">What do I do if I have forgotten my password or my password does not work?</label>
                    <div className="content">
                        <p>If you have forgotten your password, click on the “forget password” button and we will send you the reset link on your registered email to reset the password.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="Reg_3" id="Reg_3" />
                    <label className="title" htmlFor="Reg_3">Do I need to enter my address every time I order?</label>
                    <div className="content">
                        <p>No! You don't need to enter the address every time you place an order, and we don’t forget our customers! An address once used will be saved in My Account -> Saved Addresses link. You can go to your saved addresses and modify your default Shipping (delivery) address and Billing address. You can also add more addresses using 'Add a new address' button. You can select any of the addresses instead of typing the shipping address while you are ordering.</p>
                        <small>* Terms and Conditions apply</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="Reg_4" id="Reg_4" />
                    <label className="title" htmlFor="Reg_4">By registering, will I automatically receive marketing emails from you?</label>
                    <div className="content">
                        <p>No registering does not automatically subscribe you to our newsletter. If you don't wish to receive our newsletter, and yet want to avail the benefits of being a registered user, just click on the unsubscribe link in the newsletter.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="Reg_5" id="Reg_5" />
                    <label className="title" htmlFor="Reg_5">Will I get notifications on new arrivals, deals and discounts?</label>
                    <div className="content">
                        <p>You’ll be notified of all the offers via emails sent to your registered email id.</p>
                    </div>
                </div>
            </div>

            {/* PLACING AN ORDER, TRACKING & DELIVERY */}
            <div className="order-ques ui vertical accordion">
                <div className="head">
                    <h3>PLACING AN ORDER, TRACKING & DELIVERY</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord1" id="ord1" />
                    <label className="title" htmlFor="ord1">How do I place an order?</label>
                    <div className="content">
                        <b>By Signing-in</b>
                        <ol type="a">
                            <li>Sign in to your Asort account and go to "My Store" and select the products you wish to buy and then add it to your "Cart".</li>
                            <li>After checking out, another page would appear where you have to fill your preferred address to receive your order. If the area pin code is serviceable you will get an option to select a shipping method, on the other hand if it is not serviceable you will have to provide another address with a serviceable pin code and then click on “Deliver Here”.</li>
                            <li>Click on "Proceed to Pay" where you will add any Asort Rewards, Promo codes, Asort Credits and pay the balance payable amount using Payment Gateway.</li>
                            <li>Your order is placed! You will receive a message and email confirmation for the same.</li>
                        </ol>
                        <b>Via URL</b>
                        <ol type="a">
                            <li>The same process needs to be followed as mentioned above by signing-up after clicking on the URL shared with you as a Guest.
                            How to get the URL?
                                <ul>
                                    <li>Registered customer sharing his URL with a new customer.</li>
                                    <li>You can share your store URL as well as individual product URL with any new customer.</li>
                                </ul>
                            </li>
                        </ol>

                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord2" id="ord2" />
                    <label className="title" htmlFor="ord2">How do I check the status of my order?</label>
                    <div className="content">
                        <p>To check the status of your order, you need to go to the “Order” under “My Account” where you will find the status/stage of your order along with the courier details and tracking details. This is only available once you sign in through your User Id / registered email ID / Mobile number and password. Also, if you had placed the order as a guest, you will need to sign up first to track your order status/ stage.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord3" id="ord3" />
                    <label className="title" htmlFor="ord3">How can I check if Asort delivers to my PIN Code?</label>
                    <div className="content">
                        <p>While making the purchase, once you add products to the cart and click on checkout, you will be prompted to fill in the address details. When you fill in the PIN code of your area, you will get to know whether this is a serviceable area or not.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord4_1" id="ord4_1" />
                    <label className="title" htmlFor="ord4_1">How long does it take for an order to be dispatched when placed on Asort?</label>
                    <div className="content">
                        <p>We try to dispatch your order as soon as possible but some time it might get delay due to unavoidable conditions. We try to dispatch all orders placed on Asort are dispatched within 0-1 days (24 hours)</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord4" id="ord4" />
                    <label className="title" htmlFor="ord4">How are orders delivered to me, placed on Asort?</label>
                    <div className="content">
                        <p>All orders placed on Asort are dispatched through our reliable courier partners</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord4_2" id="ord4_2" />
                    <label className="title" htmlFor="ord4_2">When are orders delivered to me, placed on Asort?</label>
                    <div className="content">
                        <p>We take 4 - 7 business working days to deliver the orders placed on ASORT. This may vary region to region.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord5" id="ord5" />
                    <label className="title" htmlFor="ord5">Does Asort deliver products outside India?</label>
                    <div className="content">
                        <p>No, Asort only caters to orders placed in India and are to be delivered within India.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord6" id="ord6" />
                    <label className="title" htmlFor="ord6">How can I get my order delivered faster?</label>
                    <div className="content">
                        <p>Sorry, currently we do not have any service available to expedite the order delivery. In future, if we are offering such service and your area pin code is serviceable, you will receive a communication from our end.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord7" id="ord7" />
                    <label className="title" htmlFor="ord7">I have received a partial item/partial order or an empty/void packet?</label>
                    <div className="content">
                        <p>Kindly reach out to us for any issue within 48 hours of delivery. Failing which, the claim will not be entertained. Whilst we investigate, request you to please make note of the below pointers:</p>
                        <ol type="a">
                            <li>Please do not use the item for which claim is being raised.</li>
                            <li>You may be required to provide information like, short description of the case (A few questions will be asked to help us understand the scenario)</li>
                            <li>The snapshots of the packet and other boxes (If any) (Try to cover the sides which look tampered/ damaged as per the Users</li>
                            <li>You may not be liable for a refund, if you fall in any of the scenarios stated below:
                                    <ul>
                                    <li>Failure to provide adequate information about the case.</li>
                                    <li>Failure to provide snapshots of the packet and box (if any)</li>
                                    <li>You have used the item for which claim was raised.</li>
                                </ul>
                            </li>
                            <li>You must not dispose of the packaging within 48 hours post - delivery. We might need to pick-up your packaging for investigation at our end.</li>
                        </ol>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord8" id="ord8" />
                    <label className="title" htmlFor="ord8">Can I modify the shipping address of my order after it has been placed?</label>
                    <div className="content">
                        <p>No, you cannot modify the shipping address once the order gets placed on Asort website. Hence, we recommend you to select the proper address with check on the pin code to be part of our serviceable area.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord8_1" id="ord8_1" />
                    <label className="title" htmlFor="ord8_1">My order status is showing as RTO (Return to origin), what will happen to my order amount.</label>
                    <div className="content">
                        <p>In case of RTO (Return to Origin), company will refund your amount in form of Asort credits, which you can check in Credit section in My Account post signing in.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord9" id="ord9" />
                    <label className="title" htmlFor="ord9">How do I track my Order?</label>
                    <div className="content">
                        <p>For select courier partners we will provide a tracking number & tracking link in the shipping confirmation email & SMS. You can use the same to track your package.<br />You can also track your order by visiting at “Order” section in “My account” post signing in.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord10" id="ord10" />
                    <label className="title" htmlFor="ord10">I used my tracking number to check the details of my shipment but the information is not clear to me.</label>
                    <div className="content">
                        <p>
                            <b>In transit :</b> Your order is on its way to your city.<br />
                            <b>Out for delivery :</b> Your order has reached your city and we will attempt to deliver it today.<br />
                            <b>Hold at hub :</b> We tried delivering your order at least once and we will try again in 48 hours.<br />
                            <b>RTO in transit :</b> Your order was undelivered and is on its way back to our warehouse.<br />
                            For further queries, please contact our Customer Care.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="ord11" id="ord11" />
                    <label className="title" htmlFor="ord11">I should have received my order by now but I haven't. What do I do?</label>
                    <div className="content">
                        <p>We request you to check your email and SMS for any communication regarding delivery timings from our side. We usually send a notification if there is a delay in delivery of your order<br />
                            If in case you can't find any notification from us and the promised time is over, please connect with our customer care team and we will provide you with a solution.</p>
                    </div>
                </div>
            </div>

            {/* CANCELLATION, RETURN & REFUND */}

            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>CANCELLATION, RETURN & REFUND</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="can1" id="can1" />
                    <label className="title" htmlFor="can1">What is Asort's Cancellation Policy?</label>
                    <div className="content">
                        <p>You can only cancel an order, if it is yet to be dispatched from our warehouse. This includes items purchased on sale also. Any amount paid will be credited as Asort Credits in your wallet. No partial cancellation is allowed.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can2" id="can2" />
                    <label className="title" htmlFor="can2">How do I cancel my Order if I am a Guest User?</label>
                    <div className="content">
                        <p>In order to cancel your order. Please go to email with which you have placed your order.
                        <br />
                            Please look for email with track order <a href="/resources/faq/order-cancel-1.0.png" target="_blank"><small>(Sample E-Mail)</small></a>
                            <br />
                            Kindly click on track order & signup using the link provided. Post signup, please visit My Account section & move to orders section. There you can see the orders placed along with “Cancel Button”<br />
                        </p>
                        <small><b>Note –</b> You can cancel the order only if it’s not dispatched/ handed over to logistic partner. In case if its dispatched please take the delivery of order & proceed with “Return request”.</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can3" id="can3" />
                    <label className="title" htmlFor="can3">How do I cancel my Order if I am a signed up user?</label>
                    <div className="content">
                        <p>To cancel your order, you need to follow the below steps:-<br />
                            Also, this is available once you sign in through your registered email id and password. In case you had placed the order as a guest, you will need to sign up to go to order history and cancel the selected order.<br />
                        </p>
                        <ol type="a">
                            <li>You will go the “Order History” and select the order you want to cancel.</li>
                            <li>Click on the “Cancel” button and select the reason for cancellation of order from the list of reasons of cancellation.</li>
                            <li>Click on Submit and auto-refund will be initiated, the calculation of the amount of which will depend on PG, Credit points and shipping charges and will be irrespective of any rewards and promo codes used will get lapsed.</li>
                        </ol>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can4" id="can4" />
                    <label className="title" htmlFor="can4">I just cancelled my order. When will I receive my refund?</label>
                    <div className="content">
                        <p>For any amount paid while purchasing through PG and credit point if any, equivalent money will get credited into the Asort Credits within 24 hours from the time of order cancellation.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can5" id="can5" />
                    <label className="title" htmlFor="can5">What is Asort's Return Policy? How does it work?</label>
                    <div className="content">
                        <p>Asort's return policy gives you an option to return items, for any reason, purchased on Asort within 15 days of order placed. We recommend that you don't use the product and preserve its original condition, tags, and packaging. You are welcome to try on a product but please take adequate measure to preserve its condition.
                            <br />
                            There are two ways to return the product to us:
                        </p>
                        <ol type="a">
                            <li> <b>Serviceable – (Pick up):</b> In most locations, we offer a free pick up service. Although, we try our best to serve in almost all locations however, currently we pick up products only from selected PIN Codes. If your area pin code is serviceable, your return request will be approved.
                                <ol>
                                    <li>We will pick up the return within 3 business working days from the request placement date</li>
                                    <li>Please keep the return shipment ready as per above terms and conditions </li>
                                </ol>
                            </li>
                            <li> <b>Non – Serviceable (Self-Ship):</b> Although we try to pick up from multiple locations however, if your area pin code is not serviceable for pickup, you will need to self-ship the return item via any reliable courier partner. Please ensure to place a sheet of paper with the details of Order ID and Return ID for each item included in the package. For all self-shipped returns, you will be duly reimbursed the shipping costs as per the terms and conditions mentioned above. Therefore, please ensure that scan copy of courier bill/receipt is uploaded while following the return request.
The Self Ship Address is - <b>Kewat/Khata No: 367, Khasra No: 188//4/2, 6,7,8,9 & 10, Jamalpur - Farukhnagar Road, Distt: Gurugram, HARYANA- 122506</b>
                                The courier bill/receipt should satisfy the following conditions for successful processing:
<ol>
                                    <li>It should capture the weight of the return package.</li>
                                    <li>Residential/office address, destination address, shipment date, amount and other details should be mentioned.</li>
                                    <li>The information on the receipt should NOT be edited/over-written.</li>
                                </ol>
                                This is subject to your returns being inspected and successfully processed upon receipt at our end after the quality check.
<br />
                                <b>Important –</b> Please note that if you proceed with the return request – Any incentives linked with this order for self or the order placed through referral, will be rolled back against the order (SKUs selected for return or the complete order which is being returned)
</li>
                        </ol>
                        If the picked up product does not pass the quality check, we will give 0%-50% of the product price in your Asort credit. If the quality check fails, please note that the shipping cost will not be reimbursed.<br />
                        The following EXCEPTIONS and RULES apply to this Policy:
                        <ol>
                            <li>All items to be returned must be unused and in their original condition with all original tags and packaging intact (for e.g. shoes must be packed in the original shoe box).<br />
                                <ol type="a">
                                    <li>Asort will not be liable for the products returned by mistake. In circumstances where an extra or a different product is returned by mistake, Asort would not be accountable for misplacement or replacement of the product and is not responsible for its delivery back to the User</li>
                                    <li>If you self-ship your returns, kindly pack the items securely to prevent any loss or damage during transit. For all self-shipped returns, we recommend you use a reliable courier service.</li>
                                    <li>If you self-ship your returns, your shipping costs would be reimbursed subject to your return having met our Returns Policy and the image of the courier receipt is shared by you and validated by us. For self-ship returns the refund for returned products will only be initiated if they pass through a quality check conducted at the warehouse.</li>
                                </ol>
                            </li>
                        </ol>
                        <small>Note – Quality Check (QC) takes 1 business working day</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can6" id="can6" />
                    <label className="title" htmlFor="can6">How do I return my Order if I am a Guest User?</label>
                    <div className="content">
                        <p>In order to Return your order. Please go to email with which you have placed your order.
                        <br />
                            Please look for email with track order <a href="/resources/faq/order-cancel-1.0.png" target="_blank"><small>(Sample E-Mail)</small></a>
                            <br />
                            Kindly click on track order & signup using the link provided. Post signup, please visit My Account section & move to orders section. There you can see the orders placed along with “Return Button”
                        </p>
                        <small><b>Note –</b> You can Return your order within 15 days of placing the order.</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can7" id="can7" />
                    <label className="title" htmlFor="can7">How do I return an order to Asort, if am a Signed User?</label>
                    <div className="content">
                        <p>All registered customers will need to sign in and follow the below steps:-
                        </p>
                        <ol type="a">
                            <li>Click on “My Account”</li>
                            <li>Click on the “Return” button</li>
                            <li>Check for your area pin code is serviceable for REVERSE PICK UP-If it is serviceable we will   arrange for a reverse pick-up and if the pin code is non-serviceable you will have to re-ship the order to our warehouse at <b>Kewat/Khata No: 367, Khasra No: 188/4/2,6,7,8,9 & 10, Jamalpur - Farukhnagar Road, Distt: Gurugram, HARYANA- 122506.</b></li>
                            <li>Choose from the list of SKUs of your order that you want to Return with a “Main reason” and “Sub reason”</li>
                            <li>Attach images/pictures of the products that you want to return (minimum 1 & maximum 2)</li>
                            <li>You will receive a confirmation SMS/Email after you click on “Submit”.</li>
                        </ol>
                        We offer pick-up facility in selected locations basis our courier serviceability. If reverse pick-up option is not available at your location, you can self-ship the product to us.
                            <ul>
                            <li><b>Pick-up:</b> If you select to schedule a pick-up, please place the product in a packet and the product must be unused, unwashed and all the tags are intact. Keep the packet ready and open to expedite the return pickup. Our staff may initially examine the product at the time of pickup and a further quality check of the product will be conducted at our Returns Desk.</li>
                            <li><b>Self-ship:</b> In case your area pin code is not eligible for “Pick-up” mode then, please self-ship the product to our warehouse. Please pack the product and ensure product is unused, unwashed and all the tags are intact. Also, please mention Order No and Return id on a piece of paper and place it in the packet. Kindly address the package to the Asort warehouse address -
                            <b>Kewat/Khata No: 367, Khasra No: 188//4/2,6,7,8,9 & 10, Jamalpur - Farukhnagar Road, Distt: Gurugram, HARYANA- 122506.</b>We will send you a confirmation email as soon as we receive the shipment at our warehouse. At any time, you can track the status of your return request on our website.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can8" id="can8" />
                    <label className="title" htmlFor="can8">How long would it take to receive the refund of the returned product?</label>
                    <div className="content">
                        <p>After the refund has been initiated by Asort, as per the returns policy, the refund amount is expected to reflect in your wallet as Asort credits within 24 hours.<br />
                            Please note, Asort initiates the refund after the returned item has reached us along with quality check is successful. Therefore, the refund initiation time may vary basis time taken by the courier partner to deliver the return to Asort warehouse. In case of any refund discrepancies, you are requested to connect with us.<br />
                            In case you cancel the order before handed over to courier partner, complete amount including shipping charges will be refunded in form of Asort credits. In case of return of product, shipping charges won’t be refunded.
                            </p>
                        <br />
                        <b>In case of cancellation</b> <br /><br />
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Refundable</th>
                                    <th>Condition</th>
                                </tr>
                                <tr>
                                    <td>Shipping charges</td>
                                    <td>Yes</td>
                                    <td>If order is not packed</td>
                                </tr>
                                <tr>
                                    <td>Reward Points</td>
                                    <td>Yes</td>
                                    <td>If order is cancelled by warehouse</td>
                                </tr>
                                <tr>
                                    <td>Asort Credit</td>
                                    <td>Yes</td>
                                    <td>Under All conditions</td>
                                </tr>
                            </tbody>
                        </table><br />
                        <b>In case of return</b><br /><br />
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th></th>
                                    <th>Refundable</th>
                                    <th>Condition</th>
                                </tr>
                                <tr>
                                    <td>Shipping charges</td>
                                    <td>No</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>Reward Points</td>
                                    <td>No</td>
                                    <td>NA</td>
                                </tr>
                                <tr>
                                    <td>Asort Credit</td>
                                    <td>Yes</td>
                                    <td>Post deducting shipping charges</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can9" id="can9" />
                    <label className="title" htmlFor="can9">How would I get my Refund?</label>
                    <div className="content">
                        <p>Refund is processed in form of Asort Credits added to your portal which can be further withdrawn into your bank account and can also be used to further place orders with Asort. Withdrawal of credits from your wallet to your bank account will be allowed only if there are minimum 50 Asort Credits in your wallet.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can10" id="can10" />
                    <label className="title" htmlFor="can10">How do I return multiple products from a single order?</label>
                    <div className="content">
                        <p>If you are returning multiple products from a single order then, you need to select the SKUs from the list of products that you want to return. If you are self-shipping the products, you can ship all the products in a single shipment. If mode of return is Pickup, our courier person will pick-up the products from the pickup address.</p>
                        <small><b>Note –</b> All products which you have selected for return need to be handed over to person or self-shipped back to us else return will not be processed.</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can11" id="can11" />
                    <label className="title" htmlFor="can11">Will Asort pick up the products, I want to return, from my location?</label>
                    <div className="content">
                        <p>Currently, we pick up products only from selected PIN Codes. If your area pin-code is serviceable, you will be able to select the pickup option when you create a Return Request on the website.</p>
                        <ul>
                            <li>We will pick up the return within 4 - 7 working days from the date you place the request.</li>
                            <li>Please keep the return shipment ready.</li>
                        </ul>

                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can12" id="can12" />
                    <label className="title" htmlFor="can12">How can I Self-Ship the product to Asort?</label>
                    <div className="content">
                        <p>If your area pin code is not serviceable for pickup, you will need to self-ship the return item via any reliable courier partner. Please ensure to place a sheet of paper with the details of Order ID and SKUs for each item included in the package. In such case, you will be reimbursed with the actual shipping cost or INR 100/-, whichever is lower, after completion of the quality check at our end. Therefore, please ensure that copy of courier bill/receipt is shared with us. After your returns being inspected and successfully processed, the amount of reimbursement will reflect in the credit section of your Asort account</p>
                        <br/>
                        <p>The courier bill/receipt must satisfy the following conditions for successful processing:</p>
                        <br/>
                        <ol>
                            <li>It should capture the weight of the return package.</li>
                            <li>Residential/office address, destination address, shipment date, amount and other details should be mentioned.</li>
                            <li>The information on the receipt should NOT be edited/over-written.</li>
                        </ol>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can13" id="can13" />
                    <label className="title" htmlFor="can13">Where should I self-ship the Returns?</label>
                    <div className="content">
                        <p>You can send the return to our warehouse. Kindly do not send it to any other address as the package would not be acceptable then. The address to return your shipment can be found on our website and on the order invoice too. Alternatively, you can make a note of the address, mentioned below:-
                            <b>Kewat/Khata No: 367, Khasra No: 188//4/2,6,7,8,9 & 10, Jamalpur - Farukhnagar Road, Distt: Gurugram, HARYANA- 122506</b>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can14" id="can14" />
                    <label className="title" htmlFor="can14">Why is my return request been declined?</label>
                    <div className="content">
                        <p>This may have happened because the product sent by you did not pass the quality check.<br />
                            For more details, please call our customer care.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can15" id="can15" />
                    <label className="title" htmlFor="can15">Why did the pick-up of my product fail?</label>
                    <div className="content">
                        <p>We make three attempts to pick up the item, if the item is not picked up in the third attempt, pickup request will be marked as failed. You can initiate a new return request, if item meets the return criteria and is within the specified return period.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can16" id="can16" />
                    <label className="title" htmlFor="can16">How do I cancel the order I have placed?</label>
                    <div className="content">
                        <p>
                            You can cancel your order before it has been dispatched from our warehouse. If your order has already been shipped and delivered, you can create a return request.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="can17" id="can17" />
                    <label className="title" htmlFor="can17">I have created a Return request. When will the product be picked up?</label>
                    <div className="content">
                        <p>Number of days to pick-up a product may vary as per the Logistics team that is assigned to pick-up your product. The product will be picked within 4-7 working days.</p>
                    </div>
                </div>
            </div>

            {/* Payment */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>payments</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay1" id="pay1" />
                    <label className="title" htmlFor="pay1">How can I pay for my order at Asort?</label>
                    <div className="content">
                        <p>
                            We support the following payment options at Asort:
                        </p>
                        <ol type="a">
                            <li>Credit Card</li>
                            <li>Debit Card</li>
                            <li>Net banking</li>
                            <li>Asort Credits in the wallet</li>
                        </ol>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay2" id="pay2" />
                    <label className="title" htmlFor="pay2">I want to know about EMI (credit card) payment option.</label>
                    <div className="content">
                        <p>
                            EMI (Credit Card) is a convenient payment option that you can choose to pay for the order in easy instalments to the credit card issuing bank. The option is available only on credit cards issued by the banks.<br />
                            This EMI option is facilitated by the card issuing bank. The EMI eligibility, payment plan and refund rules are solely on the internal discretion and approvals of the bank.
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay3" id="pay3" />
                    <label className="title" htmlFor="pay3">What are the eligibility criteria to avail EMI option?</label>
                    <div className="content">
                        <p>We do not provide any EMI option. However, if your credit card has any such feature, you can avail it while making payment.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay4" id="pay4" />
                    <label className="title" htmlFor="pay4">Why is sum total of EMI’s more than the order value?</label>
                    <div className="content">
                        <p>The issuing bank charges interest per EMI transaction. The interest rates are decided by the bank and are displayed at the time of completing the transaction.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay5" id="pay5" />
                    <label className="title" htmlFor="pay5">What happens if bank rejects EMI conversion?</label>
                    <div className="content">
                        <p>You need to pay full amount of transaction to the bank, since EMI facility is at sole discretion of the issuing bank, please contact your card issuing bank.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay6" id="pay6" />
                    <label className="title" htmlFor="pay6">Why is the transaction amount not converted into EMI in 7 working days?</label>
                    <div className="content">
                        <p>Conversion of transaction into EMI is at the sole discretion of card issuing bank and can also be rejected in unfortunate circumstances. In case the paid amount is not converted to EMI within 7 days then contact your card issuing bank.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay7" id="pay7" />
                    <label className="title" htmlFor="pay7">What should I do if my payment fails?</label>
                    <div className="content">
                        <p>Please retry making the payment after ensuring that the information entered is accurate, including all account details, billing addresses and passwords. If your payment still fails, please try making payment through other debit cards/credit card/net banking. If your payment is debited from your account after a payment failure, it will be credited back within 7-10 days, after we receive a confirmation from the bank.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay8" id="pay8" />
                    <label className="title" htmlFor="pay8">I am being charged GST amount on my order. What is GST?</label>
                    <div className="content">
                        <p>GST is a single tax on the supply of goods and services that is levied on every value addition (through production and services) and is added to a product's sale price. GST has to be borne/paid by the ultimate consumer of the product or service. If your order is fulfilled on or after July 1st 2017, GST will be applicable on your orders. GST subsumes all other taxes like Excise duty, VAT, Entry tax etc.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="pay9" id="pay9" />
                    <label className="title" htmlFor="pay9">If I return/cancel the purchased product will the GST amount charged be refunded?</label>
                    <div className="content">
                        <p>Yes. The refund will be processed in the form of Asort Credit points inclusive of GST charges. However, no refunds of GST shall be made in relation to shipping charges collected from the consumer under Asort shipping policy.</p>
                    </div>
                </div>
            </div>

            {/* ASORT CREDITS */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>ASORT CREDITS</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre1" id="cre1" />
                    <label className="title" htmlFor="cre1">How do I check balance in my Asort Credit?</label>
                    <div className="content">
                        <p>You need to sign-in to your account in Asort website and go to My Account. You can see your Asort Credit points in the dashboard.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre2" id="cre2" />
                    <label className="title" htmlFor="cre2">How do I use Asort credit to buy items on Asort website?</label>
                    <div className="content">
                        <p>You shall be able to use Asort credit as a payment method available at the checkout.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre3" id="cre3" />
                    <label className="title" htmlFor="cre3">Can I “Withdraw” Asort Credit into my Bank Account?</label>
                    <div className="content">
                        <p>Yes, you can withdraw Asort credits into your bank account. To withdraw Asort credits, you will click on “Withdraw Credits” which will be activated if the credits are 50 or more. In the last 6 months amount received from PG will be credited back to your source account while if it exceeds 180 days it will be credited to any other bank account that you provide (in your name) other than the source account. If the Credits are less than 50 in your account, you will have to approach the customer care team who will initiate the withdrawal request (enabled for 48 hours) on your behalf, to upload the bank account details further.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre4_1" id="cre4_1" />
                    <label className="title" htmlFor="cre4_1">When can I receive my Asort credit after the withdrawal request initiated for refund?</label>
                    <div className="content">
                        <p>We take 3 days to initiate the refund and 7 days is the bank’s TAT for the credit to be made into customer’s account. You may expect your refund amount into your account within 10 business working day time period.</p>
                        <small><b>Note -</b> Refund to Nodal Banks may vary as per their internal function.</small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre4" id="cre4" />
                    <label className="title" htmlFor="cre4">Do I need to have an account on Asort website to use Asort credit?</label>
                    <div className="content">
                        <p>Yes, Asort credit requires an Asort account.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre5" id="cre5" />
                    <label className="title" htmlFor="cre5">What happens to my Asort credit if I am not able to access my Asort account?</label>
                    <div className="content">
                        <p>Your Asort credit account is still active, you may reset your Asort account password or take help of customer care team to gain access to your Asort account.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre6" id="cre6" />
                    <label className="title" htmlFor="cre6">What happens if someone uses Asort credit from my Asort account without my permission?</label>
                    <div className="content">
                        <p>You need to protect your Asort account. If someone gets unauthorized access to your Asort account, they can use your Asort credit to purchase products at Asort on your behalf without your knowledge.
Note – Asort will not be liable for any unauthorized usage of your assort credits.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre7" id="cre7" />
                    <label className="title" htmlFor="cre7">What happens if I return the Items which I have bought with Asort credit?</label>
                    <div className="content">
                        <p>The refunded amount of these returned items shall be added to your Asort credit.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre9" id="cre9" />
                    <label className="title" htmlFor="cre9">Can I decide the amount which I can pay from the Asort Credit and the rest from other payment options?</label>
                    <div className="content">
                        <p>No, the credit available will be applied automatically. However, if the remaining amount is less than Rs10 then the credit applied will automatically be reduced as the payment to be made from the payment gateway is Rs 10.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre11" id="cre11" />
                    <label className="title" htmlFor="cre11">Is there any maintenance charge for keeping Asort credit?</label>
                    <div className="content">
                        <p>There are no maintenance charges for keeping Asort credit balance.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre12" id="cre12" />
                    <label className="title" htmlFor="cre12">What is the maximum validity of Asort credit?</label>
                    <div className="content">
                        <p>There is no expiration dates to Asort credit. You can use them as when you want, while placing order on Asort.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre13" id="cre13" />
                    <label className="title" htmlFor="cre13">What are the benefits of taking refund in Asort credit?</label>
                    <div className="content">
                        <ol type="a">
                            <li>Faster Check-out by using Asort Credit</li>
                            <li>Any refunds that you ask for in future shall be immediately added to your Asort Credit.</li>
                        </ol>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="cre14" id="cre14" />
                    <label className="title" htmlFor="cre14">How do I apply a coupon on my order?</label>
                    <div className="content">
                        <p>You can apply coupon code on promotions tab on check out page.</p>
                    </div>
                </div>
            </div>

            {/* MISCELLANEOUS */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>MISCELLANEOUS</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="mis1" id="mis1" />
                    <label className="title" htmlFor="mis1">What is Asort’s Fair Usage Policy?</label>
                    <div className="content">
                        <p>We always strive hard to provide the best experience to our customers. However, we have noticed that few accounts abuse our liberal returns policy. These accounts typically return most of the items bought or choose to not accept our shipments. Hence, our regular customers are deprived of the opportunity to buy these items. To protect the rights of our customers, we reserve the right to collect shipping charge of Rs. 149 for all orders</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="mis2" id="mis2" />
                    <label className="title" htmlFor="mis2">How will I detect fraudulent emails/calls seeking sensitive personal and confidential information?</label>
                    <div className="content">
                        <p>If you receive an e-mail, a call from a person/association claiming to be from Asort seeking sensitive confidential information, like debit/credit card PIN, net-banking or mobile banking password, we request you to never provide such confidential and personal data. We at Asort or our affiliate logistics partner never ask for such confidential and personal data. If you have already revealed such information, report it immediately to an appropriate law enforcement agency.</p>
                    </div>
                </div>
            </div>

            {/* INCENTIVES */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>INCENTIVES</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="com1" id="com1" />
                    <label className="title" htmlFor="com1">How is my Incentive generated?</label>
                    <div className="content">
                        <p>You are entitled to incentives only if you are a registered customer with
                            us. The incentive process starts once you share the URL of product or
                            store with any user and he places an order through that URL. The user
                            will receive a 10% discount if he signs-up and places order and you will
                            receive Level 1 incentive, followed by other customers in the sponsorship.
                            You will receive level 1 incentive without any sales target, however,
                            in order to receive incentive beyond level you need to do a daily sales target of Rs.80.
                            If anyone fails to complete the daily sales target, the person will be
                            skipped from the Level line and then person above in the sponsorship line,
                            completing the daily sales target (Rs. 80), will be counted for that Level
                            profit.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="com2" id="com2" />
                    <label className="title" htmlFor="com2">How much Incentive will I earn?</label>
                    <div className="content">
                        <p>
                            Incentive is released basis your eligibility and on percentage basis for different Level levels. The percentage of incentive earned, Level-wise is as follows (incentive is only generated up to 5th Level)</p>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <th>Level</th>
                                    <th>%</th>
                                </tr>
                                <tr>
                                    <td>Level 1</td>
                                    <td>10%</td>
                                </tr>
                                <tr>
                                    <td>Level 2</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Level 3</td>
                                    <td>2%</td>
                                </tr>
                                <tr>
                                    <td>Level 4</td>
                                    <td>0.5%</td>
                                </tr>
                                <tr>
                                    <td>Level 5</td>
                                    <td>0.5%</td>
                                </tr>
                            </tbody>
                        </table>
                        <br />
                        <b>Eligibility Criteria: </b> <br />
                        <ul>
                            <li>Order should be delivered – only on delivered orders the incentives will be credited – No returned or cancelled orders will be considered for the incentives</li>
                            <li>For any orders which is returned or cancelled, the incentives will be rolled back as per the return policy terms and conditions</li>
                            <li>Incentive <b>will be</b> calculated on the Credit and Payment Gateway payments </li>
                            <li>Incentive <b>will not be</b> calculated on the Rewards and Promotions/Promo Codes </li>
                            <li>Incentive payout will be in 15 + 7 days – these include the refund policy and all official incentive calculations etc.</li>
                            <li>On the 16th day the final payout will be visible to you on your dashboard</li>
                        </ul>
                        <small> <b>Note</b><br />
                            Banned distributors will not be given incentive. Also the pending incentive will be forfeited. Customer can be banned due to - fraudulent activities (Multiple accounts with same name/address but different email address and phone numbers)
                        </small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="com3" id="com3" />
                    <label className="title" htmlFor="com3">What is the sales target?</label>
                    <div className="content">
                        <p>Sales target is the minimum amount of mandatory business, a customer is required to do on a daily basis. The sales target is of Rs. 80 per day. The sale target can be a maximum of Rs.1200 in one go (80*15=1200). You will only be able to do the sales target for the future. Any sales target done - will never be considered for the past days.
<br />
                            Eg. 1. Customer A completed a sales target for 1200 and above on 1st April ’19. This will be considered for the next 15 days.
<br />
                            Eg. 2. Customer B completed a sales target for 1200 and above on 5th April ’19. This will be considered for the next 15 days till 20th April. This will not be considered for 1st April till 4th April ‘19
<br />
                            Eg. 3. Customer C generates a sales target for Rs80 on a daily basis from 1st April ’19 till 15th April. His incentives will be generated for all 15 days
<br />
                            Eg. 4. Customer D generates a sales target for Rs80 on a daily basis from 1st April ’19 till 10th April and then for 15th April only. His incentives will be generated for 11 days (10days – from 1st till 10th April ’19 and 1 day for 15th April ‘19)
<br />
                            Sales target can either be done by self-purchase or a guest user purchase through referral URL. However, if the referred user signs-up and then purchases, his purchase will not be considered for the sales target</p>
                        <small>
                            ** Sales target is not mandatory to get level 1 incentive.
                        </small>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="com4" id="com4" />
                    <label className="title" htmlFor="com4">How will I check my incentives?</label>
                    <div className="content">
                        <p>You can also check the incentives by going to the “My Account” after signing in. You can check your incentive by going to your dashboard - 	In Green Colour Box you will be able to see 2 types of incentives;
                            <br />
                            <ol>
                                <li>Today – This is the daily incentives (in rupees) you are eligible as per incentive terms and conditions</li>
                                <li>Total – This is the total incentives (in rupees) you are eligible as per incentive terms and conditions till the final pay out to be released</li>
                            </ol>
                            You can also check the incentives on the left side where you will see, Incentives. Once clicked, you will get 2 options;
                            <ol type="a">
                                <li><b>Live </b>– You can check your incentive Level and all details regarding to it on an order wise basis. This live incentive gives you the details on the incentives earned per sale you made through your referral URL or on your self-purchase as well</li>
                                <li><b>Final</b>– You can check the final incentive generated which will be credited to your account. As per the incentive Level policy, this will be visible only after 15 days. This incentive amount which will be credited to your account on the 22nd day (15+7 = as per the incentive Level policy, provided your bank details are updated.</li>
                            </ol>
                        </p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="com5" id="com5" />
                    <label className="title" htmlFor="com5">Why is my incentive pending and when will I receive my incentives?</label>
                    <div className="content">
                        <p>Your incentives may be pending due to the Non-availability/Incorrect bank account details<br />
                            You will receive the pending incentives in the next pay out cycle.
<ul>
                                <li>Request from 1st till 15th is 25th of Same Month</li>
                                <li>Request from 16th till 30th/31st is 5th of Next Month</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            {/* DISCOUNTS & REWARDS */}
            <div className="payment-ques ui vertical accordion">
                <div className="head">
                    <h3>DISCOUNTS & REWARDS</h3>
                </div>
                <div className="item">
                    <input type="checkbox" name="dis1" id="dis1" />
                    <label className="title" htmlFor="dis1">What is the Reward Program of Asort?</label>
                    <div className="content">
                        <p>Reward is gifted to you when someone signs up at Asort.com using your referral code. On each signup referral person gets 200 Points.
Rewards would be given out in points (2 reward points equal to Rs.1) added to your portal which can be further used to place orders. You can redeem your Reward points with no minimum value required for e.g. In case you have 100 Reward points you can avail discount  upto Rs.50.
Note- Reward points have validity of 90 days from date of issue.</p>
                    </div>
                </div>
                <div className="item">
                    <input type="checkbox" name="dis2" id="dis2" />
                    <label className="title" htmlFor="dis2">Am I eligible for any discount while placing an order?</label>
                    <div className="content">
                        <p>Yes, you are entitled for discounts while placing the order on Asort. Please refer to the below scenarios for further clarity:-</p>
                        <ul>
                            <li><b>Sign up discount –</b> If you sign up and place an order you are eligible for a discount of 10% on the overall amount of the first order placed. This is not available if you place an order as a guest.
                                </li>
                            <li><b>Asort Rewards –</b> With Asort Rewards, you are entitled of a maximum of 48% discount on the order placed. Maximum discount of 48% is inclusive of product discount, reward points, Coupon / Promo code applied (If Any).
                                </li>
                            <li>
                                <b>Promo Code –</b> With Promo Code applied while placing an order, you either get a percentage of discount OR a fixed amount on the overall amount of the order placed. The Promo Codes are valid up to a fixed period, which you will be informed once you get any code from Asort.
                                </li>
                        </ul>

                        <small> <b>Note: <br />Promo Codes are rewards of two types:-</b><br />
                            <ol type="a">
                                <li>Restricted (these are discounts with limited % or fixed amount and have validity)</li>
                                <li>Unrestricted (this will supersede the 48% Total Discount Criteria)
                                Credit will be treated as hard cash above all the mentioned discounts</li>
                            </ol>
                            <b>In case of return:</b><br />
                            <ol type="a">
                                <li>Rewards and Promo Code will be forfeited.</li>
                            </ol>
                        </small>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
  }
}

export default index;
