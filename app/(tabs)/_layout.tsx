import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Missão',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="planet"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="sensors"
        options={{
          title: 'Sensores',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="pulse"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="energy"
        options={{
          title: 'Energia',
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="flash"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}