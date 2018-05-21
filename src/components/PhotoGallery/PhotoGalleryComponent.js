import React, { Component } from 'react'
import ImagesCarouselComponent from './ImagesCarouselComponent.js'
import './PhotoGallery.scss'


class PhotoGalleryComponent extends Component{
	constructor(props){
		super(props);
		this.state = {images:[],showGrid:false};
	}

	//Dynamically import Photo Gallery Images on componentDidMount()
	importAll(r) {
		let image = {};
		//Keeping image names as Captions
		r.keys().map((item, index) => { image[item.replace('./', '')] = r(item); });
		return image;
	}

	componentDidMount() {
	 	let importedImages = this.importAll(require.context('../../images', false, /\.(jpeg|jpg|png|gif|svg)$/));

	 	let allImages =  Object.keys(importedImages).map(function(key) {
	 		let image = {};
	 		image.url = importedImages[key];
	 		image.caption = key; //Keeping image names as Captions
	 		return image;
	 	});

	 	this.setState({images: allImages, showGrid:true});
	 }

	render(){
		return (
			<div className="wrapper">
				{this.state.showGrid ? <ImagesCarouselComponent images={this.state.images}  /> : null}
			</div>
			
			)
	}
}

export default PhotoGalleryComponent