import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../constants/theme';
import { MissionProvider } from '../context/MissionContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <MissionProvider>
      <View style={styles.root}>
        <StatusBar style="light" />
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{ headerShown: false }}
          />

          <Stack.Screen
            name="alerts"
            options={{ title: '🔔 Alertas' }}
          />

          <Stack.Screen
            name="settings"
            options={{ title: '⚙️ Configurações' }}
          />
        </Stack>
      </View>
    </MissionProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
});