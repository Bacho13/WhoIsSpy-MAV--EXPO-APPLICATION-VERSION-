import { View, Text } from "react-native";
import Colors from "@/constants/Colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";
import { router } from "expo-router";
import WhoIsSpy from "@/components/WhoIsSpy";

const index = () => {
  return (
    <SafeAreaView
      className=" flex-1 justify-center items-center  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <WhoIsSpy />
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
