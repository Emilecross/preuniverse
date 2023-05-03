import React from 'react';
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AppLandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Cello_Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Welcome to HSC Pro</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
      style={styles.loginButton}
      onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
    color: 'blue',
  },
  loginButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default AppLandingPage;
