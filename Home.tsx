import {useState} from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import Name from './Name';

function Home({navigation}: any) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#ff00ff" />
      <Name name="LaTonya" />
      <Text style={styles.textStyle}> Counter: {count}</Text>
      <Image
        source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        style={styles.image}
        resizeMode="contain"></Image>
      <TextInput
        style={styles.textInput}
        defaultValue="This is the place holder"></TextInput>
      <Button title="Press Me" onPress={() => setCount(count + 1)} />
      <Button
        title="Go To Profile Screen"
        onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#FF69B4', // Optional background color
  },
  image: {
    width: 200, // Set your desired width
    height: 200, // Set your desired height
  },
  textInput: {
    height: 40,
    borderColor: 'pink',
    borderWidth: 1,
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Home;
