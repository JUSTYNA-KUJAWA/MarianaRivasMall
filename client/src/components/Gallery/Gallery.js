import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Gallery.module.scss';

const Gallery = () => {

  return (
    <Container>
      <p className={styles.gallery}>My products</p>
      <div className={styles.root}>
        <div className={styles.element}>
          <Link to="/category/Products">
            <img alt="ceramique" src="/images/newArrivals/ceramique.png"/>
            <div className={styles.photoSmall}>
              <p>Ceramique</p>
            </div>
          </Link>
        </div>
        <div className={styles.element}>
          <Link to="/category/Products">
            <img alt="paints" src="/images/newArrivals/peinture.png"/>
            <div className={styles.photoSmall}>
              <p>Paints</p>
            </div>
          </Link>
        </div>
        <div className={styles.element}>
          <Link to="/category/Products">
            <img alt="paints1" src="/images/newArrivals/peinture1.png"/>
            <div className={styles.photoSmall}>
              <p>Art</p>
            </div>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Gallery;