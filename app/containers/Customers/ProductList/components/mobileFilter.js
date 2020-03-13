import React, { Component } from "react";
import LoadingIndicator from '../../../../components/LoadingIndicator';

class MobileFilter extends Component {

  onChange = (event) => {
    event.stopPropagation();
  }

  mobFilter(filterArray, name, selectedFilter) {
    return (
      <article>
        {
          filterArray.map((filter, key) => {
            let checked = selectedFilter && selectedFilter.includes(filter.name) ? true : false;
            let queryFilter = {};
            if (name === "price_label") {
              const price = filter.name.split("-");
              return (
                <div key={key} className="clr-1"
                  onClick=
                  {
                    (event) => {
                      sessionStorage.setItem("filterName", name);
                      this.props.handleSort(event, name, filter.name);
                    }
                  }
                >
                  <span>
                    <input type="checkbox"
                      checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                      onChange={(event) => this.onChange(event)}
                    />
                    &#8377;
                    {price[0]}
                    &nbsp;to&nbsp;
                     &#8377;
                    {price[1]}
                  </span>
                  <span>({filter.count})</span>
                </div>
              )
            } else if (name === "sort") {
              return (
                <div key={key} className="clr-1"
                  onClick=
                  {
                    (event) => {
                      sessionStorage.setItem("filterName", name);
                      if (!checked) {
                        queryFilter = {
                          sort_by: filter.sort_by,
                          sort_order: filter.sort_order
                        }
                      }
                      this.props.handleSort(event, name, filter.name, queryFilter);
                    }
                  }
                >
                  <span>
                    <input type="checkbox"
                      checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                      onChange={(event) => this.onChange(event)}
                    />
                    {filter.name}
                  </span>
                </div>
              )
            }
            else {
              return (
                <div key={key} className="clr-1"
                  onClick=
                  {
                    (event) => {
                      sessionStorage.setItem("filterName", name);
                      this.props.handleSort(event, name, filter.name);
                    }
                  }
                >
                  <span>
                    <input type="checkbox"
                      checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                      onChange={(event) => this.onChange(event)}
                    />
                    {filter.name}
                  </span>
                  <span>({filter.count})</span>
                </div>
              )
            }
          })
        }
      </article>
    );
  }

  render() {

    const { product_count = 0, data: { filters } } = this.props;
    if (window.screen.width >= 449) {
      return null;
    }
    const sort_filter = {
      "sort":
        [
          { name: "Price : Low To High", sort_by: "price", sort_order: "asc", value: "Price : Low" },
          { name: "Price : High To Low", sort_by: "price", sort_order: "desc", value: "Price : High" }
        ]
    };
    let filterList = (Object.keys(filters)).sort();
    let first = true;
    let showClear = false;
    for (let filter in this.props.selectedFilter) {
      if (this.props.selectedFilter[filter] != undefined) {
        showClear = true;
        break;
      }
    }

    const isOpen = sessionStorage.getItem("isChecked");
    return (
      <div>
        <input
          id="collapsible-mob-filt"
          className="toggle-checkbox"
          name="coll"
          type="checkbox"
          defaultChecked={isOpen}
        />
        <div className="mob-filt">
          <label className="filt-btn" htmlFor="collapsible-mob-filt"
            onClick={(event) => {
              if (isOpen) {
                document.getElementsByTagName("BODY")[0].style.overflow = "scroll";
              } else {
                document.getElementsByTagName("BODY")[0].style.overflow = "hidden";
              }
              sessionStorage.setItem("isChecked", !isOpen);
              sessionStorage.setItem("openModal", false);
            }}
          >
            <span><img src="/assets/images/sort&filter-1.0.png" style={{ "height": "15px", "marginBottom": "3px" }} />&nbsp;&nbsp;Sort & Filter</span>
            {
              showClear ?
                <button className="filt-clr-btn"
                  onClick={(event) => {
                    event.stopPropagation();
                    sessionStorage.setItem("isChecked", !isOpen);
                    this.props.handleOnClear();
                  }}>
                  Clear
                   </button>
                : null
            }
          </label>
          {this.props.loading && isOpen ?
            <LoadingIndicator /> :
            (
              <div className="collapsible-mob-filt-cont">
                <div className="content-inner">
                  <div className="filter-grid">
                    <div className="tabordion">
                      <div className="tab-section">
                        {
                          Object.keys(sort_filter).map((filter, index) => {
                            let isChecked = true;
                            if (sessionStorage.getItem("filterName")) {
                              isChecked = sessionStorage.getItem("filterName") === filter ? true : false;
                            }
                            return (<section key={-1}>
                              <input type="radio" name="sections" id={filter} defaultChecked={isChecked ? true : false} />
                              <label htmlFor={filter}>{"Sort"}</label>
                              {this.mobFilter(sort_filter[filter], filter, this.props.selectedFilter[filter])}
                            </section>);
                          })
                        }
                        {filterList.map(
                          (filter, index) => {
                            if (filters[filter].length) {
                              let isChecked = false;
                              if (sessionStorage.getItem("filterName")) {
                                isChecked = sessionStorage.getItem("filterName") === filter ? true : false;
                              }

                              return (
                                <section key={index}>
                                  <input type="radio" name="sections" id={filter} defaultChecked={isChecked ? true : false} />
                                  <label htmlFor={filter}>{this.props.filterMapped[filter]}</label>
                                  {this.mobFilter(filters[filter], filter, this.props.selectedFilter[filter])}
                                </section>
                              );
                            }
                          })
                        }
                      </div>
                    </div>
                    <label htmlFor="collapsible-mob-filt" className="shw-itm"
                      onClick={(event) => {
                        document.getElementsByTagName("BODY")[0].style.overflow = "scroll";
                        sessionStorage.setItem("isChecked", false);
                      }}
                    >Show {product_count} Items</label>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

export default MobileFilter;