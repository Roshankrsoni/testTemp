// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { isMobile } from 'react-device-detect';
// import CartItem from '../CartItem';

// // eslint-disable-next-line react/prefer-stateless-function
// class DSCartDrawer extends Component {
//   static propTypes = {
//     handleCheckout: PropTypes.func,
//     handleImage: PropTypes.func,
//     handleRemoveItem: PropTypes.func,
//     handleShowProduct: PropTypes.func,
//     pdpPath: PropTypes.func,
//     productItems: PropTypes.array,
//     handleCartQuantityChange: PropTypes.func,
//     handleLowInventory: PropTypes.func,
//     soldOutItems: PropTypes.array,
//     limitedStocks: PropTypes.array,
//   };

//   render() {
//     return (
//       <div
//         className={
//           isMobile
//             ? 'ds-cart cart product-description container-fluid'
//             : 'cart product-description container-fluid'
//         }
//       >
//         <div className="ui cart-section">
//           <div className="twelve wide column">
//             <div className="section">
//               <h4 className="section-header">Cart</h4>
//               <hr />
//               <div className="cart-table">
//                 {this.props.productItems.map((item, index) => {
//                   const tax = this.props.taxes.filter(
//                     product =>
//                       product.productId === item.productId &&
//                       product.optionTitle === item.optionTitle,
//                   )[0];
//                   const limitedStockItem = this.props.limitedStocks.find(
//                     itm => itm.item.variantId === item.variantId,
//                   );
//                   const limitedStocksItem = !!limitedStockItem;
//                   const limitedStocksItemQty = limitedStocksItem
//                     ? limitedStockItem.availableQty
//                     : null;
//                   const outOfStockItem = this.props.soldOutItems.find(
//                     itm => itm.variantId === item.variantId,
//                   );
//                   const soldOutItem = !!outOfStockItem;
//                   const key = `cart-item-${index}`;
//                   return (
//                     <div className="ds asort-cart-drawer" key={item._id}>
//                       <CartItem
//                         key={key}
//                         item={item}
//                         pdpPath={this.props.pdpPath}
//                         handleLowInventory={this.props.handleLowInventory}
//                         handleImage={this.props.handleImage}
//                         handleRemoveItem={this.props.handleRemoveItem}
//                         handleShowProduct={this.props.handleShowProduct}
//                         handleCartQuantityChange={
//                           this.props.handleCartQuantityChange
//                         }
//                         limitedStocksItem={limitedStocksItem}
//                         limitedStocksItemQty={limitedStocksItemQty}
//                         soldOutItem={soldOutItem}
//                         tax={tax}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//           <div
//             className={
//               isMobile ? 'asort-cart-drawer' : 'asort-cart-drawer-summary'
//             }
//           >
//             {<CustomCartSubTotal handleCheckout={this.props.handleCheckout} />}
//           </div>
//         </div>
//         <div className="cart-drawer-pagination" />
//       </div>
//     );
//   }
// }

// export default DSCartDrawer;
