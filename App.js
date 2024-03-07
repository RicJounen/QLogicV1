import React from "react";
import { ImageBackground, View, StyleSheet, Image, Text, TextInput, TouchableOpacity, StatusBar } from "react-native";

 function App () {
  

  return (

    <View style={styles.container}>

      <StatusBar
        backgroundColor="black"
        hidden={false}
        />

      <ImageBackground source={require('./assets/BackGround.png')}
        style={styles.ImageBackground}>
      <Image source={require('./assets/logo.png')} 
        style={styles.logo}/>

      <View style={styles.containerEmail}>  
        <Image source={require('./assets/Icon Email.png')}
          style={styles.iconEmail}/>
          <TextInput style={styles.emailInput} 
            placeholder="Email"
            placeholderTextColor={'grey'} />
       </View>

       <View style={styles.containerSenha}> 
        <Image source={require('./assets/lock.png')}
          style={styles.iconLock}/>
          <TextInput style={styles.senhaInput}
            placeholder="Senha"
            placeholderTextColor={'grey'} />
       </View>
      
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText} >ENTRAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.esqueceuASenha}>Esqueceu a Senha?</Text>
        </TouchableOpacity>

      </ImageBackground>
    </View>

  )
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  ImageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  logo: {
    width: 135,
    height: 135,
    marginTop: 71
  },
  containerEmail: {
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 31,
    marginTop: 71
  },
  iconEmail: {
    width: 20,
    height: 16,
    marginBottom: 15,
    marginRight: 7
    
  },
  emailInput: {
    color: 'white',
    marginBottom: 12,
    width: 270
  }, 
  containerSenha: {
    borderBottomWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    width: 300,
    height: 34,
    marginTop: 29
  },
  iconLock: {
    width: 24,
    height: 24,
    marginBottom: 15,
    marginRight: 5
    
  },
  senhaInput: {
    color: 'white',
    marginBottom: 10,
    width: 270
  },
Button: {
  width: 200,
  height: 35,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 43,
  borderRadius: 10,
  backgroundColor: '#4eefff'
},
buttonText: {
  color: 'blacks'
},
esqueceuASenha: {
  color: 'white',
  fontSize: 12,
  marginTop: 29
}

});

export default App;