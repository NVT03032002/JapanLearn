import { View, Text, StyleSheet } from "react-native"
import { Theme } from "../../assets/Theme"

export default CustomBox = ({ title, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 75,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        height: '100%',
        borderWidth: 1
    }
})