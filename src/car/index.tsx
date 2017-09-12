import React from 'react';
import {Scene} from 'react-native-router-flux';
import Search from './scenes/carSearchScene';

const navigationBarStyle = {
  backgroundColor: 'blue'
}

export default () => {
  return (
    <Scene key='Car'
           initial={true}
           title='Car'
           navigationBarStyle={navigationBarStyle}
           titleStyle={{color: 'white'}}>
      <Scene key='Search' component={Search} title='Search'/>
    </Scene>
  );
}
