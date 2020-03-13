import React, { Component } from 'react';
import { NavBarLink } from './navbarLink';
import CustomSubMenus from './NavMenus';

// eslint-disable-next-line react/prefer-stateless-function
class NavBarItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeClass: '',
      shopByCategoryClass: 'activelink',
    };
  }

  generateLink() {
    // Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
    // Single responsibility principles tell us that it our "Item" should not handle this.
    return (
      <NavBarLink
        url={this.props.url}
        text={this.props.text}
        key={this.props.index}
      />
    );
  }

  generateSubmenu() {
    // We generate a simple Navbar (the parent).
    // Spoilers: it takes items as its argument.
    return (
      <CustomSubMenus
        MenuConfig={this.props.submenu}
        hotCategories={this.props.hotCategories}
        shopByCategoryClass={this.state.shopByCategoryClass}
        key={`${this.props.index}${this.props.index}`}
      />
    );
  }

  generateContent() {
    const content = [this.generateLink()];
    if (this.props.submenu) {
      // If there is a submenu in our data for this item
      // We add a generated Submenu to our content
      content.push(this.generateSubmenu());
    }
    return content;
  }

  render() {
    const content = this.generateContent();

    function isValidURL(string) {
      var res = string.match(/(http(s)?:\/\/.)/g);
      return res !== null;
    }

    let hasHttp = isValidURL(this.props.url);
    let navBarItems;

    {
      hasHttp ? (
        navBarItems = <li>{content}</li>
      ) : (
        navBarItems = <li
          className={this.state.activeClass}
          onMouseOver={() =>
            this.setState({
              activeClass: 'active',
              shopByCategoryClass: 'activelink',
            })
          }
          onMouseOut={() => this.setState({ activeClass: '' })}
        >
          {content}
        </li>
      );
    }
    return navBarItems;
  }
}

export default NavBarItem;
