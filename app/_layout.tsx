import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";

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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="addPlayers" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
