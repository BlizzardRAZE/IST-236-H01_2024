import { StyleSheet, View, FlatList } from "react-native";
import { STATES } from "../data/dummy-data";
import StateGridTile from "../components/StateGridTile";
import Colors from "../constants/Colors";

// Function to show the HomeScreen
function HomeScreen(props) {
  function renderStateItem(itemData) {
    function pressHandler(){
      props.navigation.navigate("CampgroundsOverviewScreen",{
        stateId: itemData.item.id
      })
    }
    return (
      <StateGridTile
        name={itemData.item.name}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    )
  }

  return (
    <View>
      <FlatList
        data={STATES}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={renderStateItem}
        numColumns={2}
      />
    </View>
  );
}

// Export to different files
export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
