import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useMission } from '../context/MissionContext';

const Colors = {
  background: '#0f172a'
};

export default function AlertsScreen() {
  const { state } = useMission();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔔 Alertas</Text>

      {state.alerts.map((alert: { id: string | number; title: string; description: string }) => (
        <View key={alert.id} style={styles.alert}>
          <Text style={styles.text}>{alert.title}</Text>
          <Text style={styles.text}>{alert.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.background,
    padding:20
  },
  title:{
    color:'white',
    fontSize:24,
    marginBottom:20
  },
  alert:{
    backgroundColor:'#402020',
    padding:15,
    marginBottom:10,
    borderRadius:10
  },
  text:{
    color:'white'
  }
});