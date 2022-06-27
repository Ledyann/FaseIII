import * as firebase from 'firebase';
import React, { useContext, useState } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function UpdateDeleteScreen({ navigation, route }) {
  const [local, setLocal] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 16,
          backgroundColor: 'darkblue',
          height: 56,
          alignItems: 'center',
        }}>
        <Icon
          name="arrow-left"
          size={20}
          style={{ color: 'white' }}
          onPress={() => navigation.navigate('Home')}
        />

        <Text
          style={{
            flex: 14,
            color: 'white',
            fontSize: 26,
            textAlign: 'center',
          }}>
          Nova Carona
        </Text>
      </View>

      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.rotulo}>Local</Text>
        <TextInput
          style={styles.input}
          value={local}
          onChangeText={(text) => setLocal(text)}
        />

        <Text style={styles.rotulo}>Data</Text>
        <TextInput
          style={styles.input}
          value={data}
          onChangeText={(text) => setData(text)}
        />

        <Text style={styles.rotulo}>Horario</Text>
        <TextInput
          style={styles.input}
          value={horario}
          onChangeText={(text) => setHorario(text)}
        />
      </View>

      <View style={{ padding: 8 }}></View>
      <Button
        title="Salvar"
        onPress={() => {
          firebase
            .firestore()
            .collection('Caronas')
            .add({ local: local, data: data, horario: horario })
            .then((docRef) => navigation.navigate('Home'));
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rotulo: {
    color: 'gray',
    paddingTop: 16,
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
