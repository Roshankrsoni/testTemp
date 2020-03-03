/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  }, 
  ourteam: {
  id: `${scope}.ourteam`,
  defaultMessage: 'Our Team',
  },
  aboutus: {
    id: `${scope}.aboutus`,
    defaultMessage: 'About',
  },
  compensationplan: {
    id: `${scope}.compensationplan`,
    defaultMessage: 'Compensation Plan'
  }, 
    rulesunauthorized:{
      id: `${scope}.rulesunauthorized`,
      defaultMessage: 'Unauthorized Distributors'
    },
    faq:{
      id: `${scope}.faq`,
      defaultMessage: 'FAQ'
    },
    contactus:{
      id: `${scope}.contactus`,
      defaultMessage: 'Contact Us'
    },
    privacypolicy:{
      id: `${scope}.privacypolicy`,
      defaultMessage: 'Privacy Policy'
    }
  
});
