import { Text, Pressable, View, StyleSheet, ScrollView } from "react-native"
import { Theme } from "../../assets/Theme";
import UserItem from "../components/HomeScreen/UserItem";

const user = {
    name: 'John Doe', email: 'john@example.com'
}

export default HomeScreen = ({ navigation }) => {
    const Item = ({ title }) => (
        <View style={{
            borderWidth: 1,
            margin: 10,
            padding: 10,
            height: 100,
            borderRadius: 10,
            borderColor: Theme.colors.border,
            backgroundColor: Theme.colors.primary,
            flexDirection: 'row',
        }}>
            <Text style={{
                width: 80,
                textAlignVertical: 'center',
                textAlign: 'center',
                fontSize: 24,
                fontWeight: 'bold',
                fontFamily: 'monospace',
                color: Theme.colors.text,
            }}>{title}</Text>
            <Text>Ghi cái gì đó ở bên này</Text>

        </View>
    )

    return (
        <ScrollView style={styles.container}>
            <UserItem user={user} />
            <View style={styles.lowContainer}>
                <View style={{ paddingTop: 10 }}>
                    {/* <Text style={styles.text}>Khóa học</Text>
                    <Item title={'N5'} />
                    <Item title={'N4'} />
                    <Item title={'N3'} />
                    <Item title={'N2'} /> */}
                    <View style={styles.row}>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N5</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N4</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N3</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N2</Text>
                        </View>
                        <View style={styles.buttonCtn}>
                            <Pressable onPress={() => navigation.navigate('Menu')} style={styles.button} />
                            <Text style={styles.buttontxt}>N1</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Theme.colors.background,
    },
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
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.primary,
        borderWidth: 1,
        borderColor: Theme.colors.border,
        borderRadius: 5,
        marginHorizontal: 5,
        marginTop: 10,
    },
});
