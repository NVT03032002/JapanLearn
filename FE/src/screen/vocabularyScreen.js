import { Image, Pressable, ScrollView, StyleSheet, TextInput, View } from "react-native"
import CustomBox from "../components/CustomBox"
import data from "../data/data.json"
import { Theme } from "../../assets/Theme"

export default VocabularyScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchBox}>
                <Image source={require('../../assets/search.png')} style={styles.image} />
                <TextInput style={styles.searchInput} />
            </View>
            {data.vocabulary.map((item, index) =>
            (
                <CustomBox key={item.id} title={item.word} desc={item.meaning} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: Theme.colors.background,
    },
    searchBox: {
        width: "70%",
        height: 50,
        borderRadius: 10,
        backgroundColor: '#758694',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        // justifyContent:'center'
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