// src/components/About.js
import React from 'react';
import style from '../styles/About.module.css'

const About = () => {
  return (
    <div className={style.container}>
      <h1>About Us</h1>
      <p>Welcome to SirKayPlaza Starting as a small business in [OSOGBO/NIGERIA/2023], we have big dreams. Our passion for [PRODUCTS CATEGORY NAME], means that we provide our customers with nothing but the highest quality of products, that are guaranteed to meet their needs and keep them satisfied!</p>
      <p>Our team is dedicated to providing the best user experience. We hope you enjoy using the app as much as we enjoyed creating it!</p>
      <ul>
        <li>Feature 1: Easy to use</li>
        <li>Feature 2: Fast and responsive</li>
        <li>Feature 3: Customizable</li>
      </ul>
    </div>
  );
};

export default About;

