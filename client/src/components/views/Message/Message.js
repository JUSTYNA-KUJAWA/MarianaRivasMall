import React from 'react';
import styles from './Message.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const Message = () => {

  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <img alt="mariana" src="images/mariana/mariana.png"/>
      </div>
      <div className={styles.socialMedia}>
        <p>Photographe / Plasticienne</p>
        <p>Knowledge and understanding of two/three quite different cultures.</p>
        <p>Find common ground between them and bring them closer rather than apart.</p>
        <p>I can take the positives of each of these cultures to my advantage.</p>
        <p>American-style communication and sales.</p> 
        <p>French conceptualization and depth and Latin joy.</p>
        <h4>Follow me on social media</h4>
        <NavLink to="/"><img alt="logo" src="/images/home/logo.png" /></NavLink>
        <ul>
          <li><button className={styles.button}><FontAwesomeIcon icon={faTwitter} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faInstagram} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faFacebook} /></button></li>
          <li><button className={styles.button}><FontAwesomeIcon icon={faPinterest} /></button></li>
        </ul>
      </div>
    </div>
  );
};

export default Message;