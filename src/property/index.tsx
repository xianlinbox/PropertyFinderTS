import React from 'react';
import {Scene} from 'react-native-router-flux';
import Search from './scenes/propertySearchScene';

const navigationBarStyle = {
  backgroundColor: '#48BBEC'
}

export default () => {
  return (
    <Scene key='Property'
           initial={true}
           title='Property'
           navigationBarStyle={navigationBarStyle}
           titleStyle={{color: 'white'}}>
      <Scene key='Search' component={Search} title='Search'/>
    </Scene>
  );
}
