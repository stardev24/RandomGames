import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {TextInput, StyleSheet, View, Text,TouchableHighlight,Dimensions,TouchableOpacity} from 'react-native';
import { Slider,Icon,Overlay,Input,Button } from 'react-native-elements';
const Home = () => {
    const [maxCount, setMaxCount] = useState({min:1,max:1000});
    const [randomValue,setRandomvalue] = useState(Math.floor((Math.random()*100) + 1))
    const [visible, setVisible] = useState(false);
    const [minmax,setMinMax] = useState({min:1,max:1000})
    const [validationMsg,setValidationMsg] = useState({minErr:'',maxErr:''})

    generateRandom=()=>{
      const min = Math.ceil(maxCount.min);
      const max = Math.floor(maxCount.max);
      const random = Math.floor(Math.random() * (max - min + 1) + min);
      setRandomvalue(random);
    }
    toggleOverlay = () => {
        setVisible(!visible);
    };
    submitMinMax=()=>{
        if(minmax.min == "" || minmax.max == ""){
            alert("Min and Max values are out of bound.Please reset the values")
            return
        }
        if(minmax.min < 1){
            setValidationMsg(prevState => ({
                ...prevState,
                "minErr": 'Min value should be greater than or equal to 1'
            }))
            return
        }
        if(minmax.max > 100000000){
            setValidationMsg(prevState => ({
                ...prevState,
                "maxErr": 'Max value should be less than or equal to 100000000'
            }))
            return
        }
        if(minmax.max < minmax.min){
            setValidationMsg(prevState => ({
                ...prevState,
                "maxErr": 'Max value should be more than min value'
            }))
            return
        }
        if(minmax.max < minmax.min){
            setValidationMsg(prevState => ({
                ...prevState,
                "maxErr": 'Max value should be more than min value'
            }))
            return
        }
        setMaxCount(prevState => ({
            ...prevState,
            min:minmax.min,
            max:minmax.max
        }))
        toggleOverlay()
    }
    return (
        <View style={{flex:1,alignItems: 'stretch', justifyContent: 'center' }}>

                <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.rangeTxt}>Range: {maxCount.min} to {maxCount.max}</Text>
                    <Icon
                        name='edit'
                        type='font-awesome-5'
                        size={30}
                        color='#2189dc'
                        onPress={toggleOverlay} 
                        style={{alignContent:'flex-end'}}
                        
                    />
                </View>

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
                        <Text style={styles.number}>{randomValue} </Text>
                    </TouchableHighlight>
                    
                    <TouchableOpacity style={styles.bottomView}  onPress = { () => generateRandom() }> 
                        <Text style={styles.btnTxt}>Get random number</Text>
                    </TouchableOpacity>
                </View>
                <Overlay isVisible={visible} onBackdropPress={toggleOverlay} fullScreen>
                <Input
                    label="Min Range Value"
                    placeholder='Enter Min Range Value'
                    keyboardType='numeric'
                    value={minmax.min.toString()}
                    name="min"
                    leftIcon={{ type: 'material-icons', name: 'input' }}
                    onChangeText={(value)=>{
                        if(value != ""){
                            let minVal = parseInt(value)
                            setMinMax(prevState => ({
                                ...prevState,
                                "min": minVal
                            }))
                        }

                    }}
                    errorMessage={validationMsg.minErr}
                />
                <Input
                    label='Max Range Value'
                    placeholder='Enter Max Range Value'
                    keyboardType='numeric'
                    name="max"
                    value={minmax.max.toString()}
                    onChangeText={(value)=>{
                        if(value!=""){
                            let maxVal = parseInt(value)
                            setMinMax(prevState => ({
                                ...prevState,
                                "max": maxVal
                            }))
                        }

                    }}
                    leftIcon={{ type: 'material-icons', name: 'input' }}
                    errorMessage={validationMsg.maxErr}
                />
                <Button
                    icon={
                        <Icon
                        name="save"
                        size={15}
                        color="white"
                        />
                    }
                    title="Save"
                    onPress={submitMinMax}
                />
                </Overlay>
        </View>
    )
}


export default Home

const styles = StyleSheet.create({
    containerMain: {
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
      paddingLeft:10,
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
      backgroundColor: '#2189dc',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20
    },
    textStyle: {
      color: '#fff',
      fontSize: 18,
    },
  });

