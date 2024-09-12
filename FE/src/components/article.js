import { StyleSheet, Text, View } from "react-native"
import { Theme } from "../../assets/Theme"

export default Article = ({ title, content, ...props }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        padding: 5,
        marginTop: 3,
    },
    title: {
        fontSize: Theme.fontSizes.large,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    content: {
        fontFamily: 'monospace',
    }
})