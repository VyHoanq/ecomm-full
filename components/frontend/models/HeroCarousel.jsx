'use client'
import { Carousel } from 'nuka-carousel';
import carousel1 from "@/public/asset/banner1.jpg";
import carousel2 from "@/public/asset/banner2.jpg";
import carousel3 from "@/public/asset/banner3.jpg";
import carousel4 from "@/public/asset/banner4.jpg";
import Image from 'next/image';

export default function HeroCarousel() {
    return (
        <div className="w-full h-full">
            <Carousel 
                showDots 
                autoplay 
                wrapAround 
                defaultControlsConfig={{
                    pagingDotsStyle: {
                        fill: '#fff', // Màu chấm
                        margin: '0 4px',
                    },
                }}
            >
                <Image
                    alt='banner'
                    src={carousel1}
                    layout="responsive"
                    width={1600}
                    height={400}
                    className='carousel-image'
                />
                <Image
                    alt='banner'
                    src={carousel2}
                    layout="responsive"
                    width={1600}
                    height={400}
                    className='carousel-image'
                />
                <Image
                    alt='banner'
                    src={carousel3}
                    layout="responsive"
                    width={1600}
                    height={400}
                    className='carousel-image'
                />
                <Image
                    alt='banner'
                    src={carousel4}
                    layout="responsive"
                    width={1600}
                    height={400}
                    className='carousel-image'
                />
            </Carousel>
        </div>
    );
}
