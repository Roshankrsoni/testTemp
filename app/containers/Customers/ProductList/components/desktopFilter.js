import React, { Component } from 'react';

class DesktopFilter extends Component {
  onChange = event => {
    event.stopPropagation();
  };

  /**
   * Render the filter
   */
  filter(filterArray, name, selectedFilter) {
    if (filterArray.length) {
      return (
        <div key={name}>
          <hr className="fil-sep" />
          <div className="wrap-collabsible">
            <input
              id={`collapsible_${name}`}
              className="toggle-checkbox"
              name="coll"
              type="checkbox"
              defaultChecked
            />
            <label htmlFor={`collapsible_${name}`} className="lbl-toggle">
              {this.props.filterMapped[name]}
            </label>
            <div className="collapsible-content">
              <div className="content-inner">
                <ul>
                  {filterArray.map((filter, key) => {
                    let checked = selectedFilter && selectedFilter.includes(filter.name) ? true : false;
                    let queryFilter = {};
                    if (name === "price_label") {
                      const price = filter.name.split("-");
                      return (<div key={key}>
                        <li
                          onClick=
                          {
                            (event) => {
                              this.props.handleSort(event, name, filter.name)
                            }
                          }
                        >
                          <input type="checkbox"
                            checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                            onChange={(event) => this.onChange(event)}
                          />
                          &#8377;
                            {price[0]}
                          &nbsp;to&nbsp;
                           &#8377;
                            {price[1]}&nbsp;&nbsp;
                            <label>({filter.count})</label>
                        </li>
                      </div>);
                    } if (name === "sort") {
                      return (<div key={key}>
                        <li
                          onClick=
                          {
                            (event) => {
                              if (!checked) {
                                queryFilter = {
                                  sort_by: filter.sort_by,
                                  sort_order: filter.sort_order
                                }
                              }
                              this.props.handleSort(event, name, filter.name, queryFilter)
                            }
                          }
                        >
                          <input type="checkbox"
                            checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                            onChange={(event) => this.onChange(event)}
                          />
                          {filter.name}
                        </li>
                      </div>);
                    }
                    return (<div key={key}>
                      <li
                        onClick=
                        {
                          (event) => {
                            this.props.handleSort(event, name, filter.name)

                            // this.props.onClick(event, name, filter.name)
                          }
                        }
                      >
                        <input type="checkbox"
                          checked={selectedFilter && selectedFilter.includes(filter.name) ? true : false}
                          onChange={(event) => this.onChange(event)}
                        />
                        {filter.name}&nbsp;&nbsp;<label>({filter.count})</label>
                      </li>
                    </div>);

                  })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    if (window.screen.width < 449) {
      return null;
    }
    const { filters } = this.props.data;
    const sort_filter = {
      sort: [
        {
          name: 'Price : Low To High',
          sort_by: 'price',
          sort_order: 'asc',
          value: 'Price : Low',
        },
        {
          name: 'Price : High To Low',
          sort_by: 'price',
          sort_order: 'desc',
          value: 'Price : High',
        },
      ],
    };
    const filterList = Object.keys(filters).sort();
    let showClear = false;
    for (const filter in this.props.selectedFilter) {
      if (this.props.selectedFilter[filter] != undefined) {
        showClear = true;
        break;
      }
    }

    return (
      <div>
        {this.props.loading ? null : (
          <div className="filter-part">
            <label className="filter-head">FILTERS</label>
            {showClear ? (
              <span>
                <hr className="vertical-div" />
                <label
                  className="filter-head filter-head-clr"
                  onClick={() => this.props.handleOnClear()}
                >
                  {' '}
                  CLEAR
                </label>
              </span>
            ) : null}
            {Object.keys(sort_filter).map(filter =>
              this.filter(
                sort_filter[filter],
                filter,
                this.props.selectedFilter[filter],
              ),
            )}
            {filterList.map(filter =>
              this.filter(
                filters[filter],
                filter,
                this.props.selectedFilter[filter],
              ),
            )}
          </div>
        )}
      </div>
    );
  }
}

export default DesktopFilter;
