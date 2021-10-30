import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View,Text } from 'react-native';

import { Icon } from 'react-native-elements'
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
  
import Home from "../screens/Home";
import Teams from "../screens/Dice";
import Toss from "../screens/Toss";
  
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontWeight:'bold',fontSize:12}}> Number</Text>,
        tabBarIcon: (tabInfo) => (
            <Icon
            name='random'
            type='font-awesome'
            size={tabInfo.focused ? 32 : 24}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    User: {
      screen: Toss,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontWeight:'bold',fontSize:12}}> Toss</Text>,
        tabBarIcon: (tabInfo) => (
            <Icon
            name='arrow-decision'
            type='material-community'
            size={tabInfo.focused ? 32 : 24}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
    Setting: {
      screen: Teams,
      navigationOptions: {
        tabBarLabel: <Text style={{ fontWeight:'bold',fontSize:12}}> Dice</Text>,
        tabBarIcon: (tabInfo) => (
            <Icon
            name='dice-d6'
            type='font-awesome-5'
            size={tabInfo.focused ? 32 : 24}
            color={tabInfo.tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: "Home",
    barStyle: { backgroundColor: "#E1E6E6" },
    tabBarLabelStyle:{FontFace:{}}
  }
);
  
const Navigator = createAppContainer(TabNavigator);



const Tabs = () => {
    return (
        <Navigator>
          <Home />
        </Navigator>
      );
}

Tabs.propTypes = {

}
Tabs.defaultProps = {

}

export default Tabs

const styles = StyleSheet.create({
    tabBarLabel:{
        fontWeight:'bold'
    }
});

