import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Home from './screens/Home';

const App = () => {
  return (
    <>
      <Home />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {},
});

export default App;
