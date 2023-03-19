import React, { useEffect, useRef } from 'react'
import MapSection from '../Map'
import { FindSectionAddress, FindSectionLayout, FindSectionMap, FindSectionTitle } from './styled'

const Find = () => {
 
  

  return (
    <FindSectionLayout id='find'>
      <FindSectionTitle>Find</FindSectionTitle>
      <FindSectionMap>
        <MapSection />

      </FindSectionMap>
      <FindSectionAddress>
        <p>Find us at <span> 7 Farrier's Psge,</span> <span> London W1D 7DP,</span> <span>United Kingdom </span> </p>
      </FindSectionAddress>

    </FindSectionLayout>
  )
}

export default Find