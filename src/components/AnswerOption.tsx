import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AnswerOption() {
  return (
    <View style={styles.container}>
      <Text>AnswerOption</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      borderWidth: 1,
      borderColor: 'lightgrey',
      borderRadius: 100, 
      padding: 20,
  }
})