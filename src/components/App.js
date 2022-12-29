import {Component} from 'react';
import './App.css';
import Navi from './Navi.js';
import Logo from './Logo.js';
import Rank from './Rank.js';
import ImageLinkForm from './ImageLinkForm.js';
import FaceRecognition from './FaceRecognition.js';
import ParticlesBg from 'particles-bg';
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: 'a57626cb49a54aa1b313b5e26843e555'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: '',
      box: {}
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));  
  }

 render() { 
  return (
    <div className="App">
      <ParticlesBg type="circle" bg={true} />
      <Navi />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
      <FaceRecognition
        box={this.state.box}
        imageURL={this.state.imageURL}
      />
    </div>
  );}
}

export default App;
