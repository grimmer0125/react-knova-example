import React, { Component } from 'react';

import { render } from 'react-dom';
import {
  Stage, Layer, Rect, Text, Group, Image,
} from 'react-konva';
import Konva from 'konva';

import logo from './logo.svg';
import './App.css';

class ColoredRect extends React.Component {
  state = {
    color: 'green',
  };

  handleClick = () => {
    this.setState({
      color: Konva.Util.getRandomColor(),
    });
  };

  render() {
    return (
      <Rect
        x={20}
        y={20}
        width={50}
        height={50}
        fill={this.state.color}
        shadowBlur={5}
        onClick={this.handleClick}
      />
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
    };
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = 'https://grimmer0125.github.io/images/bio.png';
    // image.src = `data:image/jpeg;base64,${nextProps.imageURL}`;
    image.onload = () => {
      this.setState({ image });
    };
  }

  render() {
    console.log('render');
    // const { image } = this.state;
    return (
      <div className="App">
        <Stage width={window.innerWidth} height={window.innerHeight}>
          <Layer>
            <Group>
              <Image
                width={500}
                height={500}
                image={this.state.image}
              />
              {/* <Text text="Try click on rect" />
             <ColoredRect />   */}
            </Group>
          </Layer>
        </Stage>
      </div>
    );
  }
}

export default App;
