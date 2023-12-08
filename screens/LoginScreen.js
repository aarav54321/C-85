import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


// Create a new screen called LoginScreen
class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  // Function to handle login
  handleLogin = async () => {
    const { email, password } = this.state;

    try {
      // Sign in with email and password
      await firebase.auth().signInWithEmailAndPassword(email, password);

      // Navigate to Ride.js upon successful login
      this.props.navigation.navigate('Ride');
    } catch (error) {
      console.error(error.message);
      // Handle login error, e.g., display an error message to the user
    }
  };

  render() {
    return (
      <View>
        {/* Input boxes for login and password */}
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          onChangeText={(password) => this.setState({ password })}
        />

        {/* Login button */}
        <TouchableOpacity onPress={this.handleLogin} style={{ backgroundColor: 'blue', padding: 10, margin: 10 }}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// Create a switch navigator to navigate from LoginScreen to Ride.js
const AppNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Ride: RideScreen, // Replace 'RideScreen' with the actual name of your Ride screen
  },
  {
    initialRouteName: 'Login',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;