import React from 'react';
import HeroProduct from '../../common/HeroProduct/HeroProduct';
import ProductPage from '../../common/ProductPage/ProductPage';
import Container from '../../common/Container/Container';
import styles from './Paint.module.scss';

const Paint = () => {
  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>        
        <ProductPage />
      </Container>
    </div>
  );
};

export default Paint;