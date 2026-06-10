import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/theme';
import { useMission } from '../../context/MissionContext';

export default function HomeScreen() {
  const { state } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 Space Analytics</Text>

      <Text style={styles.card}>
        🌡 Temperatura: {state.metrics.temperature.toFixed(1)}°C
      </Text>

      <Text style={styles.card}>
        🔋 Energia: {state.metrics.power.toFixed(1)}%
      </Text>

      <Text style={styles.card}>
        📡 Sinal: {state.metrics.signal.toFixed(1)}%
      </Text>

      <Text style={styles.card}>
        🛰 Estabilidade: {state.metrics.stability.toFixed(1)}%
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.dark.background,
    padding:20
  },
  title:{
    color:'white',
    fontSize:24,
    fontWeight:'bold',
    marginBottom:20
  },
  card:{
    backgroundColor:Colors.dark.backgroundElement,
    color:'white',
    padding:15,
    marginBottom:10,
    borderRadius:10
  }
});