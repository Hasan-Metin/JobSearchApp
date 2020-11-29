import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {JobItem, JobModal, FloatButton, Banner} from '../components';
import {jobPageStyle, indicatorStyle} from '../styles';

const Jobs = (props) => {
  const {selectedLanguage} = props.route.params;

  const [data, setData] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const [isLoading, setLoading] = useState(true);

  async function fetchData() {
    const response = await axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
    );
    setData(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onJobSelect = (item) => {
    setModalFlag(true);
    setSelectedJob(item);
  };
  const renderJobs = ({item}) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} />
  );

  const onJobSave = async () => {
    setModalFlag(false);
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);
    const updatedJobList = [...savedJobList, selectedJob];
    await AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList));
  };

  return (
    <SafeAreaView style={jobPageStyle.safeLayout}>
      <View style={jobPageStyle.container}>
        <Banner title={'JOBS FOR ' + selectedLanguage.toUpperCase()} />
        <JobModal
          isShown={modalFlag}
          job={selectedJob}
          buttonTitle="Save"
          setFlag={(flag) => {
            setModalFlag(flag);
            setSelectedJob({});
          }}
          onSelect={() => {
            onJobSave();
          }}
        />
        <View style={jobPageStyle.container}>
          {isLoading ? (
            <View style={indicatorStyle.container}>
              <ActivityIndicator size="large" color="#00ff00" />
            </View>
          ) : (
            <FlatList
              data={data}
              renderItem={renderJobs}
              keyExtractor={(item, _) => item.id}
              ListHeaderComponent={() => (
                <Text style={jobPageStyle.flatListHeaderTextStyle}>
                  {data.length} Job Opportunity(s) Listed.
                </Text>
              )}
              ListHeaderComponentStyle={jobPageStyle.flatListHeaderStyle}
            />
          )}
        </View>
        <FloatButton
          rightTitle="Saved Jobs"
          leftTitle="Change Language"
          onSelectRight={() => props.navigation.navigate('SavedJobs')}
          onSelectLeft={() => props.navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export {Jobs};
