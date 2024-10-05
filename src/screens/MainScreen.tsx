import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';

const MainScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to GymTracking!</Text>
      <Button mode="contained" onPress={() => console.log('Button pressed')}>
        Start Tracking
      </Button>
    </View>
  );    
};

export default MainScreen;