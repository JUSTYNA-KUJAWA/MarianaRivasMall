import React from 'react';
import HeroProduct from '../../common/HeroProduct/HeroProduct';
import ProductPage from '../../common/ProductPage/ProductPage';
import Container from '../../common/Container/Container';
import styles from './Arts.module.scss';
//import ProductBox from '../../common/ProductBox/ProductBox';

const Arts = () => {
  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>        
        <ProductPage />
      </Container>
    </div>
  );
};

export default Arts;