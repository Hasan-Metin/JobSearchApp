import React from 'react';
import {View, Text, TouchableOpacity, Image, Linking} from 'react-native';
import Modal from 'react-native-modal';

import {modalStyle, sepLineStyle} from '../styles';
import {TouchButton} from '../components';

const JobModal = (props) => {
  const {job} = props;
  const {isShown} = props;

  const getTimeAgo = () => {
    let moment = require('moment');
    return moment(new Date(job.created_at)).fromNow();
  };

  return (
    <Modal
      isVisible={isShown}
      animationIn="fadeInUp"
      animationOut="fadeOutUp"
      onBackdropPress={() => props.setFlag(false)}>
      <View style={modalStyle.modalBackground}>
        <Text style={modalStyle.jobTitle}>{job.title}</Text>
        <View style={sepLineStyle.line} />
        <View style={modalStyle.innerBox}>
          <View style={modalStyle.imgContainer}>
            <Image
              style={modalStyle.companyImg}
              source={{uri: job.company_logo}}
            />
            <Text style={modalStyle.jobCompany}>{job.company}</Text>
          </View>
          <View style={modalStyle.jobTypeContainer}>
            <Text style={modalStyle.jobType}>
              {job.type}/ {job.location}{' '}
            </Text>
            <View>
              <Text style={modalStyle.jobType}>Release Time :</Text>
              <Text style={modalStyle.jobType}>{getTimeAgo()}</Text>
            </View>
            <TouchButton
              title="Details"
              onSelect={() => {
                Linking.openURL(job.url);
              }}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={props.onSelect}
          style={modalStyle.buttonContainer}>
          <Text style={modalStyle.buttonTitle}>{props.buttonTitle}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export {JobModal};
