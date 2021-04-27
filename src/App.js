import React, { createContext } from 'react';
import './App.css';
import Cars from './Cars';
import PropTypes from 'prop-types';

//import Provider from './index';

const issContext = createContext()

class App extends React.Component {
  constructor(props) {
  super(props)
    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }
    this.moveCar = this.moveCar.bind(this);
  }

moveCar(car, side) {
  this.setState({
    cars: {
      ...this.state.cars,
      [car]: side,
    },
  });
};

  render() {
    /*const context = {
      ...this.state,
      moveCar: this.moveCar,
    }; */ 

  const { children } = this.props;

  return (
    <issContext.Provider value = { {...this.state, moveCar: this.moveCar, } }>
      { children }
      <Cars />
    </issContext.Provider>
  );
}
}

App.propTypes = {
  children: PropTypes.node.isRequired,
};


export default App;
