import React from "react";
import { withRouter } from "react-router-dom";
const Router = window.ReactionRouter;

const goToBrandPage = (brandSlug, isDirectLink = true) => {
  if (isDirectLink) {
    window.scrollTo(0, 0);
    return Router.go(brandSlug);
  } else {
    window.scrollTo(0, 0);
    return Router.go("/", { slug: brandSlug });
  }
};

const Link = withRouter((props) => {
  const { history, children, slug, isDirectLink = true, style = {}, className = "" } = props;
  return (
<span className={className} onClick={() => {
  history.push(slug)
}} style={{ cursor: "pointer", ...style }}>
  {children}
</span>
)});

export default Link;
