/*
 * Customers
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { Component, memo } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import NotFound from 'components/NotFound';
import queryString from 'query-string';
import { getProductList } from './actions';
import { makeSelectProductsData, makeSelectFiltersData, makeSelectLoading, makeSelectCurrentPage } from './selectors';
import reducer from './reducer';
import saga from './saga';
import ProductGrid from './components/productGrid';
import DesktopFilter from './components/desktopFilter';
import MobileFilter from './components/mobileFilter';

import LoadingIndicator from '../../../components/LoadingIndicator';

import './stylesheets/css.less';
import './stylesheets/main.less';
import './stylesheets/ds-sheet/index.js';
import './stylesheets/productGrid.less';
import './stylesheets/custom.less';
import './stylesheets/main1.less';
import './stylesheets/product.less';
import '../base.less';

const filterMapped = {
  sort: 'Sort',
  brand_label: 'Brands',
  collection_label: 'Collections',
  color_label: 'Colour',
  discount_label: 'Discounts',
  leafcategory: 'Categories',
  occassion_label: 'Occassions',
  offers_label: 'Offers',
  size_label: 'Size',
  price_label: 'Price',
};
let selectedFilter = {
  sort: undefined,
  brand_label: undefined,
  collection_label: undefined,
  color_label: undefined,
  discount_label: undefined,
  leafcategory: undefined,
  occassion_label: undefined,
  offers_label: undefined,
  size_label: undefined,
  price_label: undefined,
};

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const slug = this.props.match.params.slug || '';
    const data = {
      category_name: slug,
    };
    const searchData = queryString.parse(this.props.location.search);
    if (searchData) {
      const { page, ...restFilter } = searchData;
      data.filters = restFilter;
    }
    this.props.getProductList(data, 1);

    const filters = Object.keys(selectedFilter);

    filters.map(filter => {
      if (searchData[filter]) {
        selectedFilter[filter] = [searchData[filter]];
      } else {
        if (filter == 'sort') {
          if (searchData["sort_order"] === "desc") {
            selectedFilter["sort"] = ["Price : High To Low"];
          } else if (searchData["sort_order"] === "asc") {
            selectedFilter["sort"] = ["Price : Low To High"];
          }
        } else selectedFilter[filter] = undefined;
      }
    });
  }

  /**
   * Render the Selected filters
   */

  renderSelectedFilter() {
    const filter = Object.keys(selectedFilter);

    return filter.map((filterItem, index1) => {
      if (selectedFilter[filterItem]) {
        return selectedFilter[filterItem].map((data, index2) => (
          <div
            className="wrap-collabsible-filt"
            key={`${index1}-${index2}`}
            onClick={event => this.onRemove(event, filterItem, data)}
          >
            <label className="lbl-toggle-filt">{data}</label>
          </div>
        ));
      }
    });
  }

  loadMoreProduct = (event) => {
    event.preventDefault();

    let { currentPage = 1 } = this.props;
    let sortQueryFilter = { page: currentPage };
    const slug = this.props.match.params.slug || '';
    let searchData = queryString.parse(this.props.location.search);
    const { sort_by, sort_order } = searchData;
    sortQueryFilter = { sort_by, sort_order };
    sortQueryFilter.page = ++currentPage;

    const params = this.generateQuery(sortQueryFilter);
    const { location: { pathname = '/' } } = this.props.history;
    this.props.history.push({
      pathname,
      search: params.slice(1),
    });
    searchData = queryString.parse(params.slice(1));
    this.props.getProductList({ category_name: slug, filters: searchData }, currentPage);

  };

  /**
     * Render load more button
     * @access protected
     * @return {Node|undefined} React node containing a `load more` button or undefined.
     */
  renderLoadMoreProductsButton() {
    const { productsData: { canLoadMoreProducts = false }, currentPage = 1, loading = false } = this.props;
    if (canLoadMoreProducts) {
      if (!loading) {
        return (
          <div className="product-load-more" id="productScrollLimitLoader">
            <button
              className="btn btn-inverse btn-block btn-lg"
              onClick={(event) => this.loadMoreProduct(event)}
            >
              Load more products
            </button>
          </div>
        );
      } else {
        return <LoadingIndicator />
      }
    }
  }

  /**
   * Render sort dropdown
   */
  renderSortDropDown() {
    return (
      <div className="sort-part" id="sort-part">
        <div className="filt-app-cont">
          {this.renderSelectedFilter()}
          <div className="clearfix" />
        </div>
        {/* <div className="wrap-collabsible-sort">
          <input
            id="collapsible-sort"
            className="toggle-checkbox"
            name="coll"
            type="checkbox"
          />
          <label htmlFor="collapsible-sort" className="lbl-toggle-sort">Sort By :&nbsp;
        <label htmlFor="collapsible-sort" className="rec-lab">{this.props.value}</label></label>
          <div className="collapsible-content-sort">
            <div className="content-inner">
              <ul>
                <li onClick={(event) => this.props.sort(event, "price", "asc", "Price : Low")}>Price : Low To High</li>
                <li onClick={(event) => this.props.sort(event, "price", "desc", "Price : High")}>Price : High To Low</li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    );
  }

  generateQuery(sortQueryFilter) {
    let filters = Object.keys(selectedFilter);
    let params = '';
    filters = filters.filter(filter => filter !== 'sort');
    filters.map(prop => {
      const length = selectedFilter[prop] ? selectedFilter[prop].length : 0;
      if (length) {
        if (length === 1) {
          params += `&${prop}=${selectedFilter[prop][0]}`;
        } else {
          params += `&${prop}=(`;
          selectedFilter[prop].map(filter => {
            if (selectedFilter[prop].indexOf(filter) === length - 1) {
              params += `${filter})`;
            } else {
              params += `${filter}, `;
            }
          });
        }
      }
    });
    for (const prop in sortQueryFilter) {
      if (sortQueryFilter[prop]) {
        params += `&${prop}=${sortQueryFilter[prop]}`;
      }
    }
    return params;
  }

  handleSort = (event, name, value, sortQueryFilter) => {
    event.preventDefault();

    const filters = Object.keys(selectedFilter);
    if (filters.indexOf(name) !== -1) {
      if (selectedFilter[name] !== undefined) {
        if (selectedFilter[name].indexOf(value) === -1) {
          selectedFilter[name] = [];
          selectedFilter[name].push(value);
        } else {
          const index = selectedFilter[name].indexOf(value);
          selectedFilter[name].splice(index, 1);
          selectedFilter[name] =
            selectedFilter[name].length > 0 ? selectedFilter[name] : undefined;
        }
      } else {
        selectedFilter[name] = [];
        selectedFilter[name].push(value);
      }
    }

    const slug = this.props.match.params.slug || '';
    const {
      location: { pathname = '/' },
    } = this.props.history;

    const params = this.generateQuery(sortQueryFilter);

    this.props.history.push({
      pathname,
      search: params.slice(1),
    });
    const searchData = queryString.parse(params.slice(1));
    this.props.getProductList({ category_name: slug, filters: searchData }, 1);

    window.scrollTo(0, 0)
  };

  onRemove = (event, name, data) => {
    event.preventDefault();

    let sortQueryFilter;
    const index = selectedFilter[name].indexOf(data);
    if (name == 'sort') {
      sortQueryFilter = undefined;
    }
    if (index > -1) {
      selectedFilter[name].splice(index, 1);
      selectedFilter[name] =
        selectedFilter[name].length > 0 ? selectedFilter[name] : undefined;

      if (selectedFilter.sort) {
        sortQueryFilter = {
          sort_by: 'price',
          sort_order: 'asc',
        };
        if (selectedFilter.sort[0] == 'Price : High To Low') {
          sortQueryFilter = {
            sort_by: 'price',
            sort_order: 'desc',
          };
        }
      }
      const slug = this.props.match.params.slug || '';
      const {
        location: { pathname = '/' },
      } = this.props.history;

      const params = this.generateQuery(sortQueryFilter);

      this.props.history.push({
        pathname,
        search: params,
      });
      const searchData = queryString.parse(params);
      this.props.getProductList({ category_name: slug, filters: searchData });
    }
  };

  handleOnClear = () => {
    selectedFilter = {
      sort: undefined,
      brand_label: undefined,
      collection_label: undefined,
      color_label: undefined,
      discount_label: undefined,
      leafcategory: undefined,
      occassion_label: undefined,
      offers_label: undefined,
      size_label: undefined,
      price_label: undefined,
    };
    const slug = this.props.match.params.slug || '';
    const {
      location: { pathname = '/' },
    } = this.props.history;
    this.props.history.push(pathname);
    this.props.getProductList({ category_name: slug });
  };

  render() {
    const { list = [], count = 0 } = this.props.productsData;
    const slug = this.props.match.params.slug || '';

    if (this.props.loading) {
      return <LoadingIndicator />
    }
    if (list.length == 0 && !this.props.loading) {
      return <NotFound title="No Products Found" />;
    }
    return (
      <>
        <Helmet>
          <title>Product List</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <div>
          <div className="ds-asort-product-list-container">
            <div className="grid-layout">
              <DesktopFilter
                data={{ filters: this.props.filtersData || {} }}
                filterMapped={filterMapped}
                loading={this.props.loading}
                selectedFilter={selectedFilter}
                handleSort={this.handleSort}
                handleOnClear={this.handleOnClear}
                handleFilters={filters => {
                  this.props.getProductList({ category_name: slug, filters });
                }}
              />
              <div className="product-list-part">
                {this.renderSortDropDown()}
                <div id="container-main">
                  <div id="productGridContainer">
                    <ProductGrid products={list} loading={this.props.loading} />
                  </div>
                  {this.renderLoadMoreProductsButton()}
                </div>
              </div>
              <MobileFilter
                data={{ filters: this.props.filtersData || {} }}
                product_count={count}
                filterMapped={filterMapped}
                selectedFilter={selectedFilter}
                loading={this.props.loading}
                handleSort={this.handleSort}
                handleOnClear={this.handleOnClear}
                handleFilters={filters => {
                  this.props.getProductList({ category_name: slug, filters });
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

ProductList.propTypes = {
  productsData: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  productsData: makeSelectProductsData(),
  filtersData: makeSelectFiltersData(),
  loading: makeSelectLoading(),
  currentPage: makeSelectCurrentPage()
});

export function mapDispatchToProps(dispatch) {
  return {
    getProductList: (data, page) => dispatch(getProductList(data, page)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'productList', reducer });
const withSaga = injectSaga({ key: 'productList', saga });

export default compose(
  withRouter,
  withReducer,
  withSaga,
  withConnect,
  memo,
)(ProductList);
