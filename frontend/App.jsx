import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import AppLandingPage from './components/AppLandingPage';
import Newsletter from './components/Notices';
import React from 'react';
import { Flex, Image, NativeBaseProvider, Text } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const LogoTitle = (props) => {
  return (
    <Flex flexDirection='row'>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/Cello_Logo.png')}
        alt='cello-logo'
      />
      <Text>{props.name}</Text>
    </Flex>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='AppLandingPage' component={AppLandingPage}/>
            <Stack.Screen name='Home' component={Home}
              options={{ headerTitle: <LogoTitle title={'Home'} /> }}/>
            <Stack.Screen name='Newsletter' component={Newsletter}/>
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaView>
  );
};