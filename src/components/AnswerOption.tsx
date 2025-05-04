import { Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

type AnswerOption = {
  option: string;
  isSelected?: boolean;
  onPress: () => void;
}

export default function AnswerOption({option, isSelected, onPress}: AnswerOption) {
  return (
    <Pressable 
      onPress={onPress}
      style={[
        styles.container,
        isSelected && {
          backgroundColor: '#E1F396',
          borderColor: '#E1F396',
        }
      ]}
    >
      <Text>{option}</Text>
    </Pressable>
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