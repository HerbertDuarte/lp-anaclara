import './Slider.css'

export const Slider = () => {

  return (
  <div className='sliderContainer'>
    <div className='slider'>
      <div className='slideDiv slide1'><img src="/slide1.jpeg" alt="Ana Clara" /></div>
      <div className='slideDiv slide2'><img src="/slide2.jpeg" alt="Ana Clara" /></div>
      <div className='slideDiv slide3'><img src="/slide3.jpeg" alt="Ana Clara" /></div>
      <div className='slideDiv slide4'><img src="/slide4.jpeg" alt="Ana Clara" /></div>
    </div>
  </div>
  )
  
}

export default Slider;