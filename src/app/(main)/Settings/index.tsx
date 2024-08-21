import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Settings = () => {
  return (
    <View>
      <Text>Setting</Text>
      <Link href="/(main)/Settings/modal" asChild>
        <Pressable>
          <Text>Open Modal</Text>
        </Pressable>
      </Link>
    </View>
  );
};
export default Settings;
