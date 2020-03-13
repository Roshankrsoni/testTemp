import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Card({ redirectTo, imgSrc, key, className, style, text }) {
  return (
    <div className={className} key={key} style={style}>
      {redirectTo ? (
        <Link to={redirectTo}>
          <>
            <img src={imgSrc} alt="" />
            {text ? <div>{text}</div> : null}
          </>
        </Link>
      ) : (
        <div className={className} key={key}>
          <img src={imgSrc} alt="" />
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  redirectTo: PropTypes.string,
  imgSrc: PropTypes.string,
  key: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
};

export default Card;
