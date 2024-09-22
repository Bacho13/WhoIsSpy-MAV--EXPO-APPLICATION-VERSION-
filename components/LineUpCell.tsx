import { View, Text, Pressable } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

interface LineUpCellProps {
  onPress: () => void;
  index: number;
  name: string;
}

const LineUpCell = ({ onPress, index, name }: LineUpCellProps) => {
  return (
    <View className="  p-2 flex-1 flex-row justify-between  bg-cyan-900 my-2 w-fit  rounded-md tracking-widest text-center">
      <Text className=" text-slate-200  uppercase text-lg ">
        {index} {name}
      </Text>
      <Pressable onPress={onPress}>
        <MaterialCommunityIcons name="delete-forever" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default LineUpCell;
