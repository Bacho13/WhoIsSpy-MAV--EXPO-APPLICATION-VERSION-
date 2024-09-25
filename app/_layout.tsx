import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../state/store";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    mrgvlovani: require("../assets/fonts/bpg-mrgvlovani-webfont.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;
  if (!fontsLoaded && !error) return null;

  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="addPlayers" options={{ headerShown: false }} />
        <Stack.Screen name="gamePage" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default _layout;
