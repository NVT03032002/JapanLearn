import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native"
import { Theme } from "../../assets/Theme"

export default CustomBoxCopy = ({ latinWords, hiraganaWords, vietWords, playSound, filename, onPress, ...props }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.arenaContent} onPress={onPress}>
                <View style={styles.content}>
                    <Text style={styles.latinWords} numberOfLines={1}>{latinWords}</Text>
                    <Text style={styles.hiraganaWords} numberOfLines={1}>{hiraganaWords}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.description}>
                    <Text style={styles.vietWords} numberOfLines={1}>{vietWords}</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.arenaPlayButton}>
                <TouchableOpacity onPress={() => playSound(filename)}>
                    <Image source={require('../../assets/headphone.png')} style={styles.viewImage} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,

        minHeight: 100,
        width: "80%",
        borderRadius: 10,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginVertical: 7,

        flexDirection: 'row',

    },
    arenaContent: {
        flex: 3,
        height: '100%',
    },
    arenaPlayButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewImage: {
        width: 30,
        height: 30,
    },

    content: {
        flex: 2,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        borderColor: 'gray'
    },
    description: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    latinWords: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 5,
    },
    vietWords: {
        fontSize: 14,
        color: '#808080',
    }
})