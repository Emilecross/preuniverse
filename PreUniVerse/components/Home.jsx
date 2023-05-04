import * as React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    <TouchableOpacity onPress={() => navigation.navigate('AppLandingPage')}>
        <Text style={{ backgroundColor: '#f0f' }}>Back to landing page</Text>
    </TouchableOpacity>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = focused ? 'home-outline' : 'home-sharp';
        break;
      case 'My Classes':
        iconName = focused ? 'book-outline' : 'book-sharp';
        break;
      case 'Bookings':
        iconName = focused ? 'call-outline' : 'call-sharp';
        break;
      case 'Profile':
        iconName = focused ? 'person-outline' : 'person-sharp';
        break;
      case 'Settings':
        iconName = focused ? 'settings-outline' : 'settings-sharp';
        break;
      default:
    }
    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
})


const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="My Classes" component={SettingsScreen} />
      <Tab.Screen name="Bookings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Home;
