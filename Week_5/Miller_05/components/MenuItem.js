



import {View,Text, Image, StyleSheet} from "react-native"
import Colors from "../constants/colors";

// Function to show food items with their name, image, and price
function MenuItem(props){

    return(
        // Set View for Menu Item
        <View style={styles.itemContainer}>
            {/* Set Container for title */}
            <View style={styles.titleContainer}>
                {/* Show the name of food */}
                <Text style={styles.title}>{props.name}</Text>
            </View>
            {/* Set Container for image */}
            <View style={styles.imageContainer}>
                {/* Show image of food */}
                <Image style={styles.image} source={props.image}/>
            </View>
            {/* Set Container for price */}
            <View style={styles.priceContainer}>
                {/* Show price of food */}
                <Text style={styles.price}>{props.price}</Text>
            </View>
        </View>
    );

}

// Export to different files
export default MenuItem;

// Set Style for MenuItem
const styles = StyleSheet.create({
    itemContainer:{
        marginBottom:20,
    },
    titleContainer:{
        backgroundColor: Colors.primary500,
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.secondary500,
        marginBottom:10,
    },
    title:{
        fontSize:35,
        padding:5,
        textAlign:'center',
        fontFamily:'italiana',
        color:Colors.accent500,
    },
    imageContainer:{
        alignItems:'center',
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.secondary500,
        marginBottom:10,
    },
    image:{
        width:"100%",
        height:250,
        resizeMode:'cover'
    },
    priceContainer:{
        backgroundColor: Colors.primary500,
        borderWidth:3,
        borderRadius:5,
        borderColor:Colors.secondary500,
    },
    price:{
        fontSize:35,
        padding:5,
        textAlign:'center',
        fontFamily:'italiana',
        color:Colors.accent500,
    }
})