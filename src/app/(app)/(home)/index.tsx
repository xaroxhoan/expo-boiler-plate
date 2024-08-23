import { Button, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { setLogout } from "~/store/auth";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>home page</Text>
      <Button title="logout" onPress={() => dispatch(setLogout())} />
    </View>
  );
};
export default Home;
