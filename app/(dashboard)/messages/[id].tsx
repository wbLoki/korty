import { ThemedText, ThemedView } from '@/components';
import { useLocalSearchParams } from 'expo-router';
import { StyleSheet } from 'react-native';
// import React from 'react'

const DynamicScreen = () => {
    const { id } = useLocalSearchParams();
  return (
    <ThemedView>
      <ThemedText>Message {id}</ThemedText>
    </ThemedView>
  )
}

export default DynamicScreen

const styles = StyleSheet.create({})