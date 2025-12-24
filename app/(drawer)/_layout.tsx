// app/(drawer)/_layout.tsx

import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import {  MotiView } from 'moti';
import { useNavigation } from '@react-navigation/native';
import {
  Home,
  Calendar,
  History,
  Settings,
  Menu,
} from 'lucide-react-native';

function CustomDrawerContent(props: any) {
  return (
    <LinearGradient colors={['#E6E6FA', '#F8D0E8', '#FAFAFA']} style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ paddingTop: 0 }}>
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: 'https://img.icons8.com/color/96/female-user-cleaning.png' }}
              style={styles.avatar}
            />
          </View>
          <Text style={styles.userName}>Welcome, Lovely! 💕</Text>
          <Text style={styles.userTagline}>Keep your home sparkling ✨</Text>
        </View>

        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </LinearGradient>
  );
}

function AnimatedHeaderTitle() {
  return (
    <View style={styles.titleContainer}>
      <MotiView
        from={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{
          loop: true,
          repeatReverse: true,
          type: 'timing',
          duration: 3000,
        }}
      >
        <Text style={styles.headerTitleText}>
          Cleaning Planner
        </Text>
      </MotiView>
      <Text style={styles.sparkleEmoji}>✨</Text>
    </View>
  );
}

function HeaderLeft() {
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      onPress={() => navigation.toggleDrawer()}
      style={{ marginLeft: 16, padding: 8 }}
    >
      <Menu size={28} color="#6C5CE7" strokeWidth={2.5} />
    </TouchableOpacity>
  );
}

export default function DrawerLayout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" backgroundColor="#E6E6FA" />

      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          headerBackground: () => (
            <LinearGradient
              colors={['#F8B8D0', '#E6E6FA']}
              style={{ flex: 1 }}
            />
          ),

          headerLeft: () => <HeaderLeft />,
          headerTitle: () => <AnimatedHeaderTitle />,

          drawerActiveBackgroundColor: '#F8B8D0aa',
          drawerActiveTintColor: '#6C5CE7',
          drawerInactiveTintColor: '#666',
          drawerLabelStyle: { fontSize: 16, fontWeight: '500' },
          
          // Rounded corners fully removed
          drawerStyle: {
            width: 280,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            overflow: 'hidden', // এটা রাখলাম gradient overflow না হয়
          },
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Home',
            drawerIcon: ({ color }) => <Home size={24} color={color} strokeWidth={2} />,
          }}
        />
        <Drawer.Screen
          name="weekly-plan"
          options={{
            title: 'Weekly Plan',
            drawerIcon: ({ color }) => <Calendar size={24} color={color} strokeWidth={2} />,
          }}
        />
        <Drawer.Screen
          name="history"
          options={{
            title: 'History',
            drawerIcon: ({ color }) => <History size={24} color={color} strokeWidth={2} />,
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            title: 'Settings',
            drawerIcon: ({ color }) => <Settings size={24} color={color} strokeWidth={2} />,
          }}
        />
      </Drawer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E6E6FA',
  },
  avatarContainer: {
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 4,
    borderColor: '#FFF',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6C5CE7',
  },
  userTagline: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  titleContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  headerTitleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  sparkleEmoji: {
    fontSize: 20,
    marginTop: 4,
  },
});