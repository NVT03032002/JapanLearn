import React from "react";
import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import data from "../data/test.json";
import images from "../components/TestScreen/imageMap";
import ImgComponent from "../components/TestScreen/ImgComponent";

const TestScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <ImgComponent src={images[item]} />}
                numColumns={1}
            />
        </View>
    );
};

export default TestScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    }
});
