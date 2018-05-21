import React, { Component } from 'react'
import {ImageComponent} from './ImageComponent.js'
import Slider from 'react-slick';


class ImagesCarouselComponent extends Component{
	constructor(props){
		super(props);
		this.state = { imageNumber:0 , images : props.images};
	//	this.showPrevious=this.showPrevious.bind(this);
	//	this.showNext=this.showNext.bind(this);
	}

 
	//Function to show the previous image in the carousel
	/*showPrevious(){
		//debugger;
		if(this.state.imageNumber < this.state.images.length-1){
		this.setState({imageNumber:this.state.imageNumber+1});
		} else{
			this.setState({imageNumber:0 });
		}
	}*/

	//Function to show the next image in the carousel
	/*showNext(){
		if(this.state.imageNumber > 0){
		this.setState({imageNumber:this.state.imageNumber-1});
		} else{
			this.setState({imageNumber: this.state.images.length-1});
		}
	}*/

	render(){
		var style = this.state.images[this.state.imageNumber] ;
		//Creating array of ImageComponents to show all images in the carousel.
		/*const rows =[];
		this.props.images.forEach((image) =>
			rows.push(<ImageComponent key={rows.length} image={image}/>)
			)*/

		const settings = {
      arrows: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1
    };

		return(
			<div>
				<div>
				{/*<a className={this.state.leftArrow}  onClick={this.showPrevious}> &#10094;vvv </a>
				<a className={this.state.rightArrow}  onClick={this.showNext}> &#10095; nnn</a>*/}
				</div>

				<div className="carousel">
					{/*<div className={slide}>{rows[this.state.imageNumber]} </div>
					
					<ReactCSSTransitionGroup transitionName="background" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
						<ImageComponent key={this.state.imageNumber} image={style}/>
					</ReactCSSTransitionGroup>*/}
					<Slider {...settings}>
						{this.state.images.map(item => ( <div  key={this.state.imageNumber} ><ImageComponent
							image={item}></ImageComponent>
							</div> ))} 
					</Slider>
				</div>
			</div>
			)
	}
}

export default ImagesCarouselComponent