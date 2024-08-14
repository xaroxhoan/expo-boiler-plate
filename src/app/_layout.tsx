import { Slot, Stack } from "expo-router";
import styled from "rn-css/.";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "../providers/session";

export default function RootLayout() {
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
