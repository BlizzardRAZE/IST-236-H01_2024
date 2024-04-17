import { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView } from "react-native";
import { Agenda } from 'react-native-calendars';

// Function to show the CalendarScreen
function CalendarScreen(props) {
  // return (
  //   <View>
  //     <Text>Calendar Screen</Text>
  //   </View>
  // );

  // Show Calendar
  return (
    <SafeAreaView style={styles.container}>
      <Agenda
        selected="2024-04-01"
        items={{
          '2024-04-16': [{name: 'Meeting'}],
          '2024-04-17': [{name: 'Event'}]
        }}
        renderItem={(item, isFirst) => (
          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

// Export to different files
export default CalendarScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  itemText: {
    color: '#888',
    fontSize: 16,
  }
});