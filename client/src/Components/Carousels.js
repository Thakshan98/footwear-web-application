import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'

function Carousels() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className='d-block w-100 lg:h-96 md:h-60 sm:h-40'
          src='https://minx.co.nz/cdn/shop/files/wINTER_23_COVER_PHOTO_1024x1024.png?v=1678848842'
          alt='First slide'
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 lg:h-96 md:h-60 sm:h-40'
          src='https://www.hogan.com/medias/01-Base-slider-desktop.jpg?context=bWFzdGVyfHJvb3R8NjE2MjAxfGltYWdlL2pwZWd8aGRmL2hjNS85MTk3Mjc1MzE2MjU0LmpwZ3w5NTdmMGE0YTNlYjczMzdiN2I4M2M2ZTcyODk2MDUzYWQ3NTAzNjg0NDJjNjBmY2FjOGM5N2M1YjgyODYyYWE5&impolicy=noretina'
          alt='Second slide'
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className='d-block w-100 lg:h-96 md:h-60 sm:h-40'
          src='https://cdn11.bigcommerce.com/s-qiagj8k2bk/images/stencil/original/carousel/57/TA_Ft_Sandals_Scrolling_Top_1170_x_450.jpg?c=1'
          alt='Third slide'
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels
