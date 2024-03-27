import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import List from "../components/List/List";
import Colors from "../constants/colors";


function BookmarksScreen (){
    const bookmarkedListingsCtx = useContext(BookmarksContext)
    const bookmarkedListings = LISTINGS.filter((listingItem) => {
        return bookmarkedListingsCtx.ids.includes(listingItem.id);
    })

    if (bookmarkedListings.length === 0 ){
        return <View style={styles.rootContainer}>
            <Text style={styles.text}>You Have No Saved Listings!</Text>
        </View>
    }

    return <List items={bookmarkedListings}/>
}

export default BookmarksScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: 'black',
    },
    text: {
        fontSize: 30,
        textAlign:'center', 
        fontFamily:"playfairItalic",
        fontWeight: 'bold',
        color: Colors.primary300,
        opacity: 0.6,
    },
})