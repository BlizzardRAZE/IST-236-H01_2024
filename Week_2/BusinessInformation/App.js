import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style='dark'/>
      <SafeAreaView style= {styles.container}>
        <View style={styles.imageContainer}>
            <Image style={styles.image} source={require("./assets/images/restaurant.jpg")}/>
        </View>
        <View style={styles.informationContainer}>
          <Text style={styles.text}>Oscar's Food & Spirits</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://oscarsnmb.com/")}>www.oscarsnmb.com</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:(843)-272-0707")}> (843)-272-0707</Text>
          <Text style={styles.text} onPress={() => Linking.openURL("https://maps.app.goo.gl/5eQfJXNKpSsJMa3EA")}>  Open in Google Maps</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eba134',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex: 3,
    paddingTop: 50,
    width: "100%",
  },
  image:{
    height:300,
    width: "100%",
    resizeMode: "cover",
    borderWidth: 6,
    borderColor: "#6e0202",
  },
  informationContainer:{
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    fontSize: 25,
    fontStyle: "italic",
    color: "#ffffff",
    marginBottom: 10,
  },
});
