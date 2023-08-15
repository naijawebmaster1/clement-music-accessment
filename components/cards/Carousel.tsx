import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react'
import React from 'react'
function Carousel() {
    return (
        <CCarousel dark interval={2000}>
            <CCarouselItem>
                <CImage className="d-block w-100" src="./images/guitar.svg" alt="slide 1" />
            </CCarouselItem>
            <CCarouselItem>
                <CImage className="d-block w-100" src="./images/guitar.svg" alt="slide 1" />
            </CCarouselItem>
        </CCarousel>
    )
}
export default Carousel