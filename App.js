//import React in our code
import React,{useState} from 'react';

//import all the components we are going to use
import {StyleSheet, View,} from 'react-native';
import { Header,Icon } from 'react-native-elements';
import Tabs from './components/navigation/Tabs'
import HeaderCmp from './components/header/headerCmp'
const App = () => {

  return (
    <>
      <HeaderCmp />
      <Tabs/>
    </>
  );
};

const styles = StyleSheet.create({

});
export default App;