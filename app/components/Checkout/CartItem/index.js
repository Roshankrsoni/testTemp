// import React from 'react';
// import PropTypes from 'prop-types';
// import { isMobile } from 'react-device-detect';

// class DSCartItems extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectDisplay: !(props.item.quantity > 5),
//       inputValue: props.item.quantity,
//       updateButtonVisisble: props.item.quantity > 5,
//       media: undefined,
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     // if (Session.get('cartQtySet')) {
//     //   this.setState({
//     //     selectDisplay: nextProps.item.quantity > 5 ? false : true,
//     //     inputValue: nextProps.item.quantity
//     //   });
//     //   Session.set('cartQtySet', false);
//     // }
//   }

//   componentDidMount() {
//     // Meteor.call('cart/image', this.props.item.productId, (err, data) => {
//     //   if (data) {
//     //     this.setState({ media: data });
//     //   }
//     // });
//   }

//   static propTypes = {
//     handleImage: PropTypes.func,
//     handleLowInventory: PropTypes.func,
//     handleRemoveItem: PropTypes.func,
//     handleShowProduct: PropTypes.func,
//     item: PropTypes.object,
//     pdpPath: PropTypes.func,
//     handleCartQuantityChange: PropTypes.func,
//     limitedStocksItem: PropTypes.bool,
//     limitedStocksItemQty: PropTypes.number,
//     soldOutItem: PropTypes.bool,
//   };

//   handleClick = event => {
//     event.preventDefault();

//     if (typeof this.props.handleShowProduct === 'function') {
//       this.props.handleShowProduct(this.props.item);
//     }
//   };

//   // Arvind Jaiswal: Start
//   renderSize(strSize) {
//     if (typeof strSize !== 'string' || !strSize) return '--';
//     if (strSize.indexOf('_') > -1) return strSize.split('_')[1];
//     return strSize;
//   }

//   // Arvind Jaiswal: End
//   generateOption(i, item) {
//     if (item.quantity === i) {
//       return (
//         <option value={i} key={i}>
//           {i}
//         </option>
//       );
//     }
//     if (i > 5) {
//       const value = `> ${i - 1}`;
//       return (
//         <option value={i} key={i}>
//           {value}
//         </option>
//       );
//     }
//     return (
//       <option value={i} key={i}>
//         {i}
//       </option>
//     );
//   }

//   generateOptions(item) {
//     const content = [];
//     const limit = 6;
//     // if(item.variants && item.variants.inventoryQuantity) {
//     //   limit = item.variants.inventoryQuantity;
//     //   Math.round(limit / 10) * 10
//     // }
//     for (let i = 1; i <= limit; i++) {
//       content.push(this.generateOption(i, item));
//     }
//     return content;
//   }

//   render() {
//     const updateButtonStyle = {
//       display: this.state.updateButtonVisisble ? 'block' : 'none',
//     };

//     const {
//       handleLowInventory,
//       pdpPath,
//       handleImage,
//       handleRemoveItem,
//       decrementCartQuantity,
//       incrementCartQuantity,
//       item,
//       handleCartQuantityChange,
//       limitedStocksItem,
//       limitedStocksItemQty,
//       soldOutItem,
//       tax,
//     } = this.props;

//     // logic to get the img of the product for alert popup
//     let pro_img = `<img src='/resources/placeholder.gif' alt='' style='width:100px;' />`;
//     const imgSource = imageUrl('small', this.state.media);
//     if (this.state.media) {
//       pro_img = `<img src='${imgSource}' alt='' style='width:100px;' />`;
//     }
//     return (
//       <div>
//         <div className="table-body">
//           <div className="ds cart-drawer-wrapper">
//             <div className="image-container">
//               {this.state.media ? (
//                 <img src={imgSource} alt="" />
//               ) : (
//                 <img src="/resources/placeholder.gif" alt="" />
//               )}
//               {soldOutItem && (
//                 <span className="variant-qty-sold-out badge badge-danger child-variant-badge-label">
//                   <span>Sold out!</span>
//                 </span>
//               )}
//               {limitedStocksItem && (
//                 <span className="variant-qty-sold-out badge badge-warning child-variant-badge-label">
//                   <span>{limitedStocksItemQty} items left</span>
//                 </span>
//               )}
//             </div>
//             <div className="title-wrapper">
//               <a
//                 href={pdpPath(item)}
//                 data-event-action="product-click"
//                 data-event-value={item.productId}
//                 onClick={this.handleClick}
//               >
//                 {item.title}
//               </a>
//             </div>

//             <div className="size-wrapper border-left">
//               <div className="heading">Size:</div>
//               <div className="content">
//                 {this.renderSize(item.variantTitle)}
//               </div>
//             </div>

//             <div className="mrp-wrapper border-left">
//               <div className="heading">Base Price</div>
//               <div className="content">
//                 <i className="fa fa-rupee" />
//                 {tax ? tax.basePrice.toFixed(2) : null}
//               </div>
//             </div>

//             <div className="qty-wrapper border-left">
//               <div className="quantity-title">Qty: </div>
//               <div className="ui selection dropdown">
//                 {this.state.selectDisplay ? (
//                   <div className="input-group">
//                     <select
//                       defaultValue={item.quantity ? item.quantity : 0}
//                       value={this.state.inputValue}
//                       className="form-control"
//                       id="quantity-cart-item"
//                       onChange={event => {
//                         if (event.target.value > 5) {
//                           this.setState({ selectDisplay: false });
//                           this.setState({ updateButtonVisisble: true });
//                         } else {
//                           const { value } = event.target;
//                           handleCartQuantityChange(event.target.value, item)
//                             .then(() => {
//                               this.setState({ inputValue: value });
//                             })
//                             .catch(() => {
//                               this.setState({ inputValue: item.quantity });
//                             });
//                         }
//                       }}
//                     >
//                       {this.generateOptions(item)}
//                     </select>
//                   </div>
//                 ) : (
//                   <div className="input-group quantity-edit-wrapper">
//                     <input
//                       type="number"
//                       className="form-control input-number"
//                       value={this.state.inputValue}
//                       min="1"
//                       onChange={event => {
//                         this.setState({ inputValue: event.target.value });
//                       }}
//                     />
//                     <span className="input-group-btn" style={updateButtonStyle}>
//                       <button
//                         type="button"
//                         className="btn btn-number qty-update-btn"
//                         onClick={() => {
//                           handleCartQuantityChange(this.state.inputValue, item)
//                             .then(() => {})
//                             .catch(() => {
//                               this.setState({
//                                 inputValue: this.props.item.quantity,
//                               });
//                             });
//                         }}
//                       >
//                         OK
//                       </button>
//                     </span>
//                   </div>
//                 )}
//               </div>
//             </div>

//             <div className="total-wrapper border-left">
//               <div className="heading">Total</div>
//               <div className="content">
//                 <i className="fa fa-rupee" />
//                 {tax ? tax.totalBasePrice.toFixed(2) : null}
//               </div>
//             </div>
//             <div className="delete delete-wrapper">
//               <i
//                 id={item._id}
//                 onClick={event => {
//                   event.persist();
//                   const { cart } = getCart();
//                   if (
//                     cart &&
//                     cart.billing &&
//                     cart.billing[0] &&
//                     cart.billing[0].paymentMethod
//                   ) {
//                     Alerts.toast(
//                       'Dear Customer, kindly wait as your payment is in process.',
//                       'error',
//                     );
//                   } else {
//                     Alerts.alert(
//                       {
//                         showCancelButton: true,
//                         confirmButtonText: 'Add to Wishlist',
//                         cancelButtonText: 'Remove',
//                         customClass: 'asort-alert',
//                         html: `<div class='col-sm-12 row'><div class='col-sm-4'>${pro_img}</div>
//                                   <div class='col-sm-8 swag-content-message'>Do you want to add this item in your Wishlist?</div>
//                                   </div>`,
//                       },
//                       (isConfirm, dismiss) => {
//                         if (isConfirm) {
//                           const user = Meteor.user();
//                           Meteor.call(
//                             'addToWishlist',
//                             user._id,
//                             item.productId,
//                             (err, data) => {
//                               if (err) {
//                                 throw new Error(err);
//                                 Alerts.toast(
//                                   'Item already added in wishlist',
//                                   'error',
//                                 );
//                               }
//                               Session.set('wishListItemCount', data);
//                               Alerts.toast('Added to wishlist', 'success');
//                             },
//                           );
//                           handleRemoveItem(event, item);
//                         } else if (dismiss == 'cancel') {
//                           handleRemoveItem(event, item);
//                         }
//                       },
//                     );
//                   }
//                 }}
//                 className="fa fa-trash"
//               />
//             </div>
//           </div>
//         </div>

//         <div
//           className={isMobile ? 'ds-mobile-table-body' : 'mobile-table-body'}
//         >
//           <div className="upper-container">
//             <div className="image-container">
//               {this.state.media ? (
//                 <img src={imgSource} alt="" />
//               ) : (
//                 <img src="/resources/placeholder.gif" alt="" />
//               )}
//               {soldOutItem && (
//                 <span className="variant-qty-sold-out badge badge-danger child-variant-badge-label">
//                   <span className="sold-out">Sold out!</span>
//                 </span>
//               )}
//               {limitedStocksItem && (
//                 <span className="variant-qty-sold-out badge badge-warning child-variant-badge-label">
//                   <span className="limited-supply">
//                     {limitedStocksItemQty} items left
//                   </span>
//                 </span>
//               )}
//             </div>
//             <div className="header-container">
//               <div className="header-upper-container">
//                 <div className="product-title-wrapper">
//                   <a
//                     href={pdpPath(item)}
//                     data-event-action="product-click"
//                     data-event-value={item.productId}
//                     onClick={this.handleClick}
//                   >
//                     {item.title}
//                   </a>
//                 </div>
//                 <div className="icons-wrapper">
//                   <div className="wishlist-icon" />
//                   <div className="delete-icon">
//                     <i
//                       id={item._id}
//                       onClick={event => {
//                         event.persist();
//                         const { cart } = getCart();
//                         if (
//                           cart &&
//                           cart.billing &&
//                           cart.billing[0] &&
//                           cart.billing[0].paymentMethod
//                         ) {
//                           Alerts.toast(
//                             'Dear Customer, kindly wait as your payment is in process.',
//                             'error',
//                           );
//                         } else {
//                           Alerts.alert(
//                             {
//                               showCancelButton: true,
//                               confirmButtonText: 'Add to Wishlist',
//                               cancelButtonText: 'Remove',
//                               customClass: 'asort-alert',
//                               html: `<div className='col-sm-12 row'><div className='col-sm-4'>${pro_img}</div>
//                                 <div className='col-sm-8 swag-content-message'>Do you want to add this item in your Wishlist?</div>
//                                 </div>`,
//                             },
//                             (isConfirm, dismiss) => {
//                               if (isConfirm) {
//                                 const user = Meteor.user();
//                                 Meteor.call(
//                                   'addToWishlist',
//                                   user._id,
//                                   item.productId,
//                                   (err, data) => {
//                                     if (err) {
//                                       throw new Error(err);
//                                       Alerts.toast(
//                                         'Item already added in wishlist',
//                                         'error',
//                                       );
//                                     }
//                                     Session.set('wishListItemCount', data);
//                                     Alerts.toast(
//                                       'Added to wishlist',
//                                       'success',
//                                     );
//                                   },
//                                 );
//                                 handleRemoveItem(event, item);
//                               } else if (dismiss == 'cancel') {
//                                 handleRemoveItem(event, item);
//                               }
//                             },
//                           );
//                         }
//                       }}
//                       className="fa fa-times"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <div className="header-lower-container">
//                 <div className="mobile-wrapper-mrp">
//                   <span className="fa-icon-wrapper">
//                     <i className="fa fa-rupee" />
//                   </span>
//                   <span className="main-text">
//                     {tax ? tax.basePrice.toFixed(2) : null}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="lower-container">
//             <div className="content-lower-container">
//               <div className="mobile-wrapper-size border-right">
//                 <span>Size: </span>
//                 <span className="main-text">
//                   {this.renderSize(item.variantTitle)}
//                 </span>
//               </div>

//               <div className="mobile-wrapper-quantity  border-right">
//                 <div className="quantity-title">Qty: </div>
//                 <div className="ui selection dropdown">
//                   {this.state.selectDisplay ? (
//                     <div className="input-group">
//                       <select
//                         defaultValue={item.quantity ? item.quantity : 0}
//                         className="form-control"
//                         value={this.state.inputValue}
//                         id="quantity-cart-item"
//                         onChange={event => {
//                           if (event.target.value > 5) {
//                             this.setState({ selectDisplay: false });
//                             this.setState({ updateButtonVisisble: true });
//                           } else {
//                             const { value } = event.target;
//                             handleCartQuantityChange(event.target.value, item)
//                               .then(() => {
//                                 this.setState({ inputValue: value });
//                               })
//                               .catch(() => {
//                                 this.setState({ inputValue: item.quantity });
//                               });
//                           }
//                         }}
//                       >
//                         {this.generateOptions(item)}
//                       </select>
//                     </div>
//                   ) : (
//                     <div className="input-group quantity-edit-wrapper">
//                       <input
//                         type="number"
//                         className="form-control input-number"
//                         value={this.state.inputValue}
//                         min="1"
//                         onChange={event => {
//                           this.setState({ inputValue: event.target.value });
//                         }}
//                       />
//                       <span
//                         className="input-group-btn"
//                         style={updateButtonStyle}
//                       >
//                         <button
//                           type="button"
//                           className="btn btn-number qty-update-btn"
//                           onClick={() => {
//                             handleCartQuantityChange(
//                               this.state.inputValue,
//                               item,
//                             )
//                               .then(() => {})
//                               .catch(() => {
//                                 this.setState({
//                                   inputValue: this.props.item.quantity,
//                                 });
//                               });
//                           }}
//                         >
//                           OK
//                         </button>
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//               <div className="mobile-wrapper-total-mrp">
//                 <span className="fa-icon-wrapper">
//                   <i className="fa fa-rupee" />
//                 </span>
//                 <span className="main-text">
//                   tax ? tax.totalBasePrice.toFixed(2) : null }
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default DSCartItems;
