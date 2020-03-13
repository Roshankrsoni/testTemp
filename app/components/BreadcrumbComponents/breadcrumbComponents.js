import React, { Component } from "react";
import { withRouter } from "react-router-dom";
// import PropTypes from "prop-types";
// import { Components } from "@reactioncommerce/reaction-components";
// import { Reaction } from "/client/api";
// import { getTagIds as getIds } from "/lib/selectors/tags";

class BreadcrumbComponent extends Component {

  /**
   * Render component
   * @access protected
   * @return {Node} React node containing elements that make up the `Breadcrumb` component.
   */
  render() {
    let bread =  (
      <span className="ui breadcrumb">
        <span onClick={() => this.props.history.push("/")}>
          <span className="section">Home</span>
        </span>
        <span className="divider"> / </span>

        {this.props.breadcrumbs.map((item, index) => {
          return (
            <span key={index} style={{"display":"inline-flex"}}>
              <span onClick={() => this.props.history.push(item.path)}>
                <span className="section">{typeof item.name === "function" ? item.name() : item.name}</span>
              </span>
              <span className="divider"> / </span>
            </span>
          )
        })}

        <span className="active section">{this.props.active_path}</span>
      </span>
    );

    return (
      <div>
        {bread}
      </div>
    )
  }
}

export default withRouter(BreadcrumbComponent);
