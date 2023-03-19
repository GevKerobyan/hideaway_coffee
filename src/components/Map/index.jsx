import { MapWrapper } from './styled';

const MapSection = () => {

  return (
    <MapWrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.1036069516526!2d-0.13743988436399512!3d51.511315179635865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d4742aab47%3A0xf1dd7dc343187f7f!2s7%20Farrier&#39;s%20Psge%2C%20London%20W1D%207DP%2C%20UK!5e0!3m2!1sen!2sam!4v1679257535456!5m2!1sen!2sam" width="100%"
        height="100%"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </MapWrapper>
  )
}

export default MapSection;