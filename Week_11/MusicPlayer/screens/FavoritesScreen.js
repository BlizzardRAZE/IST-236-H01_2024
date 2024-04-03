import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { SONGS } from "../data/dummy-data";
import SongItem from "../components/SongItem";
import { useSelector } from "react-redux";
import { FlatList } from "react-native-gesture-handler";



function FavoritesScreen (){
    const favoriteSongIds = useSelector((state) => state.favoriteSongs.ids);

    const displayedSongs = SONGS.filter((songItem) =>{
        return favoriteSongIds.includes(songItem.id)
    })

    function renderSongItem(itemData) {
        const songItemProps = {
            id: itemData.item.id,
            title : itemData.item.title,
            imageUrl : itemData.item.imageUrl,
            artist : itemData.item.artist,
            duration : itemData.item.duration,
            releaseYear : itemData.item.releaseYear,
            listIndex : itemData.index,
        }
        return( <SongItem {...songItemProps}/>)
    }

    return(
        <ImageBackground
        source={require("../assets/images/music_back.jpeg")}
        resizeMode="cover"
        style={styles.container}
        imageStyle={styles.backgroundImage}
        >
            <View style={styles.container}>
                <FlatList
                    data={displayedSongs}
                    keyExtractor={(item) => item.id}
                    renderItem={renderSongItem}

                />
            </View>

        </ImageBackground>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
      },
      backgroundImage: {
        opacity: 0.1,
      },
})