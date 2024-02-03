import { View, Image, Text, StyleSheet } from "react-native";

// Create Function to create a movie Item
function movieItem(props){
    return (
      // Create View to hold the movie
        <View style={styles.movieContainer}>
          {/* Title of the Movie */}
          <View style={styles.titleContainer}>
            <Text style={styles.itemTitle}>{props.name}</Text>
          </View>
    
          {/* Poster Image of the Movie */}
          <View style={styles.imageContainer}>
            <Image style={styles.itemImage} source={props.image} />
          </View>
    
          {/* Rating for the Movie */}
          <View style={styles.ratingContainer}>
            <Text style={styles.itemRating}>{props.rating} / 10</Text>
          </View>
        </View>
      );
};

export default movieItem;

const styles = StyleSheet.create({
    movieContainer:{
        width:"90%",
        alignSelf:"center",
        marginBottom:25,
    },
    titleContainer:{
        padding:10,
        backgroundColor:"#1663d0",
        marginBottom:10,
        borderWidth:3,
        borderRadius:5,
        borderColor:"#94cdff",
    },
    itemTitle:{
        color:"white",
        fontSize:25,
        textAlign:"center",
    },
    imageContainer:{
        alignItems:"center",
        borderWidth:3,
        borderRadius:5,
        borderColor:"#94cdff",
        marginBottom:10,
    },
    itemImage:{
        height:550,
        width:"100%",
        resizeMode:"cover",
    },
    ratingContainer:{
        backgroundColor:"#1663d0",
        borderWidth:3,
        borderRadius:5,
        borderColor:"#94cdff",
        marginBottom:20,
    },
    itemRating:{
        color:"white",
        fontSize:25,
        textAlign:"center",
    },
});
