import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface CustomButtonProps {
  onPress?: () => void | undefined;
  title?: string | undefined;
  color: string;
  colorOnpress: string;
  iconName?: any | undefined;
  iconSize?: number | undefined;
  iconColor?: string | undefined;
}

const CustomButton = ({
  onPress,
  title,
  color,
  colorOnpress,
  iconName,
  iconSize,
  iconColor,
}: CustomButtonProps) => {
  const [pressed, setPressed] = useState<boolean>(false);

  return (
    <View>
      <Pressable
        onPress={onPress}
        onPressOut={() => {
          setPressed(false);
        }}
        onPressIn={() => {
          setPressed(true);
        }}
        className="rounded-xl "
        style={{ backgroundColor: pressed ? `${colorOnpress}` : `${color}` }}
      >
        {title && (
          <Text className="  text-xl text-center py-3 uppercase tracking-wider px-8 ">
            {title}
          </Text>
        )}
        {iconName && (
          <MaterialIcons size={iconSize} name={iconName} color={iconColor} />
        )}
      </Pressable>
    </View>
  );
};

export default CustomButton;
