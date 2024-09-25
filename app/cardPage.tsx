import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Colors } from "react-native/Libraries/NewAppScreen";

const cardPage = () => {
  return (
    <SafeAreaView
      className=" flex-1 justify-center items-center  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <Text>hello</Text>
    </SafeAreaView>
  );
};

export default cardPage;
