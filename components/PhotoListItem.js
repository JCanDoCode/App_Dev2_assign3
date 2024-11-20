import { Text, Button, ListItem, Avatar } from "@rneui/themed";

export default function PhotoListItem({ searchResults, navigatorRef }) {
    const imgData = searchResults;
    imgData.results

    return (
        <ListItem>
            <Avatar
                source={{uri: imgData.urls.thumb}}
            />
            <ListItem.Content>
                <Text>{imgData.alt_description}</Text>
            </ListItem.Content>
            <Button
                icon={{
                    type: "ionicon",
                    name: "expand-outline",
                    size: 20
                }}
                buttonStyle={{
                    backgroundColor: "#00000000",
                }}
                onPress={() => navigatorRef.navigate("Image", {img: imgData})}
            />
        </ListItem>
    );
}