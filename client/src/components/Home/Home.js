import React from 'react';
import Hero from '../Hero/Hero';
import Description from '../Description/Description';
import Container from '../Container/Container';
import Message from '../Message/Message';
import NewArrivals from '../NewArrivals/NewArrivals';
import styles from './Home.module.scss';
import Gallery from '../Gallery/Gallery';
import Informations from '../Informations/Informations';

const Home = () => {

  return (
    <div className={styles.root}>
      <Hero />
      <Container>
        <Description />
        <Message />
        <Gallery />
        <NewArrivals />
        <Informations />
      </Container>
    </div>
  );
};

export default Home;