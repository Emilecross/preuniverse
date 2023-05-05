import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import SubjectChips from './SubjectChips';
// import { Card } from "@paraboly/react-native-card";

function DashboardScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <Button
        title="Back to Auth"
        onPress={() => navigation.navigate('AppLandingPage')}
      />
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Newsletter')} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button title="Go to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
}

function BookingsScreen({ navigation }) {
  const [booked, setBooked] = useState(true);
  const bookingItem = {
    'date': '05/05/2023',
    'time': '4:30PM',
    'location': 'Online',
    'year': 8,
    'subject': 'English',
    'imageUrl': 'https://via.placeholder.com/150', // Replace with your booking image URL
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#028DE0',
    },
    bookingCard: {
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '90%'
    },
    bookingCardText: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'left',
      marginTop: 5,
    },
    imageSlot: {
      width: 100,
      height: 100,
      backgroundColor: "#f2f2f2",
      borderRadius: 50,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 10,
    },
    bookingImage: {
      width: 80,
      height: 80,
    },
    button: {
      marginTop: 10,
      backgroundColor: '#ff6347',
      padding: 10,
      borderRadius: 5,
      width: 120,
      alignItems: 'center',
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

  if (booked) return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.bookingCard}>
        <View style={styles.imageSlot}>
          <Image source={{ uri: bookingItem.imageUrl }} style={styles.bookingImage} />
        </View>
        <Text style={styles.bookingCardText}>{bookingItem.date} at {bookingItem.time}</Text>
        <Text style={styles.bookingCardText}>{bookingItem.location}</Text>
        <Text style={styles.bookingCardText}>Year {bookingItem.year} - {bookingItem.subject}</Text>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Modify Booking</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setBooked(!booked)} style={[styles.button, { marginLeft: 10, backgroundColor: '#bdbdbd' }]}>
            <Text style={styles.buttonText}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
  <>
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => setBooked(!booked)}>
        <Text style={{ marginVertical: 8, fontSize: 36 }}>Toggle</Text>
      </TouchableOpacity>
      <Text style={{ marginVertical: 8, fontSize: 36 }}>Subjects</Text>
        <SubjectChips></SubjectChips>
    </View>
  </>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Dashboard':
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
  tabBarActiveTintColor: '#028DE0',
  tabBarInactiveTintColor: 'gray',
})


const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="My Classes" component={SettingsScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default Home;
