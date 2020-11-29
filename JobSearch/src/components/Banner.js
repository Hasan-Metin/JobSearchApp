import React from 'react';
import {View, Text} from 'react-native';

import {bannerStyle} from '../styles';

const Banner = (props) => {
  return (
    <View style={bannerStyle.container}>
      <Text style={bannerStyle.bannerText}>{props.title}</Text>
    </View>
  );
};

export {Banner};
