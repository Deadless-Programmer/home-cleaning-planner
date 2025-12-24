// app/(drawer)/weekly-plan.tsx

import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView, MotiText } from 'moti';
import {
  
  Sparkles,
  Brush,
  Droplets,
  Wind,
  WashingMachine,
} from 'lucide-react-native';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const dayIcons = [Brush, Droplets, Wind, Sparkles, WashingMachine, Brush, Droplets];

export default function WeeklyPlan() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Full page soft pastel gradient */}
      <LinearGradient
        colors={['#E6E6FA', '#F8D0E8', '#FAFAFA']}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Header – now top-left aligned */}
      <View style={styles.header}>
        <MotiText
          from={{ opacity: 0, translateY: -30 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 200, type: 'spring', damping: 12 }}
          style={styles.title}
        >
          Weekly Cleaning Schedule ✨
        </MotiText>

        <MotiText
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 400, type: 'timing', duration: 800 }}
          style={styles.subtitle}
        >
          Plan your week beautifully 🧹💕
        </MotiText>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {days.map((day, index) => {
          const Icon = dayIcons[index % dayIcons.length];

          return (
            <MotiView
              key={day}
              from={{ opacity: 0, translateY: 60, scale: 0.9 }}
              animate={{ opacity: 1, translateY: 0, scale: 1 }}
              transition={{
                delay: index * 120,
                type: 'spring',
                damping: 15,
              }}
              style={styles.dayCard}
            >
              <LinearGradient
                colors={['#FFFFFF', '#F8F8FF']}
                style={StyleSheet.absoluteFillObject}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              />

              <View style={styles.dayInfo}>
                <Text style={styles.dayText}>{day}</Text>
                <Text style={styles.taskHint}>Tap to add tasks</Text>
              </View>

              <MotiView
                animate={{ rotate: ['-10deg', '10deg', '-10deg'] }}
                transition={{ loop: true, type: 'timing', duration: 4000 + index * 500 }}
              >
                <Icon size={48} color="#D7BDE2" strokeWidth={2} />
              </MotiView>
            </MotiView>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    
    paddingBottom: 16,
    paddingHorizontal: 24,
    // Removed alignItems: 'center' → now left aligned by default
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#6C5CE7',
    // textAlign: 'center' removed → left aligned
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginTop: 8,
    // textAlign: 'center' removed → left aligned
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  dayCard: {
    backgroundColor: 'transparent',
    borderRadius: 20,
    padding: 22,
    marginBottom: 18,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    height: 100,
  },
  dayInfo: {
    flex: 1,
  },
  dayText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#444',
  },
  taskHint: {
    fontSize: 15,
    color: '#999',
    marginTop: 6,
  },
});