// KanjiScreen.js
import { Image, ScrollView, StyleSheet, TextInput, View } from "react-native";
import data from "../data/data.json";
import { Theme } from "../../assets/Theme";
import Line from "../components/Line";
import KanjiCustomBox from "../components/KanjiCustomBox";

const KanjiScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.searchBox}>
                <Image source={require('../../assets/search.png')} style={styles.image} />
                <TextInput style={styles.searchInput} />
            </View>
            {data.Kanji.map((item) => {
                console.log(item.id);
                return (
                    <KanjiCustomBox 
                    key={item.id} 
                    title={item.kanji} 
                    desc={item.meaning} 
                    pronounce={item.pronounce} />
                )
                
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: Theme.colors.background,
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
        fontSize: Theme.fontSizes.medium,
        marginLeft: 10,
        width: 250,
    },
    image: {
        width: 25,
        height: 25,
    },
});

export default KanjiScreen;
