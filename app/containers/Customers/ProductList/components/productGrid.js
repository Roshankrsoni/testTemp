import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Components } from "@reactioncommerce/reaction-components";
// import { ReactionProduct } from "/lib/api";
import LoadingIndicator from '../../../../components/LoadingIndicator';
import ProductGridItem from './productGridItem';

class DsProductGridCustomer extends Component {
  static propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool
    // shopCurrencyCode: PropTypes.string.isRequired
  };

  // render the product grid
  renderProductGrid(products, shopCurrencyCode) {
    const currentTagId = 'men';

    if (Array.isArray(products)) {
      return products.map((product, index) => {
        const added = false;
        return (
          <ProductGridItem
            shopCurrencyCode={shopCurrencyCode}
            product={product}
            position={
              (product.positions && product.positions[currentTagId]) || {}
            }
            key={product._id}
            userStoreId={this.props.userStoreId}
            showStoreButton={!!this.props.userStoreId}
            added={!!added}
          />
        );
      });
    }

    return (
      <div className="row">
        <div className="text-center">
          <h3>
          No Products Found
            {/* <Components.Translation defaultValue="No Products Found" i18nKey="app.noProductsFound" /> */}
          </h3>
        </div>
      </div>
    );
  }

  render() {
    // if (this.props.loading) {
    //   return <LoadingIndicator />
    // }
    return (
      <div className="container-main">
        <div className="product-grid">
          <ul
            className="product-grid-list list-unstyled"
            id="product-grid-list"
          >
            {this.renderProductGrid(
              this.props.products,
              this.props.shopCurrencyCode,
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default DsProductGridCustomer;
