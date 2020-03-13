import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { CDN_BASE_URL } from '../../api_constants';


class CustomSubMenus extends Component {
  constructor(props) {
    super(props);

    if(props.MenuConfig.subMenu[0]){
      this.state = {
      level: props.MenuConfig.subMenu[0].name,
      shopbyproduct: props.MenuConfig.subMenu[0].shopbyproduct,
      shopbyoccasion: props.MenuConfig.subMenu[0].shopbyoccasion,
      shopByCategoryClass: props.shopByCategoryClass,
    } }

    if(props.MenuConfig.subMenu[0] == null || props.MenuConfig.subMenu[0] == undefined){
      this.state = {
        level: null,
        shopbyproduct: null,
        shopbyoccasion: null,
        shopByCategoryClass: props.shopByCategoryClass,
    }

}


  }

  handleShopByProductAndOccasion(submenu, category, index) {
    if (index == 0) {
      this.setState({ shopByCategoryClass: 'activelink' });
    } else {
      this.setState({ shopByCategoryClass: '' });
    }
    const shopByProductAndOccasion = submenu.subMenu.filter(
      menu => menu.name == category,
    );
    const { shopbyproduct, shopbyoccasion } = shopByProductAndOccasion[0];
    this.setState({
      shopbyproduct,
      shopbyoccasion,
    });
  }

  renderShopByProduct() {
    if (this.state.shopbyproduct != undefined) {
      return (
        <div className="column col-sm-3 shopbyproduct-wrapper">
          <div className="level-title-wrapper">
            <span>{this.state.shopbyproduct.header}</span>
          </div>
          {this.state.shopbyproduct.subMenu.map((item, i) => (
            <Link key={i} to={item.path}>
              {item.product}
            </Link>
          ))}
        </div>
      );
    }
    return <div />;
  }

  renderShopByOccasion() {
    if (this.state.shopbyoccasion != undefined) {
      return (
        <div className="col-sm-6 column occasion-wrapper">
          <div className="level-title-wrapper">
            <span>{this.state.shopbyoccasion.header}</span>
          </div>
          <div className="occasion-wrapper-items col-sm-12">
            {this.state.shopbyoccasion.subMenu.map((item, i) => (
              <div key={i} className="occasion-wrapper-item col-sm-3">
                <img
                  className="occasion-image"
                  src={`https://newcdn.asort.com/${item.imgsrc}`}
                />
                <Link to={item.path}>{item.occasion}</Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return <div />;
  }

  renderHotPics(hotCategories) {
    if (hotCategories != undefined) {
      return (
        <div className="col-sm-6 column occasion-wrapper">
          <div className="level-title-wrapper">
            <span>{hotCategories.header}</span>
          </div>
          <div className="occasion-wrapper-items col-sm-12">
            {hotCategories.subMenu.map((item, i) => (
              <div key={i} className="occasion-wrapper-item col-sm-3">
                <img className="occasion-image" src={CDN_BASE_URL + item.imgsrc} />
                <Link to={item.path}>{item.occasion}</Link>
              </div>
            ))}
          </div>
        </div>
      );
    }
    return <div />;
  }

  render() {
    const subMenuConfig = this.props.MenuConfig;

    const subMenus = (
      <div className="sf-mega">
        <div className="row col-sm-12">
          <div className="column col-sm-3 category-wrapper">
            <div className="level-title-wrapper">
              <span>{subMenuConfig.header}</span>
            </div>
            {subMenuConfig.subMenu.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={i == 0 ? this.state.shopByCategoryClass : ''}
                onMouseOver={event =>
                  this.handleShopByProductAndOccasion(
                    subMenuConfig,
                    event.target.text,
                    i,
                  )
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          {this.renderShopByProduct()}
          {this.renderShopByOccasion()}
          {this.renderHotPics(this.props.hotCategories)}
        </div>
      </div>
    );

    if(subMenuConfig.subMenu.length > 0){
    return subMenus;
    }
    return null;
  }
}

export default CustomSubMenus;
