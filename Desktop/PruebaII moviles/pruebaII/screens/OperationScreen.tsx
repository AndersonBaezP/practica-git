import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { database } from '../config/config';
import { ref, push, serverTimestamp } from "firebase/database";

export default function OperationScreen() {
  const [operation, setOperation] = useState('');
  const [amount, setAmount] = useState('');
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState<string | null>(null);

  const handleSaveOperation = async () => {
    if (operation === '' || amount === '' || comment === '') {
      setMessage('Rellene los campos vacios');
      return;
    }

    const newOperation = {
      operation,
      amount,
      comment,
      
    };

    try {
      await push(ref(database, 'operations'), newOperation);
      setMessage('Operacion exitosa');
    } catch (err) {
      if (err instanceof Error) {
        setMessage(err.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva Operacion</Text>
      <TextInput
        style={styles.input}
        placeholder="id Operacion"
        value={operation}
        onChangeText={setOperation}
      />
      <TextInput
        style={styles.input}
        placeholder="Monto"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Comentario"
        value={comment}
        onChangeText={setComment}
        multiline
      />
      <Button
        title="Ejecutar"
        onPress={handleSaveOperation}
      />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  message: {
    marginTop: 10,
    color: 'green',
    textAlign: 'center',
  },
});