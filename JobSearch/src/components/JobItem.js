import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {jobItemStyle} from '../styles';

const JobItem = (props) => {
  return (
    <TouchableOpacity style={jobItemStyle.container} onPress={props.onSelect}>
      <Text style={jobItemStyle.name}>{props.job.title}</Text>
      <Text style={jobItemStyle.name}>
        {props.job.type} / {props.job.location}
      </Text>
    </TouchableOpacity>
  );
};

export {JobItem};
