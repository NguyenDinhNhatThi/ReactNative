import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>This is header</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "80px",
    width: "100%" ,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles : {
    color: 'white'
  }
});
