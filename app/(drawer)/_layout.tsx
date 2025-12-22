// Drawer Layout (app/(drawer)/_layout.tsx)

import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: true }}>
      <Drawer.Screen
        name="(tabs)"
        options={{ title: 'Dashboard' }}
      />
      <Drawer.Screen
        name="weekly-plan"
        options={{ title: 'Weekly Plan' }}
      />
      <Drawer.Screen
        name="history"
        options={{ title: 'History' }}
      />
      <Drawer.Screen
        name="settings"
        options={{ title: 'Settings' }}
      />
    </Drawer>
  );
}
