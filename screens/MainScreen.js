import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class MainScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.text}>Welcome To Shiv's Shop</Text>
            </View>
          );
        }
    }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'black',
      fontSize: 24,
      textAlign: 'center',
      alignSelf: 'center',
      fontWeight: 'bold',
      marginBottom: 30,
    },
  });