/**
 * @file Exposes the CUSTOMDOM object used to manipulate the document.
 * The functions are only meant to be used on the client.
 * @namespace CUSTOMDOM
 */

const CUSTOMDOM = {};

/**
 * @method setCustomMetaTag
 * @memberof CUSTOMDOM
 * @summary Sets/adds a meta tag to the document head
 * @param {Object} attributes - key/value pairs for tag attributes
 * @return {undefined} no return value
 */
CUSTOMDOM.setCustomMetaTag = (attributes) => {

  const currentMetaTag = document.querySelector(`meta[${attributes.findWithKey}="${attributes.findWithValue}"]`);

  // If tag exists, just update its content attribute
  if (currentMetaTag) {
    currentMetaTag.setAttribute("content", attributes.content);
    // currentMetaTag.setAttribute("data-metatag", "1");
    return;
  }

  // Otherwise, create a new meta tag element
  const newMetaTag = document.createElement("meta");

  newMetaTag.setAttribute(attributes.findWithKey, attributes.findWithValue);


  newMetaTag.setAttribute("content", attributes.content);
  // This attribute will be used to remove meta tags on route changes.

  //newMetaTag.setAttribute("data-metatag", "1");

  // Append to document head
  document.head.appendChild(newMetaTag);
};

CUSTOMDOM.removeCustomMetaTag = (attributes) => {
  const element = document.querySelector(`meta[${attributes.findWithKey}="${attributes.findWithValue}"]`);
  element.parentNode.removeChild(element);
};

export default CUSTOMDOM;
