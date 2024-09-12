import { Pressable, StyleSheet, Text, View, Image, ScrollView } from "react-native"
import { Theme, } from "../../assets/Theme"

export default MenuScreen = ({ navigation, api, ...props }) => {
    const isLogin = true;

    const View2 = ({ title }) => (
        <Pressable onPress={() => navigation.navigate('Home')}>
            <View style={styles.view}>
                <Text style={styles.view_title}>{title}</Text>
                <View style={styles.view_image}>
                    <Image source={require('../../assets/lock.png')} style={{ width: 16, height: 16 }} />
                </View>
            </View>
        </Pressable>

    )

    const View1 = ({ title }) => (
        <Pressable onPress={() => navigation.navigate('Lesson')}>
            <View style={styles.view}>
                <Text style={styles.view_title}>{title}</Text>
                <View style={styles.view_image}>
                    <Image source={require('../../assets/right-arrow.png')} style={{ width: 16, height: 16 }} />
                </View>
            </View>
        </Pressable>
    )

    const CustomLesson1 = ({ title }) => (
        <Pressable onPress={() => navigation.navigate('Lesson1')}>
            <View style={styles.view}>
                <Text style={styles.view_title}>{title}</Text>
                <View style={styles.view_image}>
                    <Image source={require('../../assets/right-arrow.png')} style={{ width: 16, height: 16 }} />
                </View>
            </View>
        </Pressable>
    )

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <CustomLesson1 title={'Bài 1'} />
            <View1 title={'Bài 2'} />
            <View1 title={'Bài 3'} />
            <View1 title={'Bài 4'} />
            <View1 title={'Bài 5'} />
            {isLogin ? <View2 title={'Bài 6'} /> : <View1 title={'Bài 6'} />}
            {isLogin ? <View2 title={'Bài 7'} /> : <View1 title={'Bài 7'} />}
            {isLogin ? <View2 title={'Bài 8'} /> : <View1 title={'Bài 8'} />}
            {isLogin ? <View2 title={'Bài 9'} /> : <View1 title={'Bài 9'} />}
            {isLogin ? <View2 title={'Bài 10'} /> : <View1 title={'Bài 10'} />}
            {isLogin ? <View2 title={'Bài 11'} /> : <View1 title={'Bài 11'} />}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexGrow: 1,
        backgroundColor: Theme.colors.background,
        alignItems: 'center',
        paddingVertical: 15,

    },
    view: {
        width: 200,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 15,
        borderRadius: 25,
        backgroundColor: '#049696',
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5,
    },
    view_title: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 25
    },
    view_image: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: 'white',
        marginRight: 25,
        marginLeft: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
})