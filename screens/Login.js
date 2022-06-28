import React, { useContext, useState } from 'react';
import * as firebase from 'firebase';
import { UsuarioContext } from '../contexts/UsuarioContext';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from 'react-native';

export default function LoginScreen({ navigation }) {
  const [logado, setLogado] = useContext(UsuarioContext);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.conteudo}>
      <Text style={styles.logo}>
        <Icon name="car" size={70} AlignItems="center" />
      </Text>
      <Text style={styles.titulo}>Carona Online</Text>

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
      <View style={styles.espacamento}>

        <View style={styles.espacamento}>
          <Button
            title="Entrar"
            color="cornflowerblue"
            onPress={() => {
              firebase
                .auth()
                .signInWithEmailAndPassword(email, senha)
                .then((userCredential) => setLogado(true))
                .catch((error) => alert(error.message));
            }}
          />
        </View>

        <View style={styles.espacamento}>
          <Button
            title="Cadastre-se"
            color="cornflowerblue"
            onPress={() => {
              navigation.navigate('Cadastre-se');
            }}
          />
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'darkblue',
    paddingHorizontal: 16,
  },
  logo: {
    color: 'white',
    textAlign: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  rotulo: {
    color: 'lightgray',
    paddingTop: 14,
  },
  input: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    color: 'lightgray',
  },
  espacamento: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});
