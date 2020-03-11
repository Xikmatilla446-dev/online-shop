import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class CaruselComponent extends React.Component {
    render() {
        return (
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={125}
                totalSlides={3}
            >
                <Slider >
                    <Slide index={0}><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/09/24/goods-img/1578451797916338967.jpg" alt=""/></Slide>
                    <Slide index={1}><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/09/24/goods-img/1578451797916338967.jpg" alt=""/></Slide>
                    <Slide index={2}><img src="https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2019/09/24/goods-img/1578451797916338967.jpg" alt=""/></Slide>
                </Slider>
                <ButtonBack>Back</ButtonBack>
                <ButtonNext>Next</ButtonNext>
            </CarouselProvider>
        );
    }
}

export default CaruselComponent;