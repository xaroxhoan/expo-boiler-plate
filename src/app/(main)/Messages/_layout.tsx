import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { Drawer } from "expo-router/drawer";
import styled from "rn-css/.";

const MessagesLayout = () => {
  return <Drawer drawerContent={CustomDrawerContent} />;
};

const CustomDrawerContent: React.FC<any> = (props) => {
  const router = useRouter();

  return (
    <ScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="reset" onPress={() => router.navigate("/Draw2")} />
    </ScrollView>
  );
};
const ScrollView = styled(DrawerContentScrollView)`
  background-color: antiquewhite;
`;
export default MessagesLayout;
