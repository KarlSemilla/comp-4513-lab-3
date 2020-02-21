import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderApp from './components/HeaderApp.js'
import PhotoThumb from './components/PhotoThumb.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import Home from './components/Home.js'
import * as cloneDeep from 'lodash/cloneDeep';
import {Route} from 'react-router-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {photos: [] };
  }

  render(){
    return (
      <main>
        <HeaderApp />
        <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/browse' exact
          render={ (props) =>
            <PhotoBrowser
              photos={this.state.photos}
              updatePhoto={this.updatePhoto} />
          }
        />
        <Route path='/about' exact component={Home} />
      </main>
    );
  }

  async componentDidMount() {
    try{
      const url = "http://randyconnolly.com/funwebdev/3rd/api/travel/images.php";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( {photos: jsonData});
    }
    catch (error) {
      console.error(error)
    }
  }

  updatePhoto = (id, photo) => {
    // Create deep clone of photo array from state.
    // We will use a lodash function for that task.
    const copyPhotos = cloneDeep(this.state.photos);
    // find photo to update in cloned array
    const photoToReplace = copyPhotos.find( p => p.id === id);
    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.location.city = photo.location.city;
    photoToReplace.location.country = photo.location.country;
    // update state
    this.setState( {photos: copyPhotos } );
}

}

export default App;
