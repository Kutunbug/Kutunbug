import React from 'react'
import style from "../styles/Home.module.css"
import ImageSlide from '../component/ImageSlide'

function Home() {
  return (
    <div>

      <div className={style.FirstSection}>
        <div className={style.FirstSection1}>
          <p>Appliances</p>
          <p>Supermaket</p>
          <p>Health & Beauty</p>
          <p>Home & Office</p>
          <p>Phones & Tablets</p>
          <p>Computing</p>
          <p>Electronics</p>
        </div>

        <div className={style.FirstSection2}>
          <ImageSlide/>
        </div>

        <div className={style.FirstSection3}>
          <div className={style.FirstSection31}>
            <p>Call to order</p>
            <p>Best Deals</p>
          </div>

          <div className={style.FirstSection32}>
            <img className={style.FirstImage} src="../images/slide1.jpg" alt="slide1" />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home
