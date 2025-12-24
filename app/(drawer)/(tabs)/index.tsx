// app/(drawer)/(tabs)/index.tsx

import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView, MotiText } from 'moti';
import { Link } from 'expo-router';
import {
  Brush,
  Sprout,
  Waves,
  Wind,
  Recycle,
  Sparkles,
  WashingMachine,
  Droplets,
} from 'lucide-react-native';

const { width, height } = Dimensions.get('window');

// Lucide cleaning icons with pastel colors
const floatingIcons = [
  { Icon: Brush, color: '#F8B8D0', size: 80 },
  { Icon: Sprout, color: '#D7BDE2', size: 75 },
  { Icon: Waves, color: '#A29BFE', size: 85 },
  { Icon: Wind, color: '#E6E6FA', size: 90 },
  { Icon: Recycle, color: '#FFB6C1', size: 80 },
  { Icon: Sparkles, color: '#FFD700', size: 70 },
  { Icon: Droplets, color: '#B0E0E6', size: 75 },
  { Icon: WashingMachine, color: '#F4A8D8', size: 85 },
];

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* Soft Pastel Gradient */}
      <LinearGradient
        colors={['#E6E6FA', '#F8D0E8', '#FAFAFA']}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Floating Animated Lucide Icons */}
      {floatingIcons.map((item, index) => (
        <MotiView
          key={index}
          from={{
            opacity: 0,
            translateY: height + 50,
            rotate: '0deg',
            scale: 0.8,
          }}
          animate={{
            opacity: 0.7,
            translateY: -height * 0.3,
            rotate: '360deg',
            scale: 1,
          }}
          transition={{
            loop: true,
            type: 'timing',
            duration: 18000 + index * 3000,
            delay: index * 2000,
          }}
          style={{
            position: 'absolute',
            left: (width / (floatingIcons.length + 1)) * (index + 1) - item.size / 2,
          }}
        >
          <MotiView
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ loop: true, type: 'timing', duration: 3000 + index * 500 }}
          >
            <item.Icon size={item.size} color={item.color} strokeWidth={1.5} />
          </MotiView>
        </MotiView>
      ))}

      {/* Main Content */}
      <View style={styles.content}>
        {/* Animated Welcome Back Title with color motion */}
        <MotiView
          from={{ opacity: 0, translateY: 60 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 400, type: 'spring', damping: 12 }}
        >
          <MotiView
            from={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{
              loop: true,
              repeatReverse: true,
              type: 'timing',
              duration: 3500,
            }}
          >
            <Text style={[styles.title, { color: '#F8B8D0' }]}>
              Welcome Back! 💕
            </Text>
          </MotiView>
        </MotiView>

        <MotiText
          from={{ opacity: 0, translateY: 40 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 600, type: 'timing', duration: 800 }}
          style={styles.subtitle}
        >
          Ready to make your home sparkle today? ✨🧹
        </MotiText>

        <MotiView
          from={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 900, type: 'spring', damping: 10 }}
        >
          <Link href="/(drawer)/weekly-plan" asChild>
            <TouchableOpacity style={styles.button}>
              <LinearGradient
                colors={['#F8B8D0', '#D7BDE2']}
                style={styles.buttonGradient}
              >
                <Text style={styles.buttonText}>View Weekly Schedule</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Link>
        </MotiView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 19,
    color: '#666',
    textAlign: 'center',
    marginBottom: 70,
    lineHeight: 28,
  },
  button: {
    borderRadius: 32,
    overflow: 'hidden',
    elevation: 10,
  },
  buttonGradient: {
    paddingVertical: 20,
    paddingHorizontal: 45,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '700',
  },
});