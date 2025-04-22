import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>MY INFORMATION</Text>
      </View>
      <Image
        source={require('./assets/image.jpg')}
        style={{ width: 100, height: 100, margin: 20 }} 
      />
      <View > 
        <Text style={styles.content}>Tên: <Text style={styles.text}>Bùi Minh Tuấn Đạt</Text></Text>
      </View>
      <View > 
        <Text style={styles.content}>Quê quán: <Text style={styles.text}>Thái Thụy, Thái Bình</Text></Text>
      </View>
      <View > 
        <Text style={styles.content}>Trường: <Text style={styles.text}>Đại học FPT Hà Nội</Text></Text>
      </View>
      <View > 
        <Text style={styles.content}>Sở thích: <Text style={styles.text}>Chơi game, chế tạo</Text></Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 300,
    height: 40,
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderWidth: 2,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
    fontWeight: 'normal',
  },
  header: {
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  }
});
