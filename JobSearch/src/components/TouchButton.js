import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {touchButton} from '../styles';

const TouchButton = (props) => {
  return (
    <TouchableOpacity style={touchButton.container} onPress={props.onSelect}>
      <Text style={touchButton.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {TouchButton};
