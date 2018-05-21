import React from 'react'
import './Image.scss'

export const ImageComponent = (props) => (
	<div className="image-container">
	<a href={props.image.url}>
		<img src={props.image.url} alt="Image" />
	</a>
		<figcaption className="caption"> {props.image.caption}</figcaption>
	</div>
);