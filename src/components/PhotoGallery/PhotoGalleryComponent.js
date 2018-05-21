import React, { Component } from 'react'
import image1 from '../../images/San-Francisco.jpg'
import image2 from '../../images/github.svg'
import ImagesCarouselComponent from './ImagesCarouselComponent.js'


class PhotoGalleryComponent extends Component{
	constructor(props){
		super(props);
		this.state = {images:[{url:image1, caption:"San Francisco"} , {url:image2, caption:"Github"}],showGrid:false};
	}

	render(){
		return (
			<div className="wrapper">
				<ImagesCarouselComponent images={this.state.images}  />
			</div>
			
			)
	}
}

export default PhotoGalleryComponent