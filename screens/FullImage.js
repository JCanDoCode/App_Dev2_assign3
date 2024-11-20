import { StyleSheet, View, Image } from "react-native";

export default function FullImage({ route }) {
    // {detailId} takes the route parameters passed in from the button that took the user here
    const {img} = route.params;
    
    return(
        <View style={styles.container}>
            <Image
                source={{uri: img.urls.regular}}
                style={styles.fullImage}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "darkgrey"
    },
    fullImage: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
    }
})