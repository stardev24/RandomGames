import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, View, Text,TouchableHighlight,Dimensions,TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
const Toss = () => {
    const [maxCount, setMaxCount] = useState(1000);
    const [randomValue,setRandomvalue] = useState('')
    const [flip,setFlip] = useState(false)
    setValue=(data)=>{
      setMaxCount(Math.floor(data?.value))
    }
    generateRandom=()=>{
        setFlip(true)
        setTimeout(() => {
          let tossValue = Math.random();
          if (tossValue < 0.5) {
              setRandomvalue("HEADS");
          } else {
              setRandomvalue("TAILS");
          }
          setFlip(false)
        }, 3000)  
    }
    if(flip){
        return <LottieView source={require('../assets/coinflip.json')} autoPlay loop />;
    }
    return (
        <View style={{flex:0.7,alignItems: 'stretch', justifyContent: 'center' }}>
            <View style={{flex:1}}>
            </View>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.containerMain}>

                    <TouchableHighlight
                        style = {{
                        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                        width: Dimensions.get('window').width * 0.8,
                        height: Dimensions.get('window').width * 0.8,
                        backgroundColor:'aqua',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom:20
                        }}
                        underlayColor = '#ccc'
                    >
                        <Text style={styles.number}> {randomValue}</Text>
                    </TouchableHighlight>
                    
                    <TouchableOpacity style={styles.bottomView}  onPress = { () => generateRandom() }> 
                        <Text style={styles.btnTxt}>Toss a coin</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}


export default Toss

const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    number:{
      fontSize:50,
      fontWeight:'bold',
      color:'#1E1D1D'
    },
    rangeTxt:{
      fontSize:30,
      fontWeight:'bold',
    },
    btnTxt:{
      fontSize:30,
      fontWeight:'bold',
      color:"white"
    },
    bottomView: {
      width: '100%',
      height: 50,
      backgroundColor: '#2189dc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
  });

