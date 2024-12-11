'use client'

import Image from "next/image";
import React from "react";
import Link from "next/link";
import Img from "@/public/asset/banner1.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { CircleChevronLeftIcon, CircleChevronRightIcon } from "lucide-react";

export default function HeroCarousel({banners}) {

    return (
        <div className="swiper-container relative">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={{
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {banners.map((banner, i) => (
                    <SwiperSlide key={i}>
                        <div className="rounded-lg overflow-hidden">
                            <Link href="#">
                                <Image src={banner.imageUrl} alt={banner.title} width={712} height={384} className="w-full" />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev">
                    <CircleChevronLeftIcon className="text-neutral-100" />
                </div>
                <div className="swiper-button-next">
                    <CircleChevronRightIcon className="text-neutral-100" />
                </div>
            </Swiper>
        </div>
    );
}
