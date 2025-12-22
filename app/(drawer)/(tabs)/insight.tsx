// app/(drawer)/(tabs)/insight.tsx


import { View, Text, StyleSheet } from 'react-native';

export default function InsightScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Insights</Text>
      <Text style={styles.sub}>
        Cleaning strategy, habits & stats
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  sub: {
    marginTop: 8,
    color: '#666',
  },
});
