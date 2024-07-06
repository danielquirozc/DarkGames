import { useState } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

export const Slider = ({ images }) => {
  const [scrollX, setScrollX] = useState(0)

  const handlePrevClick = () => {
    const slider = document.getElementById('slider')
    const sliderWidth = slider.offsetWidth
    if (scrollX === 0) return
    setScrollX(scrollX + sliderWidth)
  }

  const handleNextClick = () => {
    const slider = document.getElementById('slider')
    const sliderWidth = slider.offsetWidth
    if (scrollX === -sliderWidth * (images.length - 1)) return
    setScrollX(scrollX - sliderWidth)
  }

  return (
    <div id='slider' className="slider relative lg:min-w-[500px] max-w-[500px] h-[300px] overflow-hidden rounded-lg">
      <div className="flex flex-row flex-nowrap min-w-full h-full transition-transform duration-500 shadow-lg" style={{ transform: `translateX(${scrollX}px)` }}>
        {images.map((image, index) => (
          <div className="min-w-full h-full bg-red-400" key={index}>
            <img
              key={index}
              src={image}
              alt="Imagen del slider"
              className="w-[500px] aspect-video object-cover h-full"
              />
          </div>
        ))}
      </div>
      <button
        className="absolute h-full px-1 top-1/2 left-0 transform hover:bg-slate-800/25 -translate-y-1/2"
        onClick={handlePrevClick}
      >
        <IoChevronBackOutline className='text-4xl' />
      </button>
      <button
        className="absolute h-full px-1 top-1/2 right-0 transform hover:bg-slate-800/25 -translate-y-1/2"
        onClick={handleNextClick}
      >
        <IoChevronForwardOutline className='text-4xl' />
      </button>
    </div>
  )
}
