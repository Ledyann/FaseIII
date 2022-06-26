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

export default function RegisterScreen({ navigation }) {
  const [logado, setLogado] = useContext(UsuarioContext);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

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
          onPress={() => navigation.navigate('Login')}
        />

        <Text
          style={{
            flex: 14,
            color: 'white',
            fontSize: 26,
            textAlign: 'center',
          }}>
          Novo Usuario
        </Text>
      </View>
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.rotulo}>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(text) => setNome(text)}
        />

        <Text style={styles.rotulo}>Email</Text>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.rotulo}>Senha</Text>
        <TextInput
          style={styles.input}
          value={senha}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
        />

        <View style={{ paddingTop: 24 }}>
          <Button
            title="Salvar"
            color="cornflowerblue"
            onPress={() => {
              firebase
                .auth()
                .createUserWithEmailAndPassword(email, senha)
                .then((userCredential) => setLogado(true))
                .catch((error) => alert(error.message));
            }}
          />
        </View>
      </View>
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

