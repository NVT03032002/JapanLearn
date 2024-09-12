import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { Theme } from "../../assets/Theme";

export default LessonScreen = ({ navigation }) => {
    const CustomView = ({ text, icon }) => (
        <View style={styles.view}>
            <View style={styles.viewCircle}>
                {/* <Image source={require('../../assets/headphone.png')} style={styles.viewImage} /> */}
            </View>
            <Text style={styles.viewText}>{text}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.grid}>
                <Pressable onPress={() => navigation.navigate('Vocabulary')}>
                    <CustomView text={'Từ vựng'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Grammar')}>
                    <CustomView text={'Ngữ pháp'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Kanji')}>
                    <CustomView text={'Kanji'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Listen')}>
                    <CustomView text={'Luyện nghe'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Test')}>
                    <CustomView text={'Test'} />
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Test')}>
                    <CustomView text={'More'} />
                </Pressable>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
        justifyContent: 'center',
        alignItems: 'center',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 10,
    },
    view: {
        width: 140,
        height: 140,
        margin: 10,
        borderRadius: 10,
        backgroundColor: Theme.colors.primary,
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

    },
    viewText: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 10,
        fontWeight: 'bold',
        fontSize: Theme.fontSizes.large,
    },
    viewImage: {
        width: 30,
        height: 30,
    },
    viewCircle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 3
    }
});
