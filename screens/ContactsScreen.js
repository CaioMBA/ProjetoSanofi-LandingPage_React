import React, { useState } from 'react';
import { View, Text, Modal, Button, StyleSheet } from 'react-native';

export default function ContactsScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Button title="Abrir Contatos" onPress={() => setModalVisible(true)} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Contatos da Equipe</Text>
          <Button title="Fechar" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: { fontSize: 18, fontWeight: 'bold' },
});
