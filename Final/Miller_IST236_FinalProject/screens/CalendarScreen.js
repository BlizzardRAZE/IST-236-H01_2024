import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Agenda } from "react-native-calendars";
import GlobalColors from "../constants/styles";

// Function to show the CalendarScreen
function CalendarScreen() {


  // Show Calendar
  return (
    <SafeAreaView style={styles.rootContainer}>
      <Agenda
        selected={new Date()}
        showOnlySelectedDayItems
        futureScrollRange={50}
        items={{
          "2024-04-20": [{ name: "D6 Convention - Post 3096", }],
          "2024-04-27": [{ name: "D1 Round Table - Post 10256", }, { name: "D7 Convention - Post 10420", }],
          "2024-05-01": [{ name: "Loyalty Day", }],
          "2024-05-11": [{ name: "D1 Convention - Post 8760 ", }],
        }}
        renderItem={(item) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        // If there is no event made
        // Say there is no event on that date
        renderEmptyData={() => {
          return (
            <View style={styles.noEventContainer}>
              <Text style={styles.noEventText}>
                Nothing Scheduled For This Day
              </Text>
            </View>
          );
        }}
        backgroundColor
        theme={{
          selectedDayBackgroundColor: GlobalColors.secondaryR500,
          monthTextColor:'white',
          dayTextColor:GlobalColors.primary200,
          calendarBackground: GlobalColors.primary600,
          agendaDayNumColor: GlobalColors.secondaryR500,
          agendaDayTextColor: GlobalColors.secondaryB500,
          agendaKnobColor: GlobalColors.primary200,
          reservationsBackgroundColor: GlobalColors.primary400,
          
        }}
      />
    </SafeAreaView>
  );
}

// Export to different files
export default CalendarScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: GlobalColors.primary400,
  },
  item: {
    backgroundColor: GlobalColors.primary600,
    flex: 1,
    borderRadius: 10,
    borderColor: GlobalColors.accent500,
    justifyContent:'center',
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: "white",
    fontSize: 20,
    fontFamily: "ibmPlexSans",
  },
  noEventContainer: {
    marginVertical: 50,
    alignSelf: "center",
  },
  noEventText: {
    fontSize: 20,
    fontFamily: "ibmPlexSansBold",
    color:'white',
  },
});
