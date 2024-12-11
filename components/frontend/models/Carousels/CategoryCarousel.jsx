'use client'

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "@/public/c.jpg";
import Link from "next/link";


export default function CategoryCarousel() {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const slider = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="px-4"
        >
            {
                slider.map((item, i) => {
                    return (
                        <div key={i} className="rounded-lg mr-3 mb-10 px-10 overflow-hidden">
                            <Link href="#">
                                <Image src={Img} alt="User profile" width={300} height={300} className="w-32 h-32 rounded-full object-cover justify-center" />
                                <h2 className="text-center mt-2">Vy Nguyen</h2>
                            </Link>
                        </div>
                    )
                })
            }

        </Carousel>
    )
}
