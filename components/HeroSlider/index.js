import React from 'react'
import { Button, Grid } from '@mui/material';
import Slider from "react-slick";
import Link from 'next/link'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const heroSliders = [
    {
        images: '/images/slider/slide-1.jpg',
        title: 'Nous Défendons Vos Droits',
        subTitle: 'Avec Dévouement et Expertise.',
        text: 'Le Cabinet d’Avocats de Confiance pour Vos Besoins Juridiques',
        button: 'Contactez-nous dès maintenant'
    },
    {
        images: '/images/slider/slide-2.jpg',
        title: 'Votre Justice, Notre Priorité',
        subTitle: 'Toujours à Vos Côtés.',
        text: 'Le Cabinet d’Avocats Expérimenté à Votre Service',
        button: 'Contactez-nous dès maintenant'
    }
    
    // {
    //     images: '/images/slider/slide-2.jpg',
    //     title: 'We Fight For Your Justice',
    //     subTitle: 'As Like A Friend.',
    //     text: 'The Most Talented Law Frim',
    //     button: 'Contact us now'
    // },
    // {
    //     images: '/images/slider/slide-1.jpg',
    //     title: 'We Fight For Your Justice',
    //     subTitle: 'As Like A Friend.',
    //     text: 'The Most Talented Law Frim',
    //     button: 'Contact us now'
    // },
]

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
    >
        <ArrowBackIosIcon />
    </Button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <Button
        {...props}
        className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
    >
        <ArrowForwardIosIcon />
    </Button>
);

const HeroSlider = ({ className = '' }) => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SlickArrowRight />,
        prevArrow: <SlickArrowLeft />,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    return (
        <Slider className={`heroSliderArea ${className}`}
            {...settings}>
            {heroSliders.map((slider, i) => (

                <Grid key={i}>
                    <Grid
                        className="slideWrapper"
                        style={{ background: `url(${slider.images}) no-repeat center center / cover` }}
                    >
                        <Grid container className="container">
                            <Grid item lg={8} xs={12}>
                                <p>{slider.text}</p>
                                <h2><span>{slider.title}</span> <span>{slider.subTitle}</span></h2>
                                <Link href="/contact" className="btnStyle btnStyle3">
                                    {slider.button}
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            ))
            }
        </Slider >
    )
}
export default HeroSlider