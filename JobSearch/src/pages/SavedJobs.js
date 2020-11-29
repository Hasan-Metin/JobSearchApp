import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, FlatList, Text, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {JobItem, Banner, FloatButton, JobModal} from '../components';
import {jobPageStyle} from '../styles';

const SavedJobs = (props) => {
  const [savedJobsList, setSavedJobsList] = useState([]);
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});

  const fetchLocalSavedData = () => {
    AsyncStorage.getItem('@SAVED_JOBS').then((response) => {
      const savedlist = response == null ? [] : JSON.parse(response);
      setSavedJobsList(savedlist);
    });
  };

  useEffect(() => {
    fetchLocalSavedData();
  }, []);

  const onResetLocalList = () => {
    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify([]))
      .then(() => {
        setSavedJobsList([]);
        props.navigation.goBack();
      })
      .then(Alert.alert('Deleted All Saved Jobs!'));
  };

  const popUpConfirm = () => {
    if (savedJobsList.length === 0) {
      Alert.alert('There is no job on this list!');
    } else {
      Alert.alert(
        'CONFIRM',
        'Do you want to clean all saved jobs?',
        [
          {
            text: 'Cancel',
            onPress: () => null,
          },
          {
            text: 'OK',
            onPress: () => {
              onResetLocalList();
            },
          },
        ],
        {cancelable: true},
      );
    }
  };

  const renderSavedJobs = ({item}) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} />
  );

  const onRemoveJobItem = async () => {
    setModalFlag(false);
    let jobList = savedJobsList;

    for (let [i, job] of jobList.entries()) {
      if (job.id === selectedJob.id) {
        jobList.splice(i, 1);
      }
    }
    await setSavedJobsList(jobList);
    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(savedJobsList));
  };

  const onJobSelect = (item) => {
    setModalFlag(true);
    setSelectedJob(item);
  };

  return (
    <SafeAreaView style={jobPageStyle.safeLayout}>
      <View style={jobPageStyle.container}>
        <Banner title="SAVED JOB OPPURTUNITIES" />
        <JobModal
          isShown={modalFlag}
          job={selectedJob}
          buttonTitle="Remove From List"
          setFlag={(flag) => {
            setModalFlag(flag);
            setSelectedJob({});
          }}
          onSelect={() => {
            onRemoveJobItem();
          }}
        />
        <FlatList
          data={savedJobsList}
          renderItem={renderSavedJobs}
          keyExtractor={(_, index) => index.toString()}
          ListEmptyComponent={() => (
            <Text style={jobPageStyle.flatListHeaderTextStyle}>
              No Saved Job!
            </Text>
          )}
        />
        <FloatButton
          rightTitle="Clean List"
          leftTitle="Jobs"
          onSelectRight={() => {
            popUpConfirm();
          }}
          onSelectLeft={() => props.navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
