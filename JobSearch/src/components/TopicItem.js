import React from 'react';
import {TouchableOpacity, Text, Image} from 'react-native';

import {topicItemStyle} from '../styles';

const TopicItem = (props) => {
  const {item} = props;
  const colorStyle = {backgroundColor: `#${item.color}`};

  return (
    <TouchableOpacity
      style={[topicItemStyle.container, colorStyle]}
      onPress={props.onSelecet}>
      <Image source={item.icon} style={topicItemStyle.icon} />
      <Text style={topicItemStyle.name}>{item.name.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

export {TopicItem};
