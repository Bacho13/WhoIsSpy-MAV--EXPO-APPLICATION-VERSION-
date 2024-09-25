import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import FlipCard from "../components/FlipCard";

const gamePage = () => {
  return (
    <SafeAreaView
      className="flex-1  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <View className="flex-1 justify-between items-center mx-5 mt-5   ">
        <View className="self-start">
          <CustomButton
            color={Colors.lightGray}
            colorOnpress={Colors.gray}
            iconName="arrow-back"
            iconColor="black"
            iconSize={40}
            onPress={() => router.back()}
          />
        </View>
        <View>
          <FlipCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default gamePage;
