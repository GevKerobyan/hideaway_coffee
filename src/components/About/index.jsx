import React from 'react'
import { AboutSectionContent, AboutSectionImage, AboutSectionLayout, AboutSectionText, AboutSectionTitle } from './styled'
import { Carousel_2 } from '../../assets'

const About = ({ref}) => {
  return (
    <AboutSectionLayout id='about'>

      <AboutSectionTitle>
        About Us
      </AboutSectionTitle>
      <AboutSectionContent>
        <AboutSectionText>
          <p>The best service, satisfied customers, delicious coffee from the most exotic countries and a wide range of drinks and desserts - that's all about us! Come to Hideaway Coffee and see for yourself. We are waiting for your coming!</p>
        </AboutSectionText>
      </AboutSectionContent>
    </AboutSectionLayout>
  )
}

export default About