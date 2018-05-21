import React, { Component } from 'react';
import PhotoGalleryComponent from './components/PhotoGallery/PhotoGalleryComponent'

class App extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="container">
				<PhotoGalleryComponent />
			</div>
			)
	}
}

export default App