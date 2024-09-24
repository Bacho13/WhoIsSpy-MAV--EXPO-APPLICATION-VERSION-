import { View, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface RedTextProps {
  text: string;
}

const RedText = ({ text }: RedTextProps) => {
  return (
    <View className="w-64 text-center items-center ">
      <Text
        style={{ color: Colors.red }}
        className="text-lg tracking-widest uppercase  text-center"
      >
        {text}
      </Text>
    </View>
  );
};

export default RedText;
