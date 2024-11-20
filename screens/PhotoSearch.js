import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Text } from "@rneui/themed";

import PhotoListItem from '../components/PhotoListItem';  // Assuming this is your custom component

export default function PhotoSearch({ navigation }) {
  const [inputValue, setInputValue] = useState("");  // The search query
  const [result, setResult] = useState([]);  // The search results
  const [loading, setLoading] = useState(false);  // Loading state

  useEffect(() => {
    // Don't fetch if the input is empty
    if (inputValue.trim() === "") {
      setResult([]);
      return;
    }

    // Function to fetch results based on the input value
    async function getResults() {
      setLoading(true);  // Start loading
      const request = `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=QUj6OQdPBrZla_lqdjl2HZk8HHjoqgoe7x2_fFfslEs`;

      try {
        const response = await fetch(request);
        const data = await response.json();
        setResult(data.results);
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call the function to get results when inputValue changes
    getResults();
  }, [inputValue]);  // Effect depends on inputValue

  // Render each item in the FlatList
  const renderItem = ({ item }) => {
    return (
      <PhotoListItem searchResults={item} navigatorRef={navigation} />
    );
  };

  return (
    <View style={styles.container}>
      <Text h1>Search Photos</Text>
      <TextInput
        style={styles.input}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}  // Update input value as user types
        placeholder="Search photos..."
      />

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />  // Show loading spinner
      ) : (
        <FlatList
          data={result}  // Data passed to FlatList
          renderItem={renderItem}  // Render function for each item
          keyExtractor={(item) => item.id.toString()}  // Unique key for each item
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20
    },
    input: {
        marginBottom: 20,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
    }
})