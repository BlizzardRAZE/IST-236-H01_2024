import { Modal, View, Text, StyleSheet } from "react-native";
import NavButton from "../components/NavButton";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

// Function to set up Recipe Screen (Modal)
function RecipeView(props) {
  // Set Safe Area Screen Boundaries
  const insets = useSafeAreaInsets();

  return (
    // Create Modal
    <Modal visible={props.visible} animationType="slide">
      {/* Create SafeAreaInset */}
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        {/* Create View for Title Container */}
        <View style={styles.titleContainer}>
          {/* Show the recipe's title*/}
          <Text style={styles.title}>{props.title}</Text>
        </View>
        {/* Create View for ingredients */}
        <View style={styles.textContainer}>
          {/* Show the ingredients*/}
          <Text style={styles.text}>{props.text}</Text>
        </View>

        {/* Create View for navButtonContainer*/}
        <View style={styles.navButtonContainer}>
          {/* Create button to go back to recipes*/}
          <NavButton onNext={props.onClose}>Return To Recipes</NavButton>
        </View>
      </View>
    </Modal>
  );
}

// Export to different files
export default RecipeView

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        width:"100%",
        backgroundColor:Colors.accent500,
        alignItems:'center',
    },
    titleContainer:{
        flex:1,
        justifyContent:'center',
    },
    title:{
        fontSize:40,
        textAlign:'center',
        fontFamily:'libreBaskerVilleBold',
        color:Colors.primary800,
    },
    textContainer:{
        flex:5,
        width:"90%",
        borderWidth:3,
        backgroundColor:Colors.primary500,
        borderColor:Colors.accent800,
        padding:10,
    },
    text:{
        color:'black',
        fontSize:20,
        fontFamily:'baskervvilleFont',
    },
    navButtonContainer:{
        marginTop:10,
        flex:1,
    },
})