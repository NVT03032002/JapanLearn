import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"

export default GrammarBox = ({ title, desc, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
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

        width: 325,
        height: 100,
        borderRadius: 10,
        backgroundColor: Theme.colors.background,
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginTop: 50,
        marginBottom: 20,

        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    desc: {
        fontSize: 14,
        color: '#808080',
    }
})