// app/(drawer)/(tabs)/_layout.tsx

import { Tabs } from 'expo-router';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
// import { View, StyleSheet } from 'react-native';
import {
  Home,
  Lightbulb,
  Sparkles,
} from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#F8B8D0', // Soft pink
        tabBarInactiveTintColor: '#AAA',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginTop: 4,
        },
        tabBarStyle: {
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
          elevation: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
        },
        tabBarBackground: () => (
          <LinearGradient
            colors={['#F8D0E8', '#E6E6FA']}
            style={{ flex: 1 }} // borderRadius remove করলাম → no rounded corners
          />
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <MotiView
              from={{ scale: 0.9 }}
              animate={{ scale: focused ? 1.15 : 1 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              <Home
                size={26}
                color={focused ? '#F8B8D0' : '#AAA'}
                strokeWidth={focused ? 2.5 : 2}
              />
            </MotiView>
          ),
        }}
      />

      <Tabs.Screen
        name="insight"
        options={{
          tabBarLabel: 'Insights',
          tabBarIcon: ({ color, focused }) => (
            <MotiView
              from={{ scale: 0.9 }}
              animate={{ scale: focused ? 1.15 : 1 }}
              transition={{ type: 'spring', damping: 15 }}
            >
              {focused ? (
                <Sparkles size={26} color="#F8B8D0" strokeWidth={2.5} />
              ) : (
                <Lightbulb size={26} color="#AAA" strokeWidth={2} />
              )}
            </MotiView>
          ),
        }}
      />
    </Tabs>
  );
}