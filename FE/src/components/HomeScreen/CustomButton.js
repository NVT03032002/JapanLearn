import { StyleSheet, View } from "react-native"

export default CustomButton = ({text}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => navigation.navigate('Vocabulary')} style={{ marginLeft: 35 }}>
                <CustomView text={text} icon={'headphone'} />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '35%',
        height : 75,
    },
})