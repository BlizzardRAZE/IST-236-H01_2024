import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
  <>
      {/* Trent Miller */}
      {/* Set status bar styling */}
      <StatusBar style='light'/>
      {/* Set SafeAreaView Screen Container */}
      <SafeAreaView style={styles.appContainer}>

        {/* Set View for Image Container */}
        <View style={styles.imageContainer}>
          {/* Require image*/}
          <Image style={styles.image} source={require("./assets/images/myImage.jpg")}/>
        </View>

        {/* Set View for Text Container */}
        <View style={styles.textContainer}>

          {/* Set text content */}
          <Text style={styles.title}>Trent Miller</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("mailto:trmill0320@gmail.com")}>Email Address: trmill0320@gmail.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+1(843)6853321")}>Phone: (843)-685-3321</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/BlizzardRAZE")}>GitHub: BlizzardRAZE</Text>
        </View>

      </SafeAreaView>
  </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#085437',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer:{
    flex:3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39ad89",
    width: "90%",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#159e69",
    marginBottom: 45,
  },
  title:{
    color: "#ffffff",
    fontSize: 30,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom: 15,
  },
  text:{
    color: "#ffffff",
    fontSize: 20,
    marginBottom: 10,
  },
  imageContainer:{
    flex:6,
    paddingTop:50,
    width: "100%",
    alignItems: "center",
  },
  image:{
    height: 450,
    width: "75%",
    resizeMode: "cover",
    borderRadius: 15,
    borderWidth: 3,
    borderColor: "#159e69",
  },
});
