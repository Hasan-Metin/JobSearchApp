import {StyleSheet, Dimensions} from 'react-native';

export const topicItemStyle = StyleSheet.create({
  container: {
    padding: 12,
    margin: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  name: {fontWeight: 'bold', color: 'white', fontSize: 40},
  icon: {
    width: 300,
    height: 400,
    resizeMode: 'stretch',
    margin: 5,
    borderRadius: 10,
  },
});

export const introPageStyle = StyleSheet.create({
  safeLayout: {flex: 1},
  container: {flex: 1, backgroundColor: '#bdbdbd', padding: 10},

  contentContainerStyle: {
    alignItems: 'center',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignContent: 'center',
  },
  heroText: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export const jobItemStyle = StyleSheet.create({
  container: {
    padding: 10,
    margin: 7,
    borderRadius: 6,
    borderWidth: 2,
    backgroundColor: '#f2f2f2',
    borderColor: 'rgba(255,255,255,0.7)',
  },
  name: {fontSize: 20, fontWeight: 'bold'},
});

export const bannerStyle = StyleSheet.create({
  container: {
    padding: 5,
    margin: 3,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: 'cadetblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.7)',
    marginVertical: 40,
  },
  bannerText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export const modalStyle = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 7,
  },
  jobTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  jobTypeContainer: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 3,
  },
  jobType: {
    fontSize: 20,
    fontWeight: '500',
    flexShrink: 1,
  },
  buttonContainer: {
    backgroundColor: 'cadetblue',
    padding: 5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  buttonTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  imgContainer: {
    flex: 1,
    paddingHorizontal: 3,
  },
  jobCompany: {fontSize: 20, fontWeight: '500'},
  companyImg: {
    height: Dimensions.get('window').height * 0.25,
    //width: Dimensions.get('window').width * 0.3,
    //flex: 1,

    resizeMode: 'contain',
  },
  innerBox: {
    flexDirection: 'row',
  },
});

export const sepLineStyle = StyleSheet.create({
  line: {borderWidth: 1, borderColor: '#bdbdbd', margin: 7},
});

export const floatButtonStyle = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: 'rgba(0,0,255,0.3)',
    flexDirection: 'row',
    margin: 7,
  },
  right: {
    flex: 1,
    backgroundColor: 'cadetblue',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flex: 1,
    backgroundColor: 'tomato',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export const jobPageStyle = StyleSheet.create({
  safeLayout: {flex: 1},
  container: {flex: 1, backgroundColor: '#bdbdbd'},
  flatListHeaderStyle: {
    padding: 5,
    backgroundColor: '#ec407a',
    margin: 5,
    borderRadius: 5,
  },
  flatListHeaderTextStyle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});

export const indicatorStyle = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center', flex: 1},
});

export const touchButton = StyleSheet.create({
  container: {
    padding: 5,
    margin: 3,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#6200ee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(255,255,255,0.7)',
    marginVertical: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});
