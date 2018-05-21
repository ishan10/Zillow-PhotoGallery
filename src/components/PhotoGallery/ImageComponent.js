import React from 'react'

export const ImageComponent = (props) => (
	<div className="image-container">
		<img src={props.image.url} alt="Image" />
		<a href={props.image.url}>URL</a>
		<span> {props.image.caption}</span>
	</div>
);