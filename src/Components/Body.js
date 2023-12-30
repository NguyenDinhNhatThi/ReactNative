import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Body() {
  return (
    <View style={styles.container}>
      <Text style ={styles.textStyle}>Đăng nhập</Text>
      <div>
        <input></input>
      </div>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex : 1,
    magrinTop :'300px ',
    backgroundColor: "black",
    alignItems:"center",
    justifyContent: 'bottom',
    color:"white"
  },
  textStyle :{
    color : "white"
  }
});
