import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/theme';
import { useMission } from '../../context/MissionContext';

export default function EnergyScreen() {
  const { state } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚡ Energia</Text>

      <Text style={styles.card}>
        Painéis Solares: {state.metrics.power.toFixed(1)}%
      </Text>

      <Text style={styles.card}>
        Consumo Atual: {(100-state.metrics.power).toFixed(1)}%
      </Text>

      <Text style={styles.card}>
        Bateria Restante: {state.metrics.power.toFixed(1)}%
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