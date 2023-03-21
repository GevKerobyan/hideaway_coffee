import { InstagramIcon } from '../../assets/svgs'
import MapSection from '../Map'
import {
  FindSectionAddress, FindSectionLayout, FindSectionMap, FindSectionTitle, FindSectionFooter, FindSectionSchedule, FindSectionInstaLink, InstaLink, FindSectionInstaLinkWrapper
} from './styled'

const Find = () => {

  return (
    <FindSectionLayout id='find'>
      <FindSectionTitle>Find us</FindSectionTitle>
      <FindSectionMap>
        <MapSection />
      </FindSectionMap>
      <FindSectionFooter>
        <FindSectionAddress>
          <p>Find us at <span> 7 Farrier's Psge, London W1D 7DP,</span> <span>United Kingdom </span> </p>
        </FindSectionAddress>
        <FindSectionSchedule>
        <h2>We are open at:</h2>
        <p><span>Mon-Fri : </span><span>8am - 4pm</span></p>
        <p><span>Saturday : </span><span>10am - 4pm</span></p>
        <p><span>Sunday : </span><span>Closed</span></p>
        </FindSectionSchedule>
        <FindSectionInstaLinkWrapper>
          <FindSectionInstaLink href='https://www.instagram.com/hideawaycoffee' target='_blank'>
            <h2>Join us also on Instagram </h2>
            <InstaLink>
              <InstagramIcon />
              <span>https://www.instagram.com/hideawaycoffee</span>
            </InstaLink>
          </FindSectionInstaLink>
        </FindSectionInstaLinkWrapper>
      </FindSectionFooter>
    </FindSectionLayout>
  )
}

export default Find