import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from '../../styles/Carrousel.module.css'


import slide_one from "../../public/images/s-1.webp"
import slide_two from "../../public/images/s-2.webp"
import slide_three from "../../public/images/s-3.webp"
import slide_four from "../../public/images/s-4.webp"


export default function Carrousel() {
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    };

    return (
        <div className={styles.container}>
            <Slider {...settings}>
                <div>
                    <div style={{ background: `url(${slide_one.src})`, backgroundSize: 'cover', height: height }} className="carrousel_image active " ></div>
                </div>
                <div>
                    <div style={{ background: `url(${slide_two.src})`, backgroundSize: 'cover', height: height }} className="carousel-image active " ></div>
                </div>
                <div>
                    <div style={{ background: `url(${slide_three.src})`, backgroundSize: 'cover', height: height }} className="carousel-image active " ></div>
                </div>
                <div>
                    <div style={{ background: `url(${slide_four.src})`, backgroundSize: 'cover', height: height }} className="carousel-image active " ></div>
                </div>
            </Slider>
        </div>
    )
}
