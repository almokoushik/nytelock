import React , { Component }from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from "../../fakeData.json"

import Slider from "react-slick";
import SingleSliCard from '../SingleSliCard/SingleSliCard';

const SliCar = () => {
   

    const [data, setData] = useState([])
    useEffect(() => {
        setData(fakeData.data)
    }, [])
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows:false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };
   

    return (
        <div>
            <Slider {...settings}>
                {
                   data.length&& data.map(d=><SingleSliCard key={d.id} props={d}></SingleSliCard>)
                }
            </Slider>
        </div>
    );
};

export default SliCar;





