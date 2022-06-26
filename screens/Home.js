/* */
import * as firebase from 'firebase';
import React, { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../contexts/UsuarioContext';

import Icon from 'react-native-vector-icons/FontAwesome';
import {
  FlatList,
  Pressable,
  SafeAreaView,
  Text,
  View,
  Image,
} from 'react-native';

export default function Lista({ navigation }) {
  const [logado, setLogado] = useContext(UsuarioContext);
  const [caronas, setCaronas] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      firebase
        .firestore()
        .collection('Caronas')
        .get()
        .then((querySnapshot) => {
          const dados = [];
          querySnapshot.forEach((doc) => {
            dados.push({ id: doc.id, ...doc.data() });
          });
          setCaronas(dados);
        })
        .catch((error) => alert(error.message));
    });

    return unsubscribe;
  }, [navigation]);

  const Caronas = ({ item }) => {
    return (
      <View>
        <Pressable
          style={{
            flexDirection: 'row',
            height: 70,
            borderBottomColor: 'lightgray',
            borderBottomWidth: 5,
            alignItems: 'center',
            paddingHorizontal: 16,
            backgroundColor: 'lavender',
          }}
          onPress={() => {
            navigation.navigate('Detalhe', {
              id: item.id,
              local: item.local,
              data: item.data,
              horario: item.horario
            });
          }}>
          <Text style={{ flex: 1 }}>{item.local}</Text>
          <Text style={{ flex: 2 }}>{item.horario}</Text>
          <Text style={{ flex: 3 }}>{item.data}</Text>
          <Image
            style={{ flex: 4, height: 30, width: 30 }}
            resizeMode="contain"
            source={item.imagem}
          />
        </Pressable>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
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
            onPress={() => {
              setLogado(false);
            }}
          />

          <Text
            style={{
              flex: 14,
              color: 'white',
              fontSize: 26,
              textAlign: 'center',
            }}>
            Caronas
          </Text>
        </View>
        <FlatList data={caronas} renderItem={Caronas} />

        <Pressable
          style={{
            position: 'absolute',
            bottom: 16,
            right: 16,
            height: 48,
            width: 48,
            backgroundColor: 'cornflowerblue',
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.navigate('Novo');
          }}>
          <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
