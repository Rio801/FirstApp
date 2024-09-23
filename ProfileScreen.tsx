import {Button, StyleSheet, Text, View} from 'react-native';

const ProfileScreen = ({navigation, route}: any) => {
  return (
    <View style={profileStyles.container}>
      <Text style={profileStyles.text}>
        This is {route.params.name}'s profile
      </Text>
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const profileStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#FF69B4', // Optional background color
  },
  text: {
    fontSize: 40,
  },
});
export default ProfileScreen;
