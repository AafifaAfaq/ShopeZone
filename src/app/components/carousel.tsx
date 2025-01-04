'use client'

import Image from "next/image";
import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
import img4 from "../images/img4.jpg"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Carousel() {
    useEffect(() => {
        AOS.init();  // AOS ko initialize karna
    }, []);

    return (
        <>
            <div className="relative z-10 carousel w-full" data-aos="fade-up" data-aos-duration="2000">
                <div id="slide1" className="carousel-item relative w-full" data-aos="fade-left" data-aos-duration="1500">
                    <Image
                        src={img1}
                        alt="image1"
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full" data-aos="fade-left" data-aos-duration="1500">
                    <Image
                        alt="image2"
                        src={img2}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full" data-aos="fade-left" data-aos-duration="1500">
                    <Image
                        alt="image3"
                        src={img3}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full" data-aos="fade-left" data-aos-duration="1500">
                    <Image
                        alt="image4"
                        src={img4}
                        className="w-full"
                    />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
}
