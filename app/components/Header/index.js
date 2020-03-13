// import { Link } from "/imports/plugins/core/router/lib/router";
import { Link } from 'react-router-dom';
import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { TopMenus, MainTopMenu, Sidemenu, TopMessageBanner } from './Nav';
// import MainDropdown from './mainDropdown';
import './navbar.less';
import { createStructuredSelector } from 'reselect';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { getMenuList } from './actions';
import reducer from './reducer';
import saga from './saga';
import { makeSelectMenuData } from './selectors';

import { CDN_BASE_URL } from '../../api_constants';

// eslint-disable-next-line react/prefer-stateless-function
class SignupAndSignIn extends React.Component {
  render() {
    return (
      <span>
        <div className="accounts">
          <div className="accounts dropdown" role="menu">
            <div id="dropdown-test" className="accounts-dropdown open">
              <div
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-delay="1000"
                aria-expanded="true"
              >
                <span>SIGN IN</span>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
// const CDN_BASE_URL = process.env.CDN_BASE_URL;

// eslint-disable-next-line react/prefer-stateless-function
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navBarVisible: false,
      searchModalOpen: false,
    };
  }

  static defaultProps = {
    visibility: {
      hamburger: true,
      brand: true,
      tags: true,
      search: true,
      notifications: true,
      languages: true,
      currency: true,
      mainDropdown: true,
      cartContainer: true,
    },
  };

  componentDidMount() {
    this.setState({ searchModalOpen: false });

    /**
     * Menu set & get from @Localstorage
     * Menu set & expires is every 15 Minutes
     * newMenuConfig will have all the data
     **/
    var hours = 1 / 4;
    var now = new Date().getTime();

    let getAllMenu = localStorage.getItem('newMenuConfig');
    let valueTm = JSON.parse(getAllMenu);
    let setupTime;

    if (valueTm == null) {
      this.props.getMenuList();
    } else {
      setupTime = valueTm[1][0].timeStamp;
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear();
        this.props.getMenuList();
      }
    }
  }

  componentWillReceiveProps() {
    this.setState({ searchModalOpen: false });
  }

  toggleNavbarVisibility = () => {
    const isVisible = this.state.navBarVisible;
    this.setState({ navBarVisible: !isVisible });
    document.querySelectorAll('.pusher').toggle('dimmed');
  };

  handleCloseNavbar = () => {
    this.setState({ navBarVisible: false });
  };

  handleOpenSearchModal = () => {
    // Session.set("openModal", true);
    this.setState({ searchModalOpen: true });
  };

  handleCloseSearchModal = () => {
    // Session.set("openModal", false);
    this.setState({ searchModalOpen: false });
  };

  renderLanguage() {
    return (
      <div className="languages hidden-xs">
        {/* <Components.LanguageDropdown /> */}
      </div>
    );
  }

  renderSearchButton() {
    // if (this.props.searchEnabled) {
    return (
      <div className="ui icon input">
        <i title="Search" className=" link icon">
          <a onClick={this.handleOpenSearchModal}>
            <img src={`${CDN_BASE_URL}resources/images/search.png`} alt="" />
          </a>
        </i>
        {/* <Components.SearchSubscriptionCustom
          open={this.state.searchModalOpen}
          onClose={this.handleCloseSearchModal}
          />*/}
      </div>
    );
    // }
  }

  renderCartContainerAndPanel() {
    return (
      <div title="Cart" className="cart-container">
        <div className="cart">
          <a>
            <img src="../../../assets/images/cart.png" alt="" />
            <span className="badge" />
          </a>
        </div>

        {/* <div className="cart-alert" style={{ backgroundColor: '#fd9b57' }}>
          <Components.CartPanel />
        </div> */}
      </div>
    );
  }

  renderWishListItemsCount() {
    if (this.props.itemsCount) {
      return <span className="badge">{this.props.itemsCount}</span>;
    }
  }

  renderMainDropdown() {
    return (
      <span> Signin </span>
      // <MainDropdown />
    );
  }

  // renderHamburgerButton() {
  //   return (
  //     <div className="showmenu"><Components.Button icon="bars" onClick={this.toggleNavbarVisibility} /></div>
  //   );
  // }

  // renderTagNav() {
  //   return (
  //     <div className="menu">
  //       <Components.TagNav
  //         isVisible={this.state.navBarVisible}
  //         closeNavbar={this.handleCloseNavbar}
  //       >
  //         <Components.Brand />
  //       </Components.TagNav>
  //     </div>
  //   );
  // }

  render() {
    const customerLink = '/faq';
    let getAllMenu = localStorage.getItem('newMenuConfig');
    let valueTm = JSON.parse(getAllMenu);
    // const path = '';
    return (
      <div className="rui navbar1 asort-navbar" id="asort-navbar">
        <TopMessageBanner
          // isLogin={this.props.visibility.mainDropdown}
          SignupAndSignIn={
            <SignupAndSignIn
              visibilityDropDown={
                this.props.visibility.mainDropdown && this.renderMainDropdown()
              }
            />
          }
        />

        <Sidemenu menuConfig={valueTm || []} />

        <MainTopMenu
          cart={this.renderCartContainerAndPanel()}
          openSearch={this.handleOpenSearchModal}
          itemsCount={this.props.itemsCount}
        />

        {/* <MainTopMenu /> */}

        <header>
          <nav>
            <div className="ui secondary  menu container-fluid navbar ">
              <div className="right item">
                <SignupAndSignIn />

                <Link to={customerLink} className="nav-anchor-link">
                  Customer care
                </Link>
              </div>
              <Link to="/" className="active item desk-logo Site-Logo">
                <img
                  src="https://newcdn.asort.com/resources/logo-1.0.png"
                  alt="Asort"
                />
              </Link>
              <div className="middle menu">
                <div className="item navbar-nav">
                  <TopMenus menuConfig={valueTm || []} />
                </div>
                <div className="item menu-icons">
                  <ul>
                    <li>
                      {' '}
                      {this.props.visibility.search &&
                        this.renderSearchButton()}
                    </li>
                    <li>
                      <Link to="/wishlist">
                        <div>
                          <img
                            title="Wishlist"
                            src={`${CDN_BASE_URL}resources/images/like.png`}
                            alt=""
                          />
                          {this.renderWishListItemsCount()}
                        </div>
                      </Link>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          title="Notifications"
                          src={`${CDN_BASE_URL}resources/images/bell.png`}
                          alt=""
                        />
                      </a>
                    </li>
                    {/* <li><a href="javascript:;" ><img src="/resources/images/cart.png" alt=""/> {this.renderCartContainerAndPanel()}</a> </li> */}
                    <li>{this.renderCartContainerAndPanel()}</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    getMenuList: () => dispatch(getMenuList()),
  };
}

const mapStateToProps = createStructuredSelector({
  menuData: makeSelectMenuData(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: 'NavBar', reducer });
const withSaga = injectSaga({ key: 'NavBar', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  memo,
)(NavBar);
