
import React, { useEffect, useMemo, useRef } from 'react'
import tt from '@tomtom-international/web-sdk-maps';
import { MapWrapper } from './styled';

const MapSection = () => {

  const mapRef = useRef(null)

  const center = [51.511357451961906, -0.13523645459632794]
  let map;

  useEffect(()=> {
    map = tt.map({
      key: process.env.REACT_APP_TOMTOM_MAP_API_KEY,
      container: mapRef.current,
      center,
      zoom: 12
    })
  },[])

  return (
    <MapWrapper ref={mapRef}>

    </MapWrapper>
  )
}

export default MapSection


