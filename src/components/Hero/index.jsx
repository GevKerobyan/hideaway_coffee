import React from 'react'
import { HeroLayout, HeroLayoutInfo, HeroSliderWrapper } from './styled'

import HeroSlider from 'hero-slider/dist/HeroSlider'
import { Slide } from 'hero-slider'



import { Carousel_1, Carousel_2, Carousel_3, Carousel_4, Carousel_5, Carousel_6, Carousel_8, Carousel_9, Carousel_11, Carousel_12, Carousel_13, Carousel_14, Carousel_15 } from '../../assets'


const Hero = () => {
    const images = [Carousel_1, Carousel_2, Carousel_3, Carousel_4, Carousel_5, Carousel_6, Carousel_8, Carousel_9, Carousel_11, Carousel_12, Carousel_13, Carousel_14, Carousel_15]

    return (
        <HeroLayout>
            <HeroLayoutInfo>
                <h1 style={{ textAlign: "center" }}>Hideaway Coffee</h1>
                <h2>Cafe in London</h2>
            </HeroLayoutInfo>
            <HeroSliderWrapper>
                <HeroSlider
                    autoplay
                    controller={{
                        initialSlide: 1,
                        slidingDuration: 500,
                        slidingDelay: 100,
                    }}
                >
                    {images.map((item, i) => {
                        return <Slide key={i} background={{
                            backgroundImage: item,
                            backgroundAttachment: 'fixed'
                        }}
                         >
                            
                        </Slide>
                    })}
                </HeroSlider>
            </HeroSliderWrapper>


        </HeroLayout>
    )
}

export default Hero