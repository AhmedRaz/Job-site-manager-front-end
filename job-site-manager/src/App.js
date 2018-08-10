import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { RestfulAdapter } from "./adapters";


class App extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    RestfulAdapter.indexFetch('images')
    .then(data => {
      this.setState({
        images: data
      }, () => console.log(this.state.images))
      })
    }

    renderImages = () => {
      return this.state.images.map(image => {
        return <img className="image-tag" src={ `data:image/jpeg;base64, ${image.image_data} ` } />
      })
    }

  render() {
    console.log(this.props.testData);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img className="image-tag" src={ `data:image/jpeg;base64, ${this.props.testData} ` } /><br/>
        { this.renderImages() }
        {/* <img src={ `data:image/jpeg;base64, ${this.state.image.image_data} ` } /> */}
      </div>
    );
  }
}

export default App;
