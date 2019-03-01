import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
      backgroundColor: '#24292e',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
}

export default Header
