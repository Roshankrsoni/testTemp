import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

// eslint-disable-next-line react/prefer-stateless-function
export class index extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="about reward giving signup compensation compensationWraper">
        <Helmet>
          <title>Compensation Plan</title>
          <meta
            name="description"
            content="DS.Asort offers a unique compensation plan to all its members who are engaged in direct sales. "
          />
        </Helmet>
        <div className="banner">
          <h2 className="banner-text">We are Asort</h2>
          <div className="title">
            <h3>Direct Sales Compensation Plan</h3>
            <p>
              DS.Asort offers a unique compensation plan to all its members who
              are engaged in direct sales.
            </p>
            <p>
              We pride ourselves on not only giving a different marketing
              experience but also creating a meaningful reward and earning
              ecosystem which facilitates growth and learning.
            </p>
            <p>
              Over a sustained growth period of many years, we have created
              opportunities for thousands of members to retail products and also
              create a community of other people who in turn can carry on this
              process further.
            </p>
            <p>
              Once you are a part of the DS.Asort direct sales community and you
              start building your own business team, you benefit by passing on
              your product knowledge and sales expertise to your team, so that
              they can perform better.
            </p>
            <p>DS.Asort only offers business opportunity not a job !</p>
          </div>
        </div>

        <div className="container-fluid values">
          <div className="structure">
            <h3 className="work">Core structure of our earning plans</h3>
            <p>
              Is based on the sale of the DS.Asort fashion and lifestyle
              products
            </p>
            <p>As your business grows, your reward earnings increase</p>
            <p>There are three ways to earn through our direct sales plan:</p>
          </div>

          <div className="card">
            <div className="value-card">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/retail.png"
                    alt=""
                  />
                </div>
                <h3>retail margins</h3>
              </div>
              <div className="card-content">
                <p>
                  Is fixed discount that is offered by DS.Asort basis your rank
                </p>
                <p>
                  As your rank increases , your retail margins also becomes
                  higher.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/performance.png"
                    alt=""
                  />
                </div>
                <h3>performance commissions</h3>
              </div>
              <div className="card-content">
                <p>Is given in recognition of the hard work and achievements</p>
                <p>
                  You can earn attractive amounts on products purchased for
                  resale by you and your team.
                </p>
              </div>
            </div>
          </div>
          <div className="card community-card">
            <div className="value-card ">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/promotion.png"
                    alt=""
                  />
                </div>
                <h3>rank promotion criteria</h3>
              </div>
              <div className="card-content">
                <h3>
                  {' '}
                  Moving up the ladder in the DS.Asort community requires
                  certain simple specifications, which can vary as per your
                  rank. To upgrade your ranks ,you need to
                </h3>
                <p>Do a certain amount of business </p>
                <p>
                  Develop specific ranks within your team as per rank
                  progression criteria
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid rank">
          <h3 className="rank-head"> rank promotion details</h3>
          <div className="divider">
            <div className="vl" />
            <div className="rank-img">
              <img
                src="https://cdn.asort.com/resources/images/rank1.png"
                alt=""
              />
            </div>
            <div className="rank-img">
              <img
                src="https://cdn.asort.com/resources/images/rank2.png"
                alt=""
              />
            </div>
            <div className="rank-img baron-img">
              <img
                src="https://cdn.asort.com/resources/images/rank3.png"
                alt=""
              />
            </div>
            <div className="rank-img count-img">
              <img
                src="https://cdn.asort.com/resources/images/rank4.png"
                alt=""
              />
            </div>
            <div className="rank-img marquis-img">
              <img
                src="https://cdn.asort.com/resources/images/rank5.png"
                alt=""
              />
            </div>
            <div className="rank-img duke-img">
              <img
                src="https://cdn.asort.com/resources/images/rank6.png"
                alt=""
              />
            </div>
            <div className="rank-img ">
              <img
                src="https://cdn.asort.com/resources/images/rank7.png"
                alt=""
              />
            </div>
          </div>
          <div className="rank-card">
            <div className="card-top">
              <h3>fashion consultant (FC)</h3>
            </div>
            <div className="card-content">
              <p>
                Congratulations - You’re now a part of the DS.Asort community!
                Signing up is free.
              </p>
            </div>
          </div>
          <div className="rank-card">
            <div className="card-top">
              <h3>Franchisee</h3>
            </div>
            <div className="card-content">
              <p>
                From an FC to ‘Franchisee’, your journey can be fast. All you
                need to know is generate a Sale equivalent of 30000 points*
                above.
              </p>
            </div>
          </div>
          <div className="rank-card baron-card">
            <div className="card-top">
              <h3>Baron</h3>
            </div>
            <div className="card-content">
              <p>
                To change your rank from Franchisee to Baron, you need to
                generate a sale equivalent to 150000 points* or develop 5
                Franchisees who have been sponsored by you. Once you do this,
                you’ll be a Baron.
              </p>
            </div>
          </div>
          <div className="rank-card">
            <div className="card-top">
              <h3>Count</h3>
            </div>
            <div className="card-content">
              <p>
                To move from Baron to Count , you need to develop 3 Barons who
                have been sponsored by you. Once this is acheived by you, you’ll
                be a ‘Count’.
              </p>
            </div>
          </div>
          <div className="rank-card marquis">
            <div className="card-top">
              <h3>Marquis</h3>
            </div>
            <div className="card-content">
              <h3>
                To become a Marquis from a Count , you need to fulfil the
                following conditions{' '}
              </h3>

              <p>Develop 5 Counts who have been sponsored by you.</p>
              <p>Submit the Challenge form</p>
              <p>
                Generate a Sale equivalent of 7312500 points* through your team
                within consecutive 90 days.
              </p>
              <h3>
                Once you have fulfil the above mentioned conditions, you will be
                a Marquis. a Marquis.
              </h3>
            </div>
          </div>
          <div className="rank-card  duke-card">
            <div className="card-top">
              <h3>duke</h3>
            </div>
            <div className="card-content">
              <h3>
                To upgrade your rank from Marquis to Duke , you need to fulfil
                the following conditions:
              </h3>

              <p>Develop 5 Marquises who have been sponsored by you</p>
              <p>Submit the Challenge form</p>
              <p>
                Generate a sale volume equivalent of 64687500 points* in
                consecutive 90 days.
              </p>
              <h3>
                Once you have fulfilled the above mentioned conditions , you’ll
                be a Duke.
              </h3>
            </div>
          </div>
          <div className="rank-card marquis-card">
            <div className="card-top">
              <h3>Arch Duke</h3>
            </div>
            <div className="card-content">
              <h3>
                Once you are a Duke, the next rank - Arch Duke- is the highest
                rank you can reach in our community. You can become an Arch Duke
                by fulfilling the following conditions:
              </h3>
              <p>Develop 5 Dukes who have been sponsored by you</p>
              <p>Submit the Challenge form</p>
              <p>
                Generate a Sale volume of 646875000 points * in consecutive days
              </p>
            </div>
          </div>
          <div className="rank-foot">
            <p>
              The benefits associated with above level are available with effect
              from subsequent day onwards, after that level is achieved as per
              the above compensation plan. * 3.75 Points = Re 1
            </p>
          </div>
          <hr />
        </div>
        <div className="container-fluid values details">
          <div className="card">
            <div className="value-card">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/profit.png"
                    alt=""
                  />
                </div>
                <h3>group profit</h3>
              </div>
              <div className="card-content">
                <p>
                  Is fixed discount that is offered by DS.Asort basis your rank
                </p>
                <p>
                  As your rank increases , your retail margins also becomes
                  higher.
                </p>
              </div>
            </div>
            <div className="value-card">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/bonus.png"
                    alt=""
                  />
                </div>
                <h3>group bonus</h3>
              </div>
              <div className="card-content">
                <p>Is given in recognition of the hard work and achievements</p>
                <p>
                  You can earn attractive amounts on products purchased for
                  resale by you and your team.
                </p>
              </div>
            </div>
          </div>
          <div className="card community-card">
            <div className="value-card ">
              <div className="card-top">
                <div className="card-icon">
                  <img
                    src="https://cdn.asort.com/resources/images/icon3.png"
                    alt=""
                  />
                </div>
                <h3>generation profit</h3>
              </div>
              <div className="card-content">
                <h3>
                  {' '}
                  Moving up the ladder in the DS.Asort community requires
                  certain simple specifications, which can vary as per your
                  rank. To upgrade your ranks ,you need to
                </h3>
                <p>Do a certain amount of business</p>
                <p>
                  Develop specific ranks within your team as per rank
                  progression criteria
                </p>
              </div>
            </div>
          </div>
          <div className="table-content">
            <table className="ui  celled table  unstackable center aligned">
              <thead>
                <tr>
                  <th colSpan="7">Performance Commision</th>
                </tr>
                <tr>
                  <th>Rank</th>
                  <th>
                    Maximum Group <br /> Profit/Discount
                  </th>
                  <th>
                    Generation Profit <br /> (Count)
                  </th>
                  <th>
                    Generation Profit <br /> (Marquis)
                  </th>
                  <th>Group Bonus </th>
                  <th>
                    Generation Profit <br /> (Duke)
                  </th>
                  <th>Potential Income </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Fashion <br /> Consultant{' '}
                  </td>
                  <td>10%</td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>10%</td>
                </tr>
                <tr>
                  <td>Franchisee </td>
                  <td>20%</td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>20%</td>
                </tr>
                <tr>
                  <td>Baron</td>
                  <td>29%</td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>29%%</td>
                </tr>
                <tr>
                  <td>Count</td>
                  <td>38%</td>
                  <td>12.5%</td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>50.5%</td>
                </tr>
                <tr>
                  <td>Marquis</td>
                  <td>41%</td>
                  <td>12.5%</td>
                  <td>5.5% </td>
                  <td>2% </td>
                  <td>
                    <img
                      src="https://cdn.asort.com/resources/images/faq-close.png"
                      alt=""
                    />{' '}
                  </td>
                  <td>61%</td>
                </tr>
                <tr>
                  <td>Duke</td>
                  <td>42%</td>
                  <td>12.5%</td>
                  <td>5.5% </td>
                  <td>2% </td>
                  <td>2%</td>
                  <td>64%</td>
                </tr>
                <tr>
                  <td> Arch Duke</td>
                  <td>43%</td>
                  <td>12.5%</td>
                  <td>5.5% </td>
                  <td>2% </td>
                  <td>2%</td>
                  <td>65%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="tab">
            <p>
              <sup>*</sup>Potential income = Personal sale and team sales
              volume.{' '}
            </p>
          </div>
          <div className="group-profit">
            <h3>Group Profit :</h3>
            <p>Group profit will be calculated on team sales.</p>
            <p>
              Group Profit is earned along one line sponsorship bby indiviuals
              of the rank of Franchisee and above.
            </p>
            <p>
              Only indiviuals in the up-line ranked higher thean teir down-line
              will be eligible to earn Group Profit.
            </p>
          </div>
          <div className="group-profit">
            <h3>Generation Profit :</h3>
            <p>Counts and above are eligible for Generation Profit</p>
            <p>
              After the First Count,Marquis or Duke form the piont of sale,each
              of the next five individuals od such rank in the up-line eligible
              for Generation Profit{' '}
            </p>
          </div>
          <div className="group-profit">
            <h3>Group Bonus :</h3>
            <p>
              Applicable onlyfor Marquis on sales generated from his perosonal
              team.
            </p>
          </div>
          <div className="profit-details">
            <h3>Generation Profit details</h3>
            <div className="table-content">
              <table className="ui  celled table  unstackable center aligned structured ">
                <thead>
                  <tr>
                    <th>Count Generation Profit</th>
                    <th>Direct 1</th>
                    <th>Direct 2</th>
                    <th>Direct 3</th>
                    <th>Direct 4</th>
                    <th>Direct 5</th>
                  </tr>
                  <tr>
                    <th>Gen 1</th>
                    <th>5%</th>
                    <th>5%</th>
                    <th>5%</th>
                    <th>5%</th>
                    <th>5%</th>
                  </tr>
                  <tr>
                    <th>Gen 2</th>
                    <th>1%</th>
                    <th>3%</th>
                    <th>3%</th>
                    <th>3%</th>
                    <th>3%</th>
                  </tr>
                  <tr>
                    <th>Gen 3</th>
                    <th />
                    <th>1%</th>
                    <th>2%</th>
                    <th>2%</th>
                    <th>2%</th>
                  </tr>
                  <tr>
                    <th>Gen 4</th>
                    <th />
                    <th />
                    <th>1%</th>
                    <th>1%</th>
                    <th>1.50%</th>
                  </tr>
                  <tr>
                    <th>Gen 5</th>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>1%</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-content">
              <table className="ui  celled table  unstackable center aligned structured ">
                <thead>
                  <tr>
                    <th>Marquis Generation Profit</th>
                    <th>Direct 1</th>
                    <th>Direct 2</th>
                    <th>Direct 3</th>
                    <th>Direct 4</th>
                    <th>Direct 5</th>
                  </tr>
                  <tr>
                    <th>Gen 1</th>
                    <th>2%</th>
                    <th>2%</th>
                    <th>2%</th>
                    <th>2%</th>
                    <th>2%</th>
                  </tr>
                  <tr>
                    <th>Gen 2</th>
                    <th>0.50%</th>
                    <th>1.50%</th>
                    <th>1.50%</th>
                    <th>1.50%</th>
                    <th>1.50%</th>
                  </tr>
                  <tr>
                    <th>Gen 3</th>
                    <th />
                    <th>0.50%</th>
                    <th>1%</th>
                    <th>1%</th>
                    <th>1%</th>
                  </tr>
                  <tr>
                    <th>Gen 4</th>
                    <th />
                    <th />
                    <th>0.50%</th>
                    <th>0.50%</th>
                    <th>0.50%</th>
                  </tr>
                  <tr>
                    <th>Gen 5</th>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>0.50%</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-content">
              <table className="ui  celled table  unstackable center aligned structured ">
                <thead>
                  <tr>
                    <th>Duke Generation Profit</th>
                    <th>Direct 1</th>
                    <th>Direct 2</th>
                    <th>Direct 3</th>
                    <th>Direct 4</th>
                    <th>Direct 5</th>
                  </tr>
                  <tr>
                    <th>Gen 1</th>
                    <th>0.60%</th>
                    <th>0.60%</th>
                    <th>0.60%</th>
                    <th>0.60%</th>
                    <th>0.60%</th>
                  </tr>
                  <tr>
                    <th>Gen 2</th>
                    <th>0.20%</th>
                    <th>0.50%</th>
                    <th>0.50%</th>
                    <th>0.50%</th>
                    <th>0.50%</th>
                  </tr>
                  <tr>
                    <th>Gen 3</th>
                    <th />
                    <th>0.20%</th>
                    <th>0.40%</th>
                    <th>0.40%</th>
                    <th>0.40%</th>
                  </tr>
                  <tr>
                    <th>Gen 4</th>
                    <th />
                    <th />
                    <th>0.20%</th>
                    <th>0.20%</th>
                    <th>0.30%</th>
                  </tr>
                  <tr>
                    <th>Gen 5</th>
                    <th />
                    <th />
                    <th />
                    <th />
                    <th>0.20%</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="group-profit">
            <h3>GPG- Generation Profit Gainer</h3>
            <p>In order to enjoy the Generation Profit income</p>
            <p>
              All Counts are above are supposed to do a daily personal sale(GPG)
              worth 600 points .
            </p>
            <p>
              Maximum GPG that can be done in one go, is equivalent to 18,000
              points which is valid for next 30 days.
            </p>
            <p>
              In case GPG is not done, then the Generation Income percentage
              will flow to the next eligible rank in the Line of Sponsorship.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
