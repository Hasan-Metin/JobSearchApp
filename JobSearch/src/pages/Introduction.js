import React from 'react';
import {SafeAreaView, View, ScrollView, Button, Text} from 'react-native';

import {TopicItem, Banner} from '../components';
import {introPageStyle} from '../styles';

const topics = [
  {
    id: 0,
    name: 'Java',
    color: 'ff4081',
    icon: require('../assets/java.png'),
  },
  {
    id: 1,
    name: 'Python',
    color: 'e040fb',
    icon: require('../assets/python.png'),
  },
  {
    id: 2,
    name: 'Javascript',
    color: '3949ab',
    icon: require('../assets/javascript.jpg'),
  },
  {
    id: 3,
    name: '.NET',
    color: '00897b',
    icon: require('../assets/net.jpeg'),
  },
  {
    id: 4,
    name: 'Dart',
    color: 'e65100',
    icon: require('../assets/dart.png'),
  },
  {
    id: 5,
    name: 'Go',
    color: 'f8961e',
    icon: require('../assets/go.jpg'),
  },
  {
    id: 6,
    name: 'Ruby',
    color: 'd84315',
    icon: require('../assets/ruby.jpg'),
  },
  {
    id: 7,
    name: 'C',
    color: 'a1887f',
    icon: require('../assets/c.png'),
  },
  {
    id: 8,
    name: 'C++',
    color: '455a64',
    icon: require('../assets/cplus.jpeg'),
  },
];

const Introduction = (props) => {
  return (
    <SafeAreaView style={introPageStyle.safeLayout}>
      <View style={introPageStyle.container}>
        <Banner title="Recent Job Opportunities For Developer" />
        <Text style={introPageStyle.heroText}>
          Choose your prefered programming language.
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={introPageStyle.contentContainerStyle}>
          {topics.map((item) => (
            <TopicItem
              item={item}
              key={item.id.toString()}
              onSelecet={() => {
                props.navigation.navigate('Jobs', {
                  selectedLanguage: item.name,
                });
              }}
            />
          ))}
        </ScrollView>
        <Button
          title="See Saved Jobs"
          onPress={() => {
            props.navigation.navigate('SavedJobs');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export {Introduction};
