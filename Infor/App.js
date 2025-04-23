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
        style={styles.image}
        />
      <View > 
        <Text style={styles.id}>@buiminhtuandat</Text>
      </View>
      <View  style={styles.content}>
        <View > 
          <Text style={styles.label}>Tên:</Text>
          <Text style={styles.text}>Bùi Minh Tuấn Đạt</Text>
        </View>
        <View > 
          <Text style={styles.label}>Quê quán:</Text>
          <Text style={styles.text}>Thái Thụy, Thái Bình</Text>
        </View>
        <View > 
          <Text style={styles.label}>Trường:</Text>
          <Text style={styles.text}>Đại học FPT Hà Nội</Text>
        </View>
        <View > 
          <Text style={styles.label}>Sở thích:</Text>
          <Text style={styles.text}>Chơi game, chế tạo</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f4ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: 300,
    height: 250,
    marginTop: 30,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderColor: '#20232a',
    backgroundColor: '#fff',
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  label: {
    marginTop: 10,
    color: '#888',
    fontSize: 14,
    marginBottom: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  header: {
    fontSize: 30,
    color: '#496580',
    fontWeight: 'bold',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 20,
    borderRadius: 120 / 2,
    borderWidth: 3,
    borderColor: '#2460a7',
  },
  id: {
    color: '#888',
    fontSize: 14,
    letterSpacing: 1,
  },
});
