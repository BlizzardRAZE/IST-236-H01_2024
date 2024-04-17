import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import Button from "./Button";

function ErrorOverlay(props) {
  return (
    <View>
      <Text style={[styles.text, styles.title]}>An Error Occurred!</Text>
      <Text style={[styles.text, styles.title]}></Text>
    </View>
  );
}

export default ErrorOverlay;
