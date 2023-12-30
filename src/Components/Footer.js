import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style ={styles.textStyle}>This is footer</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    backgroundColor: "greenp",
    justifyContent: 'bottom',
    color:"white"
  },
  textStyle :{
    color : "white"
  }
});
