import React, { useState } from 'react';
import { View, Text, TextInput, Switch, TouchableOpacity, StyleSheet } from 'react-native';

export const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [allowDataUsage, setAllowDataUsage] = useState(false);
  const [contacto, setContacto] = useState('');
  const [email, setEmail] = useState('');

  const handleSaveProfile = () => {
    
    console.log('Guardando perfil:', { name, allowDataUsage, contacto, email });
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil</Text>
      
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Nombre Completo"
      />

      <Text style={styles.welcomeMessage}>¡Hola, {name.split(' ')[0]}!</Text>

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Autorización de Uso de Datos:</Text>
        <Switch
          trackColor={{ false: '#ccc', true: '#00bfff' }}
          thumbColor={allowDataUsage ? '#ffffff' : '#f4f3f4'}
          ios_backgroundColor="#ccc"
          onValueChange={value => setAllowDataUsage(value)}
          value={allowDataUsage}
        />
      </View>

      <TextInput
        style={styles.input}
        value={contacto}
        onChangeText={text => setContacto(text)}
        placeholder="Número de Celular"
        keyboardType="phone-pad"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Correo Electrónico"
        keyboardType="email-address"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>Guardar Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#007bff',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#f2f2f2',
    color: '#333',
  },
  welcomeMessage: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
    color: '#666',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  switchText: {
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;