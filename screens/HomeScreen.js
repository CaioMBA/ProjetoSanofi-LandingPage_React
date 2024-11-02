import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto Sanofi</Text>
      <Text style={styles.subtitle}>Automatize e simplifique seu dia a dia</Text>
      <Text style={styles.description}>
        Controle de Compras de Malas e acessórios para força de vendas, para
        acompanhar o que cada colaborador tem solicitado e com que frequência
        a troca ocorre.
      </Text>
      <Button
        title="Contatos"
        onPress={() => navigation.navigate('Contacts')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#9350ff' },
  subtitle: { fontSize: 18, color: '#c77b40' },
  description: { fontSize: 16, textAlign: 'center', margin: 10 },
});
