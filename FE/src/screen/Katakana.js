import { Text, View } from "react-native"
import AlphabetScreen from "./alphabetScreen"
import katakana from "../data/katakana.json"

export default KatakanaScreen = () => {
    return (
        <View>
            <AlphabetScreen data={katakana} />
        </View>
    )
}