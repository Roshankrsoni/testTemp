import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

let title_head = 'Asort';

export class index extends Component {
  render() {
    return (
      <section className="about team">
        <Helmet>
          <title>Our Team</title>
          <meta
            name="description"
            content="Asort is proudly built in India, by a team driven by a passion to change the way e-commerce is being run and the way people shop online."
          />
        </Helmet>
        <div className="banner">
          <h2 className="banner-text">We are {title_head}</h2>
        </div>
        <div className="title">
          <h3>our team</h3>
        </div>
        <div className="container-fluid team-detail">
          <div className="topic">
            <img src="https://cdn.asort.com/resources/images/chat.png" alt="" />
            <p>
              {title_head} is proudly built in India, by a team driven by a
              passion to change the way e-commerce is being run.
            </p>
          </div>
          <div className="topic">
            <img src="https://cdn.asort.com/resources/images/hq.png" alt="" />
            <p>
              We are driven to design a fashion marketplace where {title_head}{' '}
              members can not only buy the highest quality products at
              affordable prices but also create a platform where every member
              gets rewarded in cash and personalized experiences for their
              contribution to building the {title_head} community.
            </p>
          </div>
          <div className="topic">
            <img
              src="https://cdn.asort.com/resources/images/spark.png"
              alt=""
            />
            <p>
              We are an eclectic mix of youth and experience, of foodies and gym
              freaks, of accomplished bathroom singers and astronomers, of long
              distance riders and amateur artists.
            </p>
          </div>
          <div className="topic">
            <img
              src="https://cdn.asort.com/resources/images/circuit.png"
              alt=""
            />
            <p>
              The {title_head} leadership team has a combined experience of over
              two hundred years across multiple domains like fashion,
              e-commerce, technology, direct sales, logistics, product design,
              and finance.
            </p>
          </div>
          <div className="topic">
            <img src="https://cdn.asort.com/resources/images/run.png" alt="" />
            <p>
              At {title_head} we strive to encourage everyone to move fast, to
              innovate,to try out new ideas, and break and build new things.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default index;
