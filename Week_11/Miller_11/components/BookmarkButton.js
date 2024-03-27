import { Fontisto } from '@expo/vector-icons';
import { Pressable } from "react-native";
import Colors from '../constants/Colors';

// Function to create Bookmark Button 
function BookmarkButton(props) {
  // Check to see if the user pressed the bookmark
  if (props.pressed) {
    // If so, Fill in bookmark
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark-alt" size={30} color={Colors.accent500} />
      </Pressable>
    );
  } else {
    // Otherwise, only outline bookmark
    return (
      <Pressable onPress={props.onPress}>
        <Fontisto name="bookmark" size={30} color={Colors.accent500} />
      </Pressable>
    );
  }
}

// Export to different files
export default BookmarkButton;
