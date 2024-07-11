import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { database } from '../config/config';
import { ref, onValue } from "firebase/database";

type Operation = {
  id: string;
  operation: string;
  amount: string;
  comment: string;
};

export default function HistoryScreen() {
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    const fetchData = () => {
      onValue(ref(database, 'operations'), (snapshot) => {
        const data = snapshot.val();
        const operationsArray = data ? Object.keys(data).map(key => ({ id: key, ...data[key] })) : [];
        setOperations(operationsArray);
      });
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Historial</Text>
      <FlatList
        data={operations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item} onPress={() => alert(item.comment)}>
            <Text style={styles.operationText}>{item.operation}</Text>
            <Text style={styles.amountText}>{item.amount}</Text>
          </TouchableOpacity>
        )}
      />
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
  item: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 4,
  },
  operationText: {
    fontSize: 18,
    fontWeight: '600',
  },
  amountText: {
    fontSize: 16,
    color: '#888',
  },
});