import React from 'react';
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
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
