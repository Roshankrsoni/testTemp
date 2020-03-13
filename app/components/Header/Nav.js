import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
// import NavBar from './NavBar';
// import HeaderLink from './HeaderLink';
// import messages from './messages';
import { Link } from 'react-router-dom';
import NavBarItem from './navbarItem';
import { isMobile } from 'react-device-detect';
import { CDN_BASE_URL } from '../../api_constants';
import $ from 'jquery';

export class TopMenus extends Component {
  render() {
    const { path, menuConfig = [] } = this.props;
    const topMenuConfig = menuConfig.length > 0 && menuConfig[0]||[];

    // const items = topMenuConfig.map(this.generateItem);
    const topMenus = (
      // <div className="my-navbar">
      <ul className="sf-menu">
        {topMenuConfig.map((item, i) => {
          if (item.subMenuConfig !== undefined && !item.isAuthenticatedLink) {
            return (
              <NavBarItem
                key={i}
                text={item.name}
                url={item.path}
                submenu={item.subMenuConfig}
                hotCategories={item.hotCategories}
                index={i}
              />
            );
          }
          // authnticated link logic implemented only for top level menu linkTarget
          // If there is key in item for isAuthenticatedLink then check the value true/false
          // if (item.isAuthenticatedLink !== undefined) {
          // //   let user = Accounts.findOne({ userId: Meteor.userId() });
          //   // If link is for only authenticated user and user is logged in then render the link
          //   if (item.isAuthenticatedLink && user && user.username) {
          //     if (item.onClick && typeof item.onClick === "function") {
          //       return <li key={i}><a title={item.title} href="javascript:void(0);" onClick={() => item.onClick()} className="my-nodrop">{item.name}</a></li>
          //     } else if (item.path.indexOf("http://") > -1 || item.path.indexOf("https://") > -1) {
          //       return <li key={i}><a target={item.linkTarget} href={item.path} className="my-nodrop">{item.name}</a></li>
          //     } else {
          //       return <li key={i}><Link target={item.linkTarget} to={item.path} className="my-nodrop">{item.name}</Link></li>
          //     }
          //   }
          // } else {
          //   if (item.path.indexOf("http://") > -1 || item.path.indexOf("https://") > -1) {
          //     return <li key={i}><a target={item.linkTarget} href={item.path} className="my-nodrop">{item.name}</a></li>
          //   } else {
          //     return <li key={i}><Link target={item.linkTarget} to={item.path} className="my-nodrop">{item.name}</Link></li>
          //   }
          // }
        })}
      </ul>
      // </div>
    );
    return topMenus;
  }
}

export class MainTopMenu extends Component {
  render() {
    return (
      <nav>
        <div className="mobile-nav">
          <div className="ui large secondary  pointing menu">
            <label htmlFor="sideMenuOpen" className="toc item">
              <i className="fa fa-bars" />
            </label>
            <div className="logo">
              <Link to="/">
                <img src="../../assets/images/logo-mark.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="item mobile-search">
            <li className="searchMBar">
              <a
                href="javascript:void(0);"
                onClick={() => this.props.openSearch()}
              >
                <div className="ui icon input">
                  <input type="text" placeholder="" />
                  <i className=" link icon">
                    <img src="../../assets/images/search.png" alt="" />
                  </i>
                </div>
              </a>
            </li>
            <li>
              <Link to="/wishlist">
                <img src="../../assets/images/like.png" alt="" />
              </Link>
            </li>
            <li>{this.props.cart}</li>
          </div>
        </div>
      </nav>
    );
  }
}

function closeSideMenu() {
  $('#sideMenuOpen').prop('checked', false);
}

/**
 * function to render the category menu by product section
 */
function categoryMenuByProduct(menuList, path) {
  if (menuList.shopbyproduct !== undefined) {
    return menuList.shopbyproduct.subMenu.map((item, key) => {
      return (
        <div key={key} className={path === item.path ? 'active' : ''}>
          <Link to={item.path} onClick={closeSideMenu}>
            {item.product}
          </Link>
        </div>
      );
    });
  } else return null;
}

/**
 * function to render the category menu by occasion section
 */
function categoryMenuByOccassion(menuList, path) {
  if (menuList.shopbyoccasion !== undefined) {
    return menuList.shopbyoccasion.subMenu.map((item, key) => {
      return (
        <div key={key} className={path === item.path ? 'active' : ''}>
          <Link to={item.path} onClick={closeSideMenu}>
            <img
              className="occasion-image-mob"
              src={CDN_BASE_URL + item.imgsrc}
            />
            <span>{item.occasion}</span>
          </Link>
        </div>
      );
    });
  } else return null;
}

export class Sidemenu extends Component {
  componentDidMount() {
    // This is the logic to hide/show the dub menus on click of main item
  }

  render() {
    // let user = Accounts.findOne({ userId: Meteor.userId() });
    // let userName = Meteor.user() && Meteor.user().username ? Meteor.user().username : '';

    // let fcid = '';
    // if (userName && Session.get('asortUsername') !== undefined) {
    //   userName = Session.get('asortUsername');
    //   fcid = '(' + Session.get('asortUserFCID') + ')';
    // }
    const { path, menuConfig = [] } = this.props;
    const topMenuConfig = menuConfig.length > 0 && menuConfig[0]||[];

    topMenuConfig.map((item, index) => {
      let myindex = index;
      let id = `#menu_${index}`;
      let submenuId = `#submenu_${index}`;
      $(id).click(function() {
        $(this)
          .parent()
          .siblings('.item')
          .each(function(ind) {
            $(this)
              .find('.active')
              .removeClass('active');
            $(this)
              .find('.content')
              .hide();
          });
        $(this).toggleClass('active');
        $(submenuId).toggle(100, 'linear');
      });
      if (
        item.subMenuConfig !== undefined &&
        item.subMenuConfig.subMenu.length > 0
      ) {
        item.subMenuConfig.subMenu.map((subMenu, i) => {
          let idd = `#category_${myindex}_${i}`;
          let categoryMenuId = `#subCategory_${myindex}_${i}`;
          $(idd).click(function() {
            $(this).toggleClass('active');
            $(categoryMenuId).toggle(100, 'linear');
          });
        });
      }
    });

    const topMenus = (
      <div
        id="sideMenubar"
        className="ui vertical sidebar menu accordion nav-drop left "
      >
        {/* {userName ? (<div className="userDetail">
          <img src={`${CDN_BASE_URL}resources/home/user_side_menu-1.0.png`} style={{ "height": "15px", "margin": "0 8px 10px 0" }} />
          <div className="username">{userName}</div>
          <div>{fcid}</div>
        </div>) : null} */}

        <div className="sideBarlabel">Shop For</div>
        {topMenuConfig.map((item, index) => {
          let subMenu = '';
          let subMenuClass = 'title submenu-link';
          if (
            item.subMenuConfig !== undefined &&
            item.subMenuConfig.subMenu.length > 0
          ) {
            subMenu = (
              <div>
                {item.subMenuConfig.subMenu.map((v, i) => {
                  let header1 =
                    v.shopbyproduct !== undefined ? v.shopbyproduct.header : '';
                  if (v.shopbyproduct !== undefined) {
                    return (
                      <div key={i} className={path === v.path ? 'active' : ''}>
                        <div
                          id={`category_${index}_${i}`}
                          style={{ position: 'relative' }}
                        >
                          <span className="title">{v.name}</span>
                          <i className="down-arrow" />
                        </div>
                        <div
                          className="content ui"
                          style={{ display: 'none' }}
                          id={`subCategory_${index}_${i}`}
                        >
                          {categoryMenuByProduct(v, path)}
                          {v.shopbyoccasion ? (
                            <div>
                              <div className="header-wrapper">
                                <h4>{v.shopbyoccasion.header}</h4>
                              </div>
                              <div className="catalogue1">
                                {categoryMenuByOccassion(v, path)}
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className={path === v.path ? 'active' : ''}>
                        <div style={{ position: 'relative' }}>
                          <Link to={v.path} className="title">
                            {v.name}
                          </Link>
                        </div>
                      </div>
                    );
                  }
                })}
                {item.hotCategories !== undefined &&
                item.hotCategories.subMenu.length > 0 ? (
                  <div className="content-hot-categories">
                    <div className="header-wrapper">
                      <h4>{item.hotCategories.header}</h4>
                    </div>
                    <div className="catalogue1">
                      {categoryMenuByHotPics(item.hotCategories, path)}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          }
          if (item.onClick && typeof item.onClick === 'function') {
            if (item.isAuthenticatedLink !== undefined) {
              // let user = Accounts.findOne({ userId: Meteor.userId() });
              // If link is for only authenticated user and user is logged in then render the link
              if (
                item.isAuthenticatedLink &&
                user &&
                user.username &&
                !item.showOnlyOnDesktop
              ) {
                return (
                  <div
                    key={index}
                    className={path === item.path ? 'item active' : 'item'}
                  >
                    <div>
                      <a
                        onClick={() => item.onClick()}
                        className="title submenu-link"
                      >
                        {item.name}
                      </a>
                    </div>
                  </div>
                );
              }
              return null;
            }
            return (
              <div
                key={index}
                className={path === item.path ? 'item active' : 'item'}
              >
                <div>
                  <a
                    onClick={() => item.onClick()}
                    className="title submenu-link"
                  >
                    {item.name}
                  </a>
                </div>
              </div>
            );
          }
          if (
            item.path.indexOf('http://') > -1 ||
            item.path.indexOf('https://') > -1
          ) {
            if (item.isAuthenticatedLink !== undefined) {
              // let user = Accounts.findOne({ userId: Meteor.userId() });
              // If link is for only authenticated user and user is logged in then render the link
              if (item.isAuthenticatedLink && user && user.username) {
                return (
                  <div
                    key={index}
                    className={path === item.path ? 'item active' : 'item'}
                  >
                    <div>
                      <a
                        target={item.linkTarget}
                        className="title submenu-link"
                        href={item.path}
                      >
                        {item.name}
                      </a>
                      <div
                        className="content ui"
                        id={`submenu_${index}`}
                        style={{ display: 'none' }}
                      >
                        {subMenu}
                      </div>
                    </div>
                  </div>
                );
              }
            } else {
              return (
                <div
                  key={index}
                  className={path === item.path ? 'item active' : 'item'}
                >
                  <div>
                    <a
                      target={item.linkTarget}
                      className="title submenu-link"
                      href={item.path}
                    >
                      {item.name}
                    </a>
                    <div
                      className="content ui"
                      id={`submenu_${index}`}
                      style={{ display: 'none' }}
                    >
                      {subMenu}
                    </div>
                  </div>
                </div>
              );
            }
          } else {
            return (
              <div
                key={index}
                className={path === item.path ? 'item active' : 'item'}
              >
                <div id={`menu_${index}`} style={{ position: 'relative' }}>
                  <span className={subMenuClass}>{item.name}</span>
                  <i className="down-arrow" />
                </div>
                <div
                  className="content ui"
                  id={`submenu_${index}`}
                  style={{ display: 'none' }}
                >
                  {subMenu}
                </div>
              </div>
            );
          }
        })}
        {/* {
          user && user.username ?
            (<div key="signout" className="item">
              <div>
                <a onClick={(redirectHome = false) => logoutUser(redirectHome)} className="title submenu-link" >Sign Out</a>
              </div>
            </div>) : null
        } */}
      </div>
    );
    return topMenus;
  }
}

export class TopMessageBanner extends Component {
  render() {
    if (isMobile) {
      return null;
    } else {
      return (
        <div className="ui top-sign">
          <div className="ui massage">{this.props.SignupAndSignIn}</div>
        </div>
      );
    }
  }
}
