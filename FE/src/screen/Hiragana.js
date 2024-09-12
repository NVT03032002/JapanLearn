import { Text, View } from "react-native"
import AlphabetScreen from "./alphabetScreen"
import hiragana from "../data/hiragana.json"

export default HiraganaScreen = () => {
    return (
        <View>
            <AlphabetScreen data={hiragana} />
        </View>
    )
}