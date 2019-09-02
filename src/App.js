import React from 'react';
import './App.css';
import Child from './Child';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          name: '1'
        },
        {
          name: '2'
        }
      ],
      childSelectedId: null,
      showOption: false
    }
  }

  render() {
    return (
      <div>
        {this.state.data.map((value, index) => {
          return (
            <div key={index}>
              <Child show={this.state.childSelectedId === index ? this.state.showOption : false}>
                <p>TEXTO</p>
                <button onClick={() => { this.setState({childSelectedId: index, showOption: !this.state.showOption}) }}>don't cancel</button>
              </Child>
            </div>
          );
        })}
      </div>
    );
  }
}