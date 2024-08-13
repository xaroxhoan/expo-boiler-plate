import { Slot } from "expo-router";
import { View, Text } from "react-native";
import Header from "../components/Header/Header";
import styled from "rn-css/.";
import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

// this is root layout
// all redux goes here

export default function MainLayout() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Container>
          <Header />
          <Slot />
        </Container>
      </PersistGate>
    </Provider>
  );
}

const Container = styled.View`
  flex: 1;
`;
