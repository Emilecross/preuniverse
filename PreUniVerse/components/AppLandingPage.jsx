import React, { useRef } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const AppLandingPage = ({ navigation }) => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Image source={require('../assets/hsc_pro_logo.png')} style={styles.logo} />
        <View style={styles.inputContainer}>
          <Text>THE SMARTER WAY TO GO</Text>
          <TextInput
            ref={emailRef}
            placeholder="Email"
            style={styles.input}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <TextInput
            ref={passwordRef}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            returnKeyType="done"
            onSubmitEditing={dismissKeyboard}
          />
          <TouchableOpacity style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

const preUniBlue = '#028DE0'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: preUniBlue,
    fontFamily: "hrb"
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f0f0f0',
    paddingLeft: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: preUniBlue,
  },
  loginButton: {
    backgroundColor: preUniBlue,
    borderRadius: 10,
    paddingHorizontal: 40,
    paddingVertical: 10
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AppLandingPage;
