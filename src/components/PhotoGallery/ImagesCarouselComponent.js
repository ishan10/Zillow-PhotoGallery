import React, { Component } from 'react'
import Slider from 'react-slick';
import {ImageComponent} from './ImageComponent.js'
import './Image.scss'

class ImagesCarouselComponent extends Component{
	constructor(props){
		super(props);
		this.state = { imageNumber:0 , images : props.images };
	}

	render(){
		const settings = {
	      arrows: true,
	      infinite: true,
	      speed: 1100,
	      slidesToShow: 1,
	      slidesToScroll: 1
	    };

		return(
				<div className="carousel">
					<Slider {...settings}>
						{this.state.images.map(item => (
						 <div key={this.state.imageNumber} >
						 	<ImageComponent image={item}></ImageComponent>
						 </div> ))} 
					</Slider>
				</div>
				)
	}
}

export default ImagesCarouselComponent