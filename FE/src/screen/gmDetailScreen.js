import { View, Text, StyleSheet, ScrollView } from "react-native"
import data from "../data/article.json"
import Article from "../components/article"
import GrammarBox from "../components/GrammarBox"
import CustomImage from "../components/CustomImage"

export default GmDetailScreen = ({ route }) => {
    const id = route.params.item.article_id
    const grammar = route.params.item.grammar
    const itemWithId1 = data.find(item => item.id === id);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <GrammarBox title={grammar} />
            {
                itemWithId1.articles.map((item, index) => {
                    if (item.type === 'article') {
                        return <Article key={index} title={item.title} content={item.content} />;
                    } else if (item.type === 'img') {
                        return <CustomImage key={index} source={{ uri: item.url }} />;
                    }
                    return null;
                })
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})