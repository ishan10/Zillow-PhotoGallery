import React, { Component } from 'react';
import PhotoGalleryComponent from './components/PhotoGallery/PhotoGalleryComponent'
import './styles/App.scss'


class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container">
				<h3>Zillow Photo Gallery Component </h3>
				<PhotoGalleryComponent />
			</div>
			)
	}
}

export default App