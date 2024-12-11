'use client'

import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "@/public/asset/banner1.jpg";
import Link from "next/link";
import { CircleArrowRight } from "lucide-react";


export default function LimiCarousel() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const slider = [{}, {}, {}, {}, {}, {},]
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
                                <Image src={Img} alt="Banner" width={712} height={384} className="w-full" />
                            </Link>
                            <h2 className="font-bold m-3 text-xl uppercase">Vy Nguyen</h2>
                            <p className="px-4 line-clamp-3 ">You can pass your own custom arrows to make it the way you want, the same for the position. For example, add media query for the arrows to go under when on smaller screens.</p>
                            <div className="flex justify-center items-center px-4 py-2">
                                <Link className='rounded-md px-4 py-2 bg-neutral-200 mr-3 hover:bg-neutral-400 font-semibold' href="#">Read More</Link>
                                <CircleArrowRight />
                            </div>
                        </div>
                    )
                })
            }

        </Carousel>
    )
}
