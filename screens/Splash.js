import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native';

export default function SplahsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carona Online</Text>
      <ActivityIndicator animating={true} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 24,
  },
});
