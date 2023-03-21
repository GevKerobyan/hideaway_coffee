import { HeroLayout, HeroLayoutInfo, HeroSliderWrapper, CarouselImageBox } from './styled'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { CarouselImages } from '../../utilsData';

const Hero = () => {

  return (
    <HeroLayout id='hero'>
      <HeroLayoutInfo>
        <h1>Hideaway Coffee</h1>
        <h2>Cafe in London</h2>
      </HeroLayoutInfo>
      <HeroSliderWrapper>
        <Carousel
          autoPlay
          centerMode
          emulateTouch
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          swipeScrollTolerance={60}
          centerSlidePercentage={100}
          preventMovementUntilSwipeScrollTolerance={true}
        >
          {CarouselImages.map((item, i) => { return <CarouselImageBox background={item} key={i} /> })}
        </Carousel>
      </HeroSliderWrapper>
    </HeroLayout>
  )
}

export default Hero
