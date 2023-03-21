import { AboutSectionLayout, AboutSectionText, AboutSectionTitle } from './styled'

const About = () => {
  return (
    <AboutSectionLayout id='about'>
      <AboutSectionTitle>
        About Us
      </AboutSectionTitle>
      <div>
        <AboutSectionText>
          <p>The best service, satisfied customers, delicious coffee from the most exotic countries and a wide range of drinks and desserts - that's all about us! Come to Hideaway Coffee and see for yourself. We are waiting for your coming!</p>
        </AboutSectionText>
      </div>
    </AboutSectionLayout>
  )
}

export default About