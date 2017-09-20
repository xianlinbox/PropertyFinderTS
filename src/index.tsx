import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configStore from './app/configStore'
import PropertyScenes from './property';
import CarScenes from './car';

import {
  Scene,
  Router
} from 'react-native-router-flux';

export default class PropertyFinder extends Component {
  render() {
    return (
      <Provider store={configStore()}>
        <Router>
          <Scene key='home' tabs={true}>
            {PropertyScenes()}
            {CarScenes()}
          </Scene>
        </Router>
      </Provider>
    );
  }
}