import { Image, Pressable, ScrollView, StyleSheet, TextInput, View, Text } from "react-native"
import data from "../data/data.json"
import { Theme } from "../../assets/Theme"
import CustomBox2 from "../components/CustomBox2"

export default GrammarScreen = ({ navigation }) => {
    const CustomView = ({ title }) => (
        <View style={styles.view}>
            <Text style={styles.view_title}>{title}</Text>
        </View>
    )

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchBox}>
                <Image source={require('../../assets/search.png')} style={styles.image} />
                <TextInput style={styles.searchInput} />
            </View>

            {data.grammar.map((item, index) =>
            (
                <Pressable
                    key={item.id}
                    onPress={() => navigation.navigate('GrammarDetail', { item })}>
                    <CustomBox2 title={item.grammar} desc={item.meaning} />
                </Pressable>
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: "100%",
        backgroundColor: Theme.colors.background
    },
    searchBox: {
        width: 325,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#758694',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,
        flexDirection: 'row',
    },
    searchInput: {
        color: '#FFF8F3',
        fontSize: Theme.fontSizes.medium,
        marginLeft: 10,
        width: 250,
    },
    image: {
        width: 25,
        height: 25,
    },
})