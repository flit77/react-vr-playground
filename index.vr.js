import React from 'react';
import Forest from './components/Forest';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class musical_exp_react_vr_pusher extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('images/background.jpg')} />
        <Forest trees={100} perimeter={15} colors={['#016549', '#87b926', '#b1c96b']} />
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
