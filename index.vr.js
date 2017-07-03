import React from 'react';
import Forest from './components/Forest';
import SoundShape from './components/SoundShape';
import {
  AppRegistry,
  asset,
  Pano,
  SpotLight,
  View,
  Cylinder,
} from 'react-vr';

export default class musical_exp_react_vr_pusher extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('images/background.jpg')} />
        <Forest trees={100} perimeter={15} colors={['#016549', '#87b926', '#b1c96b']} />
        <SpotLight intensity={1} style={{transform: [{translate: [1, 4, 4]}],}} />
        <SoundShape>
          <Cylinder
            radiusTop={0.2}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={8}
            lit={true}
            style={{
              color: '#96ff00', 
              transform: [{translate: [-1.5,-0.2,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
