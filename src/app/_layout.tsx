import { Slot, Stack } from "expo-router";
import styled from "rn-css/.";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "../providers/session";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

export default function RootLayout() {
  const [loaded, error] = useFonts({
    IRANSans: require("../../assets/fonts/iransans/ttf/IRANSansWeb.ttf"),

    Aban: require("../../assets/fonts/aban/aban.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <SessionProvider>
          <Slot />
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}

const Container = styled.View`
  flex: 1;
`;
