import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('jwtToken');
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>
      <Text style={styles.description}>
        Click the button below to view a list of users fetched from the API.
      </Text>
      <Button
        title="Go to User List"
        onPress={() => navigation.navigate('UserList')}
        color="#1E90FF"
      />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
   description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
});

export default HomeScreen;