import React from 'react';
import Hero from '../../views/Hero/Hero';
import Description from '../../views/Description/Description';
import Container from '../../common/Container/Container';
import Message from '../../views/Message/Message';
import NewArrivals from '../../features/NewArrivals/NewArrivals';
import styles from './Home.module.scss';
import Gallery from '../../features/Gallery/Gallery';
import Informations from '../../views/Informations/Informations';

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