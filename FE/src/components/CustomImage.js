import React, { useState, useEffect } from 'react';
import { Image, View, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const CustomImage = ({ source }) => {
  const [ratio, setRatio] = useState(null);

  useEffect(() => {
    const getImageRatio = async () => {
      try {
        const { width, height } = await getImageSize(source.uri);
        if (width && height) {
          setRatio(width / height);
        }
      } catch (error) {
        console.error('Failed to get image size', error);
      }
    };
    if (source && source.uri) {
      getImageRatio();
    }
  }, [source]);

  const getImageSize = (uri) => {
    return new Promise((resolve, reject) => {
      Image.getSize(uri, (width, height) => {
        resolve({ width, height });
      }, (error) => {
        console.error('Failed to get image size', error);
        reject(error);
      });
    });
  };

  if (!source || !source.uri || ratio === null) {
    return <View style={{ width: screenWidth, height: screenWidth / 2, backgroundColor: 'gray' }} />;
  }

  return (
    <Image
      source={source}
      style={{ width: '100%', aspectRatio: ratio }}
      resizeMode="contain"
    />
  );
};

export default CustomImage;
