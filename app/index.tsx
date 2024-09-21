import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";

const index = () => {
  return (
    <SafeAreaView
      className=" flex-1 justify-center items-center  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <Text
        className="text-red-500 text-center font-bold uppercase text-5xl mb-24"
        style={{ fontFamily: "mrgvlovani", color: Colors.yellow }}
      >
        ვინ არის ჯაშუში
      </Text>
      <View className="mt-52">
        <CustomButton
          onPress={() => router.push("/addPlayers")}
          color={Colors.yellow}
          colorOnpress={Colors.lightYellow}
          title="თამაშის დაწყება"
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
