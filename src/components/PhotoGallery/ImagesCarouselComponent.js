import React, { Component } from 'react'
import {ImageComponent} from './ImageComponent.js'


class ImagesCarouselComponent extends Component{
	constructor(props){
		super(props);
		this.state = { imageNumber:0 , images : props.images};
	}

	render(){
		const rows =[];
		this.props.images.forEach((image) =>
			rows.push(<ImageComponent key={rows.length} image={image}/>)
			)

		return(

			<div className="carousel">
				{rows[this.state.imageNumber]}
			</div>
			)
	}
}

export default ImagesCarouselComponent