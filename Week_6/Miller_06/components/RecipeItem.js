import { Button, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

// Function to show recipes 
function RecipeItem(props) {
  return (
    // Set View for item container
    <View style={styles.item}>
      {/* Set View for title container */}
      <View style={styles.itemTitleContainer}>
        {/* Show title name */}
        <Text style={styles.itemTitle}>{props.title}</Text>
      </View>
      {/* Set View for View Button Container */}
      <View style={styles.itemButtonsContainer}>
        <View style={styles.button}>
          {/* Show View Text */}
          <Button title="View" onPress={props.onView} />
        </View>
        <View style={styles.button}>
          {/* Show Delete Text */}
          <Button title="Delete" onPress={props.onDelete} />
        </View>
      </View>
    </View>
  );
}

// Export to different files
export default RecipeItem

const styles = StyleSheet.create({
    item:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:8,
        borderRadius:6,
        backgroundColor:Colors.accent500,
    },
    itemTitleContainer:{
        justifyContent:'center',
    },
    itemTitle:{
        fontFamily:'libreBaskerVille',
        fontSize:20,
        color:Colors.primary300,
        padding:8,
    },
    itemButtonsContainer:{
        flexDirection:'row',
    },
    button:{
        marginVertical:5,
        marginHorizontal:3,
    },
})
