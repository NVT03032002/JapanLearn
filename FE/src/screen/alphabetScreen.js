import { View, StyleSheet, Pressable, Text, FlatList } from "react-native"
import { Theme } from "../../assets/Theme"

export default AlphabetScreen = ({ data, ...props }) => {
    const view = ({ item }) => (
        (item.word !== '') ? (
            <View style={styles.cell}>
                <Text style={styles.text}>{item.word}</Text>
                <Text style={styles.text}>{item.spell}</Text>
            </View>
        ) : (
            <View style={styles.empty} />)
    )

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={view}
                keyExtractor={item => item.key}
                numColumns={5}
                columnWrapperStyle={styles.list}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 0 }} />}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        list: {
            justifyContent: 'space-between',
        },
        cell: {
            width: '15%',
            margin: 5,
            padding: 10,
            backgroundColor: Theme.colors.text,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
        },
        empty: {
            width: '15%',
            margin: 5,
            padding: 10,
        },
        text: {
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold'
        },
        header: {
            width: '100%',
            height: 75,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        header_title: {
            fontSize: 20,
            fontWeight: 'bold',
        }
    }
)
