import { Text, View } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('AppLandingPage')}>
                <Text style={{ backgroundColor: '#f0f' }}>Back to landing page</Text>
            </TouchableOpacity>
        </View>
      );
};

export default Home;
