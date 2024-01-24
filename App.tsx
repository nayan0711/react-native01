import { View, Text, SafeAreaView, ScrollView, StatusBar, StyleSheet, TouchableOpacity, 
ActivityIndicator,
Button, Platform} from 'react-native'
import React, { useState } from 'react'
const App = () => {
  const [show, setShow]=useState(false)
  async function displayLoader(){
    setShow(true)

    await setTimeout(() => {
      setShow(false)
    }, 4000);
  }
  return (
   
      // <View>
      //   <StatusBar backgroundColor={'green'} barStyle={'dark-content'} hidden={true}></StatusBar>
        
      //   <View>
      //     {
      //       Platform.OS=="ios"?
      //       <View style={{backgroundColor:'green',height:40,width:40}}></View>
      //       :
      //       <View style={{backgroundColor:'blue',height:40,width:40}}></View>
      //     }
      //   </View>
     

  <View style = {{  backgroundColor:'blue' }}>
    <Text>App</Text>

    <ScrollView style={{backgroundColor :'yellow'}}>
      <View style={{ flex: 1, backgroundColor:'blue' }} >
          {/* ... your Text components */}
          {/* top */}
          <View style={styles.headingTop}>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
              </View>
        
              <View style={styles.headingBottom}>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
                <View>
                  <Text style={styles.container}>Hii</Text>
                </View>
              </View>
      </View>
    </ScrollView>
{/* 
    <TouchableOpacity>
      <Text style={[styles.Button, styles.success]}>Button</Text>
    </TouchableOpacity> */}
  </View>


    
    
  )
}

const styles = StyleSheet.create({
  Button:{
    borderRadius:4,
    textAlign:'center',
    backgroundColor:'blue',
    color:'white',
    margin:15,

  },
  headingTop: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor :'red'

  },

  headingBottom: {

    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor :'red'

  },
  container: {
    flex: 1,
    height: 40,
    width: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    marginHorizontal: 25,
    marginVertical: 20,
  },
  box1:{
    flex:1,
    backgroundColor:'green',

  },
  success:{
    backgroundColor:'green',
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioText:{
    fontSize:20,
  },
  radio:{
    height:10,
    width:10,
    borderColor:'red',
    borderRadius:100,
    borderWidth:2,
  },

})

export default App