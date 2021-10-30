import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {Share, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import { Icon ,Header} from 'react-native-elements'
const HeaderCmp = () => {
    const onShare = async () => {
        try {
          const result = await Share.share({
            title: 'Random Games',
            message: `Please install this app and happy gaming!
            https://play.google.com/store/apps/details?id=com.tsgames.randomgames`, 
            url: 'https://play.google.com/store/apps/details?id=com.tsgames.randomgames'
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
              alert(result.activityType)
            } else {
              alert("Shared successfully")
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
    };
    return (
        <Header
            containerStyle={styles.headerContainer}
            leftComponent={<Icon
                name='share-alt'
                type='font-awesome'
                size={40}
                color="#fff"
                onPress={onShare}
            />}
            centerComponent={{ text: 'Random Games', style: { color: '#fff',fontWeight:'bold',fontSize:20 } }}
            rightComponent={{ icon: '', color: '#fff'}}
        />
    )
}


export default HeaderCmp

const styles = StyleSheet.create({
    headerContainer: {
        height: Platform.select({
            android: 86,
            default: 44,
        }),
        marginTop:20,
        backgroundColor:'#2189dc'
    }
  });

