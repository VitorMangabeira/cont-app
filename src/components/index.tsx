import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>Contador: {contador}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
        <Button title="Decrementar" onPress={() => setContador(contador - 1)} />
        <Button title="Resetar" onPress={() => setContador(0)} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterContainer: {
    backgroundColor: '#32cd32', 
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  counterText: {
    color: '#fff', 
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});
