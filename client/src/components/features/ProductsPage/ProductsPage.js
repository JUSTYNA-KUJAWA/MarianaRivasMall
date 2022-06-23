import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../common/Container/Container';
import styles from './ProductsPage.module.scss';

const ProductsPage = () => {

  return (
    <Container>
      <div className={styles.root}>
        <div className={styles.element}>
          <Link to="/books">
            <img alt="bookEn" src="/images/newArrivals/versionEN.png"/>
            <div className={styles.photoSmall}>
            </div>
          </Link>
        </div>
        <div className={styles.element}>
          <Link to="/books">
            <img alt="bookFr" src="/images/newArrivals/versionFR.png"/>
            <div className={styles.photoSmall}>
            </div>
          </Link>
        </div>
        <div className={styles.element}>
          <Link to="/books">
            <img alt="bookwineFr" src="/images/newArrivals/versionWine.png"/>
            <div className={styles.photoSmall}>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default ProductsPage;