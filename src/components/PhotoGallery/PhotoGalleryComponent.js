import React, { Component } from 'react'
import image from '../../images/San-Francisco.jpg'


class PhotoGalleryComponent extends Component{
	constructor(props){
		super(props);
		this.state = {images:[{url:image, caption:"San Francisco"}],showGrid:false};
	}

	render(){
		return (
			<div className="wrapper">
				<img src = {this.state.images[0].url} />
				<p> {this.state.images[0].caption} </p>
			</div>
			
			)
	}
}

export default PhotoGalleryComponent