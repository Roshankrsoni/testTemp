import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// import classnames from "classnames";
// import { Router } from "/client/api";
// import { Reaction } from "/client/api";
// import { registerComponent, Components } from "@reactioncommerce/reaction-components";
// import { QuickBuyContainer } from '/imports/plugins/custom/quick-buy/client/containers';
// import { Session } from "meteor/session";
// import { Meteor } from "meteor/meteor";
// import { checkForAsortDomain } from "/imports/plugins/custom/common/checkforAsortDomain";
// import { membershipDiscount } from "/imports/plugins/custom/common/discount";
// import { Accounts } from "/lib/collections";
import { S3_BASE_URL_PATH, S3_PATH_LOCATION } from '../../../../api_constants';

let buttonClicked;
const hostName = window.location.hostname;
const isAsort = 0;

class DsProductGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
      isShare: false,
      ShowStoreButton: this.props.showStoreButton,
      addedInStore: this.props.added,
      mediaArray: this.props.product.media,
      media: this.props.product.primaryImage,
      mediaIndex: this.props.product.primaryImage ? 0 : -1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ShowStoreButton: nextProps.showStoreButton,
      addedInStore: nextProps.added,
    });
  }

  static propTypes = {
    position: PropTypes.object,
    product: PropTypes.shape({
      _id: PropTypes.string,
      description: PropTypes.string,
      isBackorder: PropTypes.bool,
      isLowQuantity: PropTypes.bool,
      isSoldOut: PropTypes.bool,
      media: PropTypes.arrayOf(PropTypes.string),
      pricing: PropTypes.object,
      primaryImage: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }),
    // shopCurrencyCode: PropTypes.string.isRequired
  };

  // get product detail page URL
  // get productURL() {
  //   const { product: { slug } } = this.props;
  //   return Router.pathFor("product", {
  //     hash: {
  //       handle: slug
  //     }
  //   });
  // }

  // get weight class name
  // get weightClass() {
  //   const { weight } = this.props.position || { weight: 0 };
  //   switch (weight) {
  //     case 1:
  //       return "product-medium";
  //     case 2:
  //       return "product-large";
  //     default:
  //       return "product-small";
  //   }
  // }

  // get notice class names
  // get noticeClassNames() {
  //   const { product: { isSoldOut, isLowQuantity, isBackorder } } = this.props;
  //   return classnames({
  //     "badge": (isSoldOut || isLowQuantity),
  //     "variant-qty-sold-out": (isSoldOut || (isSoldOut && isBackorder)),
  //     "badge-danger": (isSoldOut && !isBackorder),
  //     "badge-low-inv-warning": (isLowQuantity && !isSoldOut)
  //   });
  // }

  // get product item class names
  // get productClassNames() {
  //   const { position } = this.props;
  //   return classnames({
  //     "product-grid-item": true,
  //     [this.weightClass]: true,
  //     "pinned": position.pinned
  //   });
  // }

  // handle click event
  handleClick = event => {
    this.props.onClick(event);
  };

  handleNext = event => {
    event.stopPropagation();
    this.setState({
      mediaIndex: this.state.mediaIndex + 1,
      media: this.state.mediaArray[this.state.mediaIndex + 1],
    });
  };

  handlePrevious = event => {
    event.stopPropagation();
    this.setState({
      mediaIndex: this.state.mediaIndex - 1,
      media: this.state.mediaArray[this.state.mediaIndex - 1],
    });
  };

  // // notice
  // renderNotices() {
  //   const { product: { isSoldOut, isLowQuantity, isBackorder } } = this.props;
  //   const noticeContent = { classNames: this.noticeClassNames };

  //   if (isSoldOut) {
  //     if (isBackorder) {
  //       noticeContent.defaultValue = "Backorder";
  //       noticeContent.i18nKey = "productDetail.backOrder";
  //     } else {
  //       noticeContent.defaultValue = "Sold Out!";
  //       noticeContent.i18nKey = "productDetail.soldOut";
  //     }
  //   } else if (isLowQuantity) {
  //     noticeContent.defaultValue = "Limited Supply";
  //     noticeContent.i18nKey = "productDetail.limitedSupply";
  //   }

  //   return (
  //     <div className="grid-alerts">
  //       <div className="product-grid-badges">
  //         <span className={noticeContent.classNames}>
  //           <Components.Translation defaultValue={noticeContent.defaultValue} i18nKey={noticeContent.i18nKey} />
  //         </span>
  //       </div>
  //     </div>
  //   );
  // }

  renderNextMediaButton() {
    if (this.state.mediaArray.length > 1) {
      return (
        <div className="nextMedia">
          {this.state.mediaIndex !== 0 ? (
            <button
              className="angle-left"
              onClick={event => this.handlePrevious(event)}
            >
              {/* <i className="fa fa-angle-left" aria-hidden="true"></i> */}
              <LeftOutlined />
            </button>
          ) : null}
          {this.state.mediaIndex !== this.state.mediaArray.length - 1 ? (
            <button
              className="angle-right"
              onClick={event => this.handleNext(event)}
            >
              {/* <i className="fa fa-angle-right" aria-hidden="true"></i> */}
              <RightOutlined />
            </button>
          ) : null}
        </div>
      );
    }
  }

  renderCustomMedia() {
    const MEDIA_PLACEHOLDER = '/assets/placeholder.gif';
    if (this.state.media) {
      const mediaUrl = `${S3_BASE_URL_PATH + S3_PATH_LOCATION}large/${
        this.state.media
      }`;
      return (
        <span
          className="product-image"
          // style={{ backgroundImage: `url("https://prod-cdn.asort.com/product/images/large/abg-mens-black-casual-twist-pardhaan-ocersized-track-jacket_8126.jpeg")` }}
          style={{ backgroundImage: `url("${mediaUrl}")` }}
        />
      );
    }
    return (
      <span
        className="product-image"
        // style={{ backgroundImage: `url("https://prod-cdn.asort.com/product/images/large/abg-mens-black-casual-twist-pardhaan-ocersized-track-jacket_8126.jpeg")` }}
        style={{ backgroundImage: `url("${MEDIA_PLACEHOLDER}")` }}
      />
    );
  }

  // render product image
  renderMedia() {
    const { product } = this.props;
    const { primaryImage } = product || {};
    const MEDIA_PLACEHOLDER = '/assets/placeholder.gif';
    let mediaUrl;
    if (primaryImage) {
      mediaUrl = `${S3_BASE_URL_PATH + S3_PATH_LOCATION}large/${primaryImage}`;
    } else {
      mediaUrl = MEDIA_PLACEHOLDER;
    }

    return (
      <span
        className="product-image"
        style={{ backgroundImage: `url("${mediaUrl}")` }}
        // style={{ backgroundImage: `url("https://prod-cdn.asort.com/product/images/large/abg-mens-maroon-pardhaan-bomber-jacket_6712.jpeg")` }}
      />
    );
  }

  renderAdditionalMedia() {
    const {
      product: { media },
      position: { weight },
    } = this.props;

    // if product is not medium weight
    // or the media array is empty exit
    if (weight !== 1 || (!media || media.length === 0)) return;

    // creating an additional madia array with
    // the 2nd, 3rd and 4th images returned
    // in the media array
    const additionalMedia = media;

    const mediaUrl = `${S3_BASE_URL_PATH + S3_PATH_LOCATION}medium/${img}`;

    return (
      <div className="product-additional-images">
        {additionalMedia.map(img => (
          <span
            key={img}
            className="product-image"
            style={{ backgroundImage: `url("${mediaUrl}")` }}
          />
        ))}
      </div>
    );
  }

  renderGridContent(user) {
    const { product, shopCurrencyCode } = this.props;
    const account = null;
    const rank = isAsort
      ? 0
      : (account && account.profile && account.profile.rank) || 0;
    return (
      <div className="grid-content">
        <a
          data-event-category="grid"
          data-event-action="product-click"
          data-event-label="grid product click"
          data-event-value={product._id}
          // onClick={() => {
          //   Reaction.Router.history.push(this.productURL);
          // Reaction.Router.go(this.productURL);
          // scroll to top on cart add
          // $("html,body").animate({
          //   scrollTop: 0
          // }, 1000);
          // }}
        >
          <div className="overlay">
            <div className="overlay-title">{product.title}</div>
            <div className="overlay-vendor">{this.props.product.vendor}</div>
            <div className="currency-symbol">
              {user && user.username && isAsort ? (
                <div>
                  <strike>&#8377;{product.price.min}</strike>&nbsp;&nbsp;
                  &#8377;
                  {(
                    product.price.min *
                    (1 - membershipDiscount.customer[rank])
                  ).toFixed(0)}
                </div>
              ) : (
                <div>&#8377;{product.price.min}</div>
              )}
            </div>
          </div>
        </a>
      </div>
    );
  }

  // handleCloseButton = (event) => {

  //   $('.share-component').each(function (i) {
  //     if ($(this).hasClass('visible')) {
  //       $(this).removeClass('visible').addClass('hidden');
  //     }
  //   });
  //   $(buttonClicked).addClass('product-hover');
  // }

  // renderStoreButton = (ShowAddButton) => {
  //   if (this.state.ShowStoreButton) {
  //     if (ShowAddButton) {
  //       return (
  //         <button className="storeButton" onClick={(event) => this.addToStore(event, this.props.userStoreId, this.props.product._id)}>
  //           Add To Store
  //         </button>
  //       );
  //     }
  //     return (
  //       <button className="storeButton" onClick={(event) => this.removeFromStore(event, this.props.userStoreId, this.props.product._id)}>
  //         Remove From Store
  //       </button>
  //     );
  //   }
  // }

  // addToStore = (event, storeId, productId) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   Meteor.call("addToStore", storeId, productId, (err, data) => {
  //     if (!err) {
  //       Alerts.toast("Product added to Store", "success");
  //       this.setState({ addedInStore: !this.state.addedInStore });
  //     } else {
  //       Alerts.toast(err.error, "warning");
  //     }
  //   });
  // }

  // removeFromStore = (event, storeId, productId) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   const { product } = this.props;
  //   const { primaryImage } = product;
  //   let imgSrc = "/assets/placeholder.gif";
  //   if (primaryImage) {
  //     imgSrc = imageUrl("small", primaryImage);
  //   }
  //   // logic to get the img of the product for alert popup
  //   let pro_img = `<img src="${imgSrc}" alt="" style="width:100px;" />`;

  //   Alerts.alert({
  //     showCancelButton: true,
  //     confirmButtonText: "YES, REMOVE",
  //     customClass: 'asort-alert',
  //     html:
  //       `<div class="col-sm-12 row"><div class="col-sm-4">${pro_img}</div>
  //             <div class="col-sm-8 swag-content-message">Are you sure you want to remove this product from your store?</div>
  //           </div>`
  //   }, (isConfirm) => {
  //     if (isConfirm) {
  //       Meteor.call("removeFromStore", storeId, productId, (err, data) => {
  //         if (data === 0 || data) {
  //           Alerts.toast("Product removed from Store", "success");
  //           this.setState({ addedInStore: !this.state.addedInStore });
  //           Session.set("removeFromStore", !Session.get("removeFromStore"));
  //           Session.set("refresh", !Session.get("refresh"));
  //         }
  //       });
  //     }
  //   });
  // }

  render() {
    const { product } = this.props;
    let { sale_end, sale_start, discount_amount, discount_type } = product;
    sale_end = sale_end && new Date(sale_end).getTime();
    sale_start = sale_start && new Date(sale_start).getTime();
    const current = new Date().getTime();
    const user = null;
    const product_hover_mobile = this.state.ShowStoreButton
      ? 'product-hover-mobile'
      : null;
    return (
      <li
        className="product-grid-item product-small"
        data-id={product._id}
        id={product._id}
      >
        <div className="product-grid-item-container ">
          <span className="product-grid-item-alerts" />
          {this.renderNextMediaButton()}
          <a
            className="product-grid-item-images"
            data-event-category="grid"
            data-event-label="grid product click"
            data-event-value={product._id}

            // onClick={() => {
            //   Reaction.Router.history.push(this.productURL);
            // Reaction.Router.go(this.productURL);
            // scroll to top on cart add
            // $("html,body").animate({
            //   scrollTop: 0
            // }, 1000);
            // }}
          >
            <div className="product-primary-images" data-key={product._id}>
              {this.renderCustomMedia()}
              {isAsort && user && user.username ? (
                <div className="quick-bag-wrapper">
                  <div
                    id="product-hover"
                    className={`product-hover ${product_hover_mobile}`}
                  >
                    {/* {this.renderStoreButton(!this.state.addedInStore)} */}
                    <button
                      className="product-quickbuy pdc-social"
                      data-key={this.props.product._id}
                      onClick={event => {
                        event.preventDefault();
                        event.stopPropagation();
                        $('.share-component').each(function(i) {
                          if ($(this).hasClass('visible')) {
                            $(this)
                              .removeClass('visible')
                              .addClass('hidden');
                          }
                        });
                        buttonClicked
                          ? $(buttonClicked).addClass('product-hover')
                          : null;
                        const element = document.getElementById(
                          event.target.getAttribute('data-key'),
                        );
                        const thisQuickBuyElement = $(element)
                          .find('.share-component')
                          .get(0);
                        $(thisQuickBuyElement)
                          .removeClass('hidden')
                          .addClass('visible');
                        buttonClicked = event.target.parentElement;
                        $(buttonClicked).removeClass('product-hover');
                      }}
                    >
                      SHARE
                    </button>
                  </div>
                  {/* <Components.ShareButton
                    shareUrl={"/product/" + this.props.product.slug}
                    isShare={this.state.isShare}
                    onClickCloseButton={this.handleCloseButton}
                  /> */}
                </div>
              ) : null}
              {sale_end &&
              sale_start &&
              sale_end > current &&
              sale_start < current ? (
                  <div className="sale">
                    {discount_type === 'percentage' ? (
                      <span>
                      Apply Coupon & get <b>{discount_amount}% off</b>
                      </span>
                    ) : null}
                  </div>
                ) : null}
            </div>

            {this.renderAdditionalMedia()}
          </a>

          {/* {this.renderNotices()} */}
          {this.renderGridContent(user)}
        </div>
      </li>
    );
  }
}

export default DsProductGridItem;
