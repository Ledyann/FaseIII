import React from 'react';
import { StyleSheet, View, ActivityIndicator, Text, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const spinValue = new Animated.Value(0);

export default function SplahsScreen() {
  React.useEffect(() => {
    Animated.timing(spinValue, {
      toValue: 3,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
 
 const spin = spinValue.interpolate({
    inputRange: [0, 3],
    outputRange: ['0deg', '360deg'],
  });
   
  return (
    <View style={styles.container}>
      <Animated.View style={{transform: [{rotateY: spin}] }}>
        <Icon name="car" size={100} AlignItems="center" style={styles.icon} />
      </Animated.View>
      <Text style={styles.title}>Carona Online</Text>
      <ActivityIndicator animating={true} size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
       color: 'white'
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    backgroundColor: 'darkblue',
     color: 'white',
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
});

