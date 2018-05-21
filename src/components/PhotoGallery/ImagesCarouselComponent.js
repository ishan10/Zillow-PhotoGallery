import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {ImageComponent} from './ImageComponent.js'
import './Carousel.scss'

var transition = 'scale';
class ImagesCarouselComponent extends Component{
	constructor(props){
		super(props);
		this.state = { imageNumber:0 , images : props.images , leftArrow : "prev", rightArrow:"next"};
		this.showPrevious=this.showPrevious.bind(this);
		this.showNext=this.showNext.bind(this);
	}

 
	//Function to show the previous image in the carousel
	showPrevious(){
		if(this.state.imageNumber < this.state.images.length-1){
		this.setState({imageNumber:this.state.imageNumber+1});
		} else{
			this.setState({imageNumber:0 });
		}
	}

	//Function to show the next image in the carousel
	showNext(){
		if(this.state.imageNumber > 0){
		this.setState({imageNumber:this.state.imageNumber-1});
		} else{
			this.setState({imageNumber: this.state.images.length-1});
		}
	}

	render(){
		var style = this.state.images[this.state.imageNumber] ;
		//Creating array of ImageComponents to show all images in the carousel.
		const rows =[];
		this.props.images.forEach((image) =>
			rows.push(<ImageComponent key={rows.length} image={image}/>)
			)

		return(


			<div className="carousel">
				{/*<div className={slide}>{rows[this.state.imageNumber]} </div>*/}
				<a className={this.state.leftArrow}  onClick={this.showPrevious}> &#10094; </a>
				<a className={this.state.rightArrow}  onClick={this.showNext}> &#10095; </a>
				<ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          	{rows[this.state.imageNumber]}
        </ReactCSSTransitionGroup>
			</div>
			)
	}
}

export default ImagesCarouselComponent