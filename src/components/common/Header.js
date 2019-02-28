import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Header = (props) => {
  return (
    <View style={styles.containerStyle}>
      <Text>{props.title}</Text>
    </View>
  )
}

const styles = {
  containerStyle: {
      backgroundColor: '#f8f8f8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2
  }
}

export default Header
