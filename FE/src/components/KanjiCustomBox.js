import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"

export default KanjiCustomBox = ({ pronounce, title, desc, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={{ borderLeftWidth: 0.5, paddingLeft: 20, }}>
                <View style={{ flexDirection: 'row', }}>
                    {pronounce.map((item, index) =>
                    (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Text style={styles.pronounce}>{item}</Text>
                            <Text style={{ marginHorizontal: 5 }}>/</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // shadowColor: '#171717',
        // shadowOffset: { width: 2, height: 4 },
        // shadowOpacity: 0.2,
        // shadowRadius: 3,
        // elevation: 5,

        width: 325,
        height: 70,
        borderRadius: 10,
        backgroundColor: Theme.colors.secondary,
        marginVertical: 10,
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000',
        height: 50,
        width: 50,
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        marginRight: 20,
    },
    desc: {
        fontSize: 18,
        color: '#808080',
    },
    pronounce: {
        fontSize: 16,
        color: '#808080',
    },
})