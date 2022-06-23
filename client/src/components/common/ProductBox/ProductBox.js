import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ProductBox.module.scss';

const ProductBox = ({ basePrice, images, name, mainCategory, _id }) => {

  return (
    <Link to={`/${mainCategory}/${_id}`}>
      <div className={styles.productContainer}>
        <div className={styles.imageWrapper}>
          <img alt='' src={`${process.env.PUBLIC_URL}/images/products/${mainCategory}/${images[0]}`} />
        </div>
        <div className={styles.textWrapper}>
          <p>{name}</p>
          <p>${basePrice}</p>
        </div>
        <div className={styles.overlay}>
          <p>
            See more
          </p>
        </div>
      </div>
    </Link>
  );
};

ProductBox.propTypes = {
  basePrice: PropTypes.number,
  images: PropTypes.array,
  name: PropTypes.string,
  raitings: PropTypes.number,
  mainCategory: PropTypes.string,
  _id: PropTypes.string,
};

export default ProductBox;