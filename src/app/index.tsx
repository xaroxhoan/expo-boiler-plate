import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const { container } = styles;

  return (
    <View style={container}>
      <Text>home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
