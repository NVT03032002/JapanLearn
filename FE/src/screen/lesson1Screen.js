import { StyleSheet, View, Text, Pressable } from "react-native"
import { Theme } from "../../assets/Theme"

export default Lesson1Screen = ({navigation}) => {
    return (
        <View style={styles.lowContainer}>
            <View style={{ paddingTop: 10 }}>
                <Text style={styles.text}>Bảng chữ cái abc</Text>
                <View style={styles.row}>
                    <View style={styles.buttonCtn}>
                        <Pressable onPress={() => navigation.navigate('Hiragana')} style={styles.button} />
                        <Text style={styles.buttontxt}>Hira</Text>
                    </View>
                    <View style={styles.buttonCtn}>
                        <Pressable onPress={() => navigation.navigate('Katakana')} style={styles.button} />
                        <Text style={styles.buttontxt}>Kata</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    lowContainer: {
        paddingTop: 25,
        flex: 1,
        backgroundColor: Theme.colors.background,
        width: '100%',
        height: '100%'
    },
    buttonCtn: {
        alignContent: 'center',
        justifyContent: 'center',
    },
    buttontxt: {
        marginTop: 5,
        textAlign: 'center'
    },
    text: {
        fontSize: 18,
        transform: [{ translateY: -12 }, { translateX: 20 }],
        backgroundColor: Theme.colors.background,
        paddingLeft: 5,
        fontFamily: 'monospace',
    },
    row: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '100%',
        marginBottom: 30,
        flexWrap: 'wrap',
    },
    button: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.secondary,
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10,
    },
})