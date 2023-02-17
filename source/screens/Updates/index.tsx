import { StyleSheet, Text, View } from 'react-native';

export default function Updates() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Updates</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#c4c4c4',
    fontSize: 32,
    fontWeight: 'bold',
  },
});
