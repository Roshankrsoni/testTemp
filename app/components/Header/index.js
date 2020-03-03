import React from 'react';
import { FormattedMessage } from 'react-intl';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink'; 
import messages from './messages';

function Header() {
  return (
    <div>
      <NavBar>
        <HeaderLink to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink> 
        <HeaderLink to="/our-team">
        <FormattedMessage {...messages.ourteam} />
        </HeaderLink>
        <HeaderLink to="/about-us">
        <FormattedMessage {...messages.aboutus} />
        </HeaderLink>
        <HeaderLink to="/compensation-plan">
        <FormattedMessage {...messages.compensationplan} />
        </HeaderLink>
        <HeaderLink to="/rules-unauthorized">
        <FormattedMessage {...messages.rulesunauthorized} />
        </HeaderLink> 
        <HeaderLink to="/faq">
        <FormattedMessage {...messages.faq} />
        </HeaderLink> 
        <HeaderLink to="/contact-us">
        <FormattedMessage {...messages.contactus} />
        </HeaderLink> 
        <HeaderLink to="/privacy-policy">
        <FormattedMessage {...messages.privacypolicy} />
        </HeaderLink>  
        
      </NavBar>
    </div>
  );
}

export default Header;
