import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/theme';
import { useMission } from '../context/MissionContext';

export default function SettingsScreen() {
  const { state } = useMission();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Configurações</Text>

      <Text style={styles.item}>
        Missão: {state.config.missionName}
      </Text>

      <Text style={styles.item}>
        Tripulação: {state.config.crewCount}
      </Text>

      <Text style={styles.item}>
        Órbita: {state.config.targetOrbit} km
      </Text>

      <Text style={styles.item}>
        Temperatura Máx: {state.config.tempMaxThreshold}°C
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
  item:{
    color:'white',
    backgroundColor:Colors.dark.backgroundElement,
    padding:15,
    marginBottom:10,
    borderRadius:10
  }
});