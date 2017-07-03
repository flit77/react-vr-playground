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
  Box,
  Sphere,
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
        <SoundShape>
          <Cylinder
            radiusTop={0}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={4}
            lit={true}
            style={{
              color: '#96de4e',
              transform: [{translate: [-1,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
        <SoundShape>
          <Box
            dimWidth={0.2}
            dimDepth={0.2}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#a0da90', 
              transform: [{translate: [-0.5,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
        <SoundShape>
          <Box
            dimWidth={0.2}
            dimDepth={0.2}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#a0da90', 
              transform: [{translate: [-0.5,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
        <SoundShape>
          <Box
            dimWidth={0.4}
            dimDepth={0.2}
            dimHeight={0.2}
            lit={true}
            style={{
              color: '#b7dd60',
              transform: [{translate: [0,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
        <SoundShape>
          <Sphere
            radius={0.15}
            widthSegments={20}
            heightSegments={12}
            lit={true}
            style={{
              color: '#cee030',
              transform: [{translate: [0.5,-0.5,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
        <SoundShape>
          <Cylinder
            radiusTop={0.2}
            radiusBottom={0.2}
            dimHeight={0.3}
            segments={3}
            lit={true}
            style={{
              color: '#e6e200',
              transform: [{translate: [1,-0.2,-2]}, {rotateX: 30}],
            }}
          />
        </SoundShape>
      </View>
    );
  }
};

AppRegistry.registerComponent('musical_exp_react_vr_pusher', () => musical_exp_react_vr_pusher);
