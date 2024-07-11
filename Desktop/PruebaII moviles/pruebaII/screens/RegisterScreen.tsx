import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { auth } from '../config/config';
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('');
  const [contacto, setContacto] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async () => {
    if (email === '' || password === ''||user ===''||contacto ==='') {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Mensaje', 'Registro Exitoso');
      navigation.navigate('Login');
    } catch (err: any) {
      if (err instanceof Error) {
        setError(err.message);
        Alert.alert('Error', err.message);
      } else {
        Alert.alert('Error', 'Fallo el registro');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        value={user}
        onChangeText={setUser}
      
      />
      <TextInput
        style={styles.input}
        placeholder="Contacto"
        value={contacto}
        onChangeText={setContacto}
        keyboardType="numeric"
      />
      <Button
        title="Registrar"
        onPress={handleRegister}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
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
  error: {
    marginTop: 10,
    color: 'red',
    textAlign: 'center',
  },
});