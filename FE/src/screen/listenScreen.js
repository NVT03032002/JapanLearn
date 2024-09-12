import { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Modal, ScrollView } from 'react-native';
import { Audio } from 'expo-av';
import CustomBoxCopy from '../components/CustomBoxCopy';
import data from '../data/listen.json';
import audioMap from '../components/audioMap';

export default ListenScreen = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  async function playSound(filename) {
    try {
      console.log('file name ' + filename);
      const audioFile = audioMap[filename];
      if (!audioFile) {
        console.error('Audio file not found for:', filename);
        return;
      }
      const { sound } = await Audio.Sound.createAsync(audioFile);
      setSound(sound);
      setIsPlaying(true);
      console.log('Playing Sound');
      await sound.playAsync();
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  }


  async function stopSound() {
    if (isPlaying && sound) {
      try {
        console.log('Stopping Sound');
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error('Error stopping sound:', error);
      }
    }
  }

  useEffect(() => {
    return sound
      ? () => {
        console.log('Unloading Sound');
        sound.unloadAsync();
      }
      : undefined;
  }, [sound]);

  const handlePress = (item) => {

    setCurrentItem(item);
    setOpenModal(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <CustomBoxCopy
            key={item.id}
            onPress={() => handlePress(item)}
            latinWords={item.latinWords}
            hiraganaWords={item.hiraganaWords}
            vietWords={item.vietWords}
            filename={item.path}
            playSound={isPlaying ? stopSound : playSound}
          />
        ))}
      </ScrollView>

      <Modal visible={openModal} transparent={true}>
        <View style={styles.content}>
          {currentItem && (
            <View style={styles.card}>
              <Text style={styles.title}>{currentItem.latinWords}</Text>
              <Text style={styles.desc}>{currentItem.hiraganaWords}</Text>
              <Text style={styles.desc}>{currentItem.vietWords}</Text>
              <TouchableOpacity onPress={() => playSound(currentItem.filename)} style={{ alignItems: 'center' }}>
                <Image source={require('../../assets/headphone.png')} style={styles.viewImage} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, { width: "100%", marginTop: 24, backgroundColor: "rgba(0,0,0,0.1)" }]}
                onPress={() => setOpenModal(false)}
              >
                <Text style={[styles.text, { color: "black" }]}>Close</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.7,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 12,
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 8
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    color: "white",
  },
  button: {
    width: "90%",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 8,
    marginTop: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
  },
  viewImage: {
    width: 30,
    height: 30,
  }

});
