import React, { useState } from 'react';
import { Button, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Image } from 'react-native';
import ItemChips from './ItemChips';
import { FlatList } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { Card } from "@paraboly/react-native-card";

function DashboardScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
      }}
    >
      {/* Quiz report card below */}
      <TouchableOpacity
        onPress={() => navigation.navigate('Newsletter')}
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          width: '80%',
          height: '20%',
          backgroundColor: 'gray',
          marginBottom: 10
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={{ height: '100%', width: 80 }}
          />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ marginLeft: 10 }}>My Quiz Report</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Announcement card below */}
      <TouchableOpacity
        onPress={() => navigation.navigate('AppLandingPage')}
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          width: '80%',
          height: '20%',
          backgroundColor: 'gray',
          margin: 10
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={{ height: '100%', width: 80 }}
          />
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ marginLeft: 10 }}>Announcements</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Next Class card */}
      <View
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          width: '80%',
          flexGrow: 1,
          backgroundColor: 'gray',
          margin: 10
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-start',
            alignItems: 'center'
          }}
        >
          <Image
            source={{ uri: 'https://via.placeholder.com/150' }}
            style={{ height: '30%', width: '100%' }}
          />
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text>Your Next Class is Mathematics</Text>
            <Text>On Saturday</Text>
            <Text>From 3:20 PM to 4:50PM</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}

const ClassesScreen = () => {
  const classes = [];
  const classItem = {
    year: '11',
    subject: 'Physics',
    roomNum: '102',
    day: 'Saturday',
    timeStart: '13:00',
    timeEnd: '16:00'
  };
  for (let i = 0; i < 7; i = i + 1) {
    classes.push(classItem);
  }

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 20,
      paddingHorizontal: 10
    },
    card: {
      backgroundColor: 'gray',
      borderRadius: 10,
      marginBottom: 10,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    }
  });

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View
        style={{
          flex: 1,
          alignItems: 'flex-start',
          paddingVertical: 20,
          paddingLeft: 20,
          flexGrow: 1,
          gap: 5
        }}
      >
        <Text style={{ fontSize: 24 }}>
          Year {item.year} {item.subject}
        </Text>
        <Text style={{ fontSize: 18 }}>Room {item.roomNum}</Text>
        <Text style={{ fontSize: 20 }}>
          {item.day} {item.timeStart} - {item.timeEnd}
        </Text>
      </View>
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }}
        style={{ height: '100%', width: '20%' }}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={classes} // replace with your actual data
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      />
    </SafeAreaView>
  );
};

function BookingsScreen({ navigation }) {
  const [booked, setBooked] = useState(true);
  const bookingItem = {
    date: '05/05/2023',
    time: '4:30PM',
    location: 'Online',
    year: 8,
    subject: 'English',
    imageUrl: 'https://via.placeholder.com/150' // Replace with your booking image URL
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#028DE0'
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
      textAlign: 'center',
      marginTop: 5
    },
    imageSlot: {
      width: 100,
      height: 100,
      backgroundColor: '#f2f2f2',
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10
    },
    bookingImage: {
      width: 80,
      height: 80
    },
    button: {
      marginTop: 10,
      backgroundColor: '#ff6347',
      padding: 10,
      borderRadius: 5,
      width: 120,
      alignItems: 'center'
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    }
  });

  if (booked)
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.bookingCard}>
          <View style={styles.imageSlot}>
            <Image
              source={{ uri: bookingItem.imageUrl }}
              style={styles.bookingImage}
            />
          </View>
          <Text style={styles.bookingCardText}>
            {bookingItem.date} at {bookingItem.time}
          </Text>
          <Text style={styles.bookingCardText}>{bookingItem.location}</Text>
          <Text style={styles.bookingCardText}>
            Year {bookingItem.year} - {bookingItem.subject}
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Modify Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setBooked(!booked)}
              style={[
                styles.button,
                { marginLeft: 10, backgroundColor: '#bdbdbd' }
              ]}
            >
              <Text style={styles.buttonText}>Cancel Booking</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );

  const subjects = ['Math', 'Science', 'English']; // array of subjects
  const days = ['29th', '30th', '31st', '1st']
  const times = ['3:00 pm', '3:30 pm', '4:00 pm', '4:30 pm', '5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm'];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
      }}
    >
      <TouchableOpacity onPress={() => setBooked(!booked)}>
        <Text style={{ marginVertical: 8, fontSize: 36 }}>Toggle</Text>
      </TouchableOpacity>
      <Text style={{ marginVertical: 8, fontSize: 36 }}>Subjects</Text>
      <ItemChips data={subjects}></ItemChips>
      <Text style={{ marginVertical: 8, fontSize: 36 }}>Days</Text>
      <ItemChips data={days}></ItemChips>
      <Text style={{ marginVertical: 8, fontSize: 36 }}>Times</Text>
      <ItemChips data={times}></ItemChips>
    </SafeAreaView>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Dashboard':
        iconName = focused ? 'home' : 'home-sharp';
        break;
      case 'My Classes':
        iconName = focused ? 'school' : 'school-sharp';
        break;
      case 'Bookings':
        iconName = focused ? 'calendar' : 'calendar-sharp';
        break;
      case 'Profile':
        iconName = focused ? 'person' : 'person-sharp';
        break;
      case 'Settings':
        iconName = focused ? 'settings' : 'settings-sharp';
        break;
      default:
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#0A224E',
  tabBarInactiveTintColor: 'gray',
  headerTitle: () => (
    <View style={{ flex: 1, overflow: 'hidden', justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={require('../assets/NC.png')}
        resizeMode="contain"
        style={{ alignSelf: 'center', width: 200, height: 100 }}
      />
    </View>
  ),
  headerStyle: {
    backgroundColor: '#0A224E',
  },
  headerTintColor: '#fff',
  headerTitleAlign: 'center',
});

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="My Classes" component={ClassesScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Profile" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default Home;
