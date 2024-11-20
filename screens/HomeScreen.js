import { useState, useEffect } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text, Image, Button } from "@rneui/themed";

const request = "https://api.unsplash.com/photos/random?client_id=QUj6OQdPBrZla_lqdjl2HZk8HHjoqgoe7x2_fFfslEs";
async function randomImg() {
    const response = await fetch(request);
    const data = await response.json();
    return data.urls.small;
}

export default function HomeScreen({navigation}) {
    const [newImg1, setNewImg1] = useState(null);
    const [newImg2, setNewImg2] = useState(null);
    const [newImg3, setNewImg3] = useState(null);
    const [newImg4, setNewImg4] = useState(null);
    const [newImg5, setNewImg5] = useState(null);
    const [newImg6, setNewImg6] = useState(null);
    const [newImg7, setNewImg7] = useState(null);
    const [newImg8, setNewImg8] = useState(null);

    const [isNotLoaded, setNotLoaded ] = useState(true);

    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg1(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg2(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg3(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg4(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg5(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg6(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg7(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);
    useEffect(() => {
        async function fetchImg() {
            const imgUrl = await randomImg();
            setNewImg8(imgUrl); // Set the image URL in state
            setNotLoaded(false);
        };

        fetchImg(); // Call the async function
    }, []);

    if (!newImg1, !newImg2, !newImg3, !newImg4, !newImg5, !newImg6, !newImg7, !newImg8) {
        return(
            <View style={styles.container}>
                <Text h1 style={styles.heading1}>Loading...</Text>
                <Button
                    title="Search Photos"
                    onPress={() => navigation.navigate("Search")}
                />
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={{uri: newImg1}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg2}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg3}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg4}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg5}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg6}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg7}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
                <Image
                    source={{uri: newImg8}}
                    style={styles.backgroundImage}
                >
                    <ActivityIndicator
                        animating={isNotLoaded}
                        style={styles.centered}
                        size="large"
                    />
                </Image>
            </View>
            <View style={styles.absolute}>
                <Text h1 style={styles.heading1}>Premium Royalty Free Images</Text>
                <Button
                    title="Search Photos"
                    onPress={() => navigation.navigate("Search")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgContainer: {
        width: "100%",
        height: "100%",
        flex: 1,
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    backgroundImage: {
        width: 200,
        height: 200
    },
    heading1: {
        marginBottom: 20,
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: "white"
    },
    centered: {
        marginTop: 90
    },
    absolute: {
        position: "absolute"
    }
})