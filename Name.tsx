import {StyleSheet, Text, View} from 'react-native';

type Name = {
  name: string;
};

function Name({name}: Name) {
  return (
    <View>
      <Text style={styles.nameStlye}>Your Name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  nameStlye: {
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default Name;
