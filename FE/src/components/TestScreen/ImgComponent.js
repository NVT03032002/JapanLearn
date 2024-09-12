import { Image, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const ImgComponent = ({ src }) => {
    const ratio = 1654 / 2339; // Tỉ lệ khung hình cố định

    return (
        <View style={{width: screenWidth }}>
            <Image
                source={src}
                style={{
                    width: "100%",
                    height: 'auto',
                    aspectRatio: ratio,
                }}
                resizeMode="contain"
            />
        </View>
    );
};

export default ImgComponent;
