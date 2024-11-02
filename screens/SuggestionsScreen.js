import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function SuggestionsScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name) {
      isValid = false;
      newErrors.name = 'Nome é obrigatório';
    }
    if (!email) {
      isValid = false;
      newErrors.email = 'Email é obrigatório';
    }
    if (!idea) {
      isValid = false;
      newErrors.idea = 'Ideia é obrigatória';
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Sugestão enviada com sucesso!');
      setName('');
      setEmail('');
      setIdea('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Envie uma sugestão</Text>
      <TextInput
        style={styles.input}
        placeholder="Seu Nome"
        value={name}
        onChangeText={setName}
      />
      {errors.name && <Text style={styles.error}>{errors.name}</Text>}
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.error}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Ideia | Sugestão"
        value={idea}
        onChangeText={setIdea}
      />
      {errors.idea && <Text style={styles.error}>{errors.idea}</Text>}
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  error: { color: 'red', marginBottom: 10 },
});
