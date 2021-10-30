import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, View, Text,TouchableHighlight,Dimensions,TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';
import { Icon ,Slider} from 'react-native-elements'
const Dice = () => {
    const [maxDice, setMaxDice] = useState(1);
    const [randomDice,setRandomDice] = useState([])
    const [flip,setFlip] = useState(false)
    const diceArr = ['dice-one','dice-two','dice-three','dice-four','dice-five','dice-six']
    setValue=(data)=>{
      setMaxCount(Math.floor(data?.value))
    }
    generateRandom=()=>{
        setFlip(true)
        setTimeout(() => {
          let diceValue =  diceArr.sort(() => Math.random() - Math.random()).slice(0, maxDice)
          setRandomDice(diceValue)
          setFlip(false)
        }, 3000)  
    }
    if(flip){
        return <LottieView source={require('../assets/coinflip.json')} autoPlay loop />;
    }
    return (
        <View style={{flex:0.7,alignItems: 'stretch', justifyContent: 'center' }}>
            <View style={{flex:1}}>
                <Text style={styles.rangeTxt}>Max Dice: {maxDice}</Text>
                <Slider
                    thumbStyle={{height: 20, width: 20, backgroundColor: '#2189dc'}}
                    value={maxDice}
                    allowTouchTrack={true}
                    maximumValue={6}
                    minimumValue={1}
                    step={1}
                    onValueChange={(value) => setMaxDice(parseInt(value))}
                />
            </View>
            <SafeAreaView style={{flex: 1}}>
                <View style={styles.containerMain}>
                    
                    <View style={{flexDirection:"row"}}>
                        
                        {randomDice.map((number,index) =>
                            <View style={{flex:1}} key={index}>
                                    <Icon
                                    name={number}
                                    type='font-awesome-5'
                                    size={60}
                                    color='red'
                                />
                            </View>
                            )}
                    </View>
                    <TouchableOpacity style={styles.bottomView}  onPress = { () => generateRandom() }> 
                        <Text style={styles.btnTxt}>Roll dice</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </View>
    )
}


export default Dice

const styles = StyleSheet.create({
    containerMain: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    number:{
      fontSize:50,
      fontWeight:'bold',
    },
    rangeTxt:{
      fontSize:30,
      fontWeight:'bold',
      color:'#1E1D1D'
    },
    btnTxt:{
      fontSize:30,
      fontWeight:'bold',
      color:"white"
    },
    bottomView: {
      width: '100%',
      height: 50,
      marginTop:100,
      backgroundColor: '#2189dc',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
  });

