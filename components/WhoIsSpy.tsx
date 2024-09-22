import { View, Text } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const WhoIsSpy = () => {
  return (
    <View>
      <Text
        className="text-center font-bold uppercase text-5xl mb-24"
        style={{ fontFamily: "mrgvlovani", color: Colors.yellow }}
      >
        ვინ არის ჯაშუში
      </Text>
    </View>
  );
};

export default WhoIsSpy;
