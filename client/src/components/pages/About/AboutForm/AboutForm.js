import React from 'react';
import styles from './AboutForm.module.scss';

const AboutForm = () => {
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img alt="mariana" src="images/about/about.png"/>
        <img alt="mariana" src="images/about/mariana.png"/>
        <img alt="mariana" src="images/about/mmm.png"/>
      </div>
      <div className={styles.formulaire}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tristique, massa ut consectetur sagittis, enim ipsum fringilla nibh, ac tempor purus est vestibulum dui.
          <p>Proin aliquet posuere nisl, vel vestibulum nisl interdum quis.Vestibulum in arcu faucibus, vestibulum magna id, venenatis mauris. </p>
          <p>Fusce placerat vel eros quis blandit. Donec sed volutpat augue. Suspendisse et convallis tellus, in accumsan quam.</p>
Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.</p>
      </div>
    </div>
  );
};



export default AboutForm;