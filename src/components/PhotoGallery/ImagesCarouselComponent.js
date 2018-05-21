import React, { Component } from 'react'
import {ImageComponent} from './ImageComponent.js'


class ImagesCarouselComponent extends Component{
	constructor(props){
		super(props);
		this.state = { imageNumber:0 , images : props.images};
		this.showPrevious=this.showPrevious.bind(this);
		this.showNext=this.showNext.bind(this);
	}

	//Function to show the previous image in the carousel
	showPrevious(){
		if(this.state.imageNumber < this.state.images.length-1){
		this.setState({imageNumber:this.state.imageNumber+1});
		} else{
			this.setState({imageNumber:0});
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
		//Creating array of ImageComponents to show all images in the carousel.
		const rows =[];
		this.props.images.forEach((image) =>
			rows.push(<ImageComponent key={rows.length} image={image}/>)
			)
		
		return(

			<div className="carousel">
				{rows[this.state.imageNumber]}
				<a className="prev"  onClick={this.showPrevious}> &#10094; </a>
				<a className="next"  onClick={this.showNext}> &#10095; </a>
			</div>
			)
	}
}

export default ImagesCarouselComponent