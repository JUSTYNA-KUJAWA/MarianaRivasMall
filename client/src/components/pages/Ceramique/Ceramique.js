import React from 'react';
import HeroProduct from '../../common/HeroProduct/HeroProduct';
import ProductPage from '../../common/ProductPage/ProductPage';
import Container from '../../common/Container/Container';
import styles from './Ceramique.module.scss';

const Ceramique = () => {
  return (
    <div className={styles.root}>
      <HeroProduct />
      <Container>        
        <ProductPage />
      </Container>
    </div>
  );
};

export default Ceramique;