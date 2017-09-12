import React, {Component} from 'react';
import PropertyScenes from './property';
import CarScenes from './car';

import {
  Scene,
  Router
} from 'react-native-router-flux';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Router>
        <Scene key='home' tabs={true}>
          {PropertyScenes()}
          {CarScenes()}
        </Scene>
      </Router>
    );
  }
}