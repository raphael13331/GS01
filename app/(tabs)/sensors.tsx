import { ScrollView, StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/theme';
import { useMission } from '../../context/MissionContext';

export default function SensorsScreen() {
  const { state } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>📡 Sensores</Text>

      {state.tempHistory.slice(-10).map((item: { value: number }, index: number) => (
        <Text key={index} style={styles.item}>
          Temperatura: {item.value.toFixed(1)}°C
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.dark.background,
    padding:20
  },
  title:{
    color:'white',
    fontSize:24,
    marginBottom:20
  },
  item:{
    color:'white',
    backgroundColor: Colors.dark.backgroundElement,
    padding:10,
    marginBottom:8,
    borderRadius:8
  }
});