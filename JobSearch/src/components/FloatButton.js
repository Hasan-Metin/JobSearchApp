import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {floatButtonStyle} from '../styles';

const FloatButton = (props) => {
  return (
    <View style={floatButtonStyle.container}>
      <TouchableOpacity
        style={floatButtonStyle.right}
        onPress={props.onSelectLeft}>
        <Text style={floatButtonStyle.title}>{props.leftTitle}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={floatButtonStyle.left}
        onPress={props.onSelectRight}>
        <Text style={floatButtonStyle.title}>{props.rightTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {FloatButton};
