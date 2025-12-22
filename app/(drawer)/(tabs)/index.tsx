
// app/(drawer)/(tabs)/index.tsx

import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Cleaning Planner</Text>
      <Text style={styles.sub}>
        Weekly plan overview + Daily progress
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  sub: {
    marginTop: 10,
    color: '#666',
  },
});
