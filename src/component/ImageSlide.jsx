import React, { useEffect, useState} from 'react'
import style from '../styles/ImageSlide.module.css'

const images = [
    '../images/slide1.jpg',
    '../images/slide2.jpg',
    '../images/slide3.jpg'
]

const ImageSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(0)


useEffect(() => {
    const interval = setInterval (()=> {
        setCurrentIndex((currentIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
}, [currentIndex])

const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
}

const prevSlide = () => { 
    setCurrentIndex((currentIndex - 1) % images.length)
}

      return (
        <div className={style.slider}>
            <div className={style.slides} style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                {images.map((image, index) => (
                    <div className={style.slide} key={index}>
                        <img src={image} alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <div className={style.navigation}>
                <button className={style.prev} onClick={prevSlide}>&#10094;</button>
                <button className={style.next} onClick={nextSlide}>&#10095;</button>
            </div>
        </div>
    );
}

export default ImageSlide