import { View, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import LineUpCell from "@/components/LineUpCell";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
import { removePlayer, addPlayer } from "@/state/players/playersSlice";
import RedText from "@/components/RedText";
import Input from "@/components/Input";
import WhiteTextHeader from "@/components/WhiteTextHeader";
// import { changeName } from "@/state/players/playersSlice";

interface Player {
  id: string; // or number, depending on your needs
  name: string;
}

const addPlayers = () => {
  const [userInput, setUserInput] = useState<string>("");
  const playersGroup = useSelector((state: RootState) => state.players.players);
  const dispatch = useDispatch();

  const handleAddPlayer = () => {
    const newPlayer = {
      id: Date.now().toString(),
      name: userInput,
    };
    dispatch(addPlayer(newPlayer));
  };

  return (
    <SafeAreaView
      className="flex-1 justify-between items-center  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <View className=" h-20 w-12 self-start ml-3 mt-2">
        <CustomButton
          color={Colors.lightGray}
          colorOnpress={Colors.gray}
          iconName="arrow-back"
          iconColor="black"
          iconSize={40}
          onPress={() => router.back()}
        />
      </View>
      {playersGroup.length > 0 ? (
        <Scrol />
      ) : (
        <RedText text="უნდა იყოს მინიმუმ 3 და მაქსიმუმ 10 მოთამაშე" />
      )}

      <View className="w-4/5 h-64 justify-between mb-5 ">
        <View>
          <WhiteTextHeader text="მოთამაშის სახელი" />
          <Input onChangeText={setUserInput} userInput={userInput} />
        </View>
        {playersGroup.length > 2 && (
          <CustomButton
            title="თამაშის დაწყება"
            color={Colors.blue}
            colorOnpress={Colors.lightBlue}
          />
        )}
        {playersGroup.length < 10 && (
          <CustomButton
            title="დამატება"
            color={Colors.yellow}
            colorOnpress={Colors.lightYellow}
            onPress={handleAddPlayer}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default addPlayers;

const Scrol = () => {
  const playersGroup = useSelector((state: RootState) => state.players.players);
  const dispatch = useDispatch();
  const scrollViewRef = useRef<ScrollView>(null); // Ref for ScrollView

  const handleRemovePlayer = (id: string) => {
    dispatch(removePlayer(id));
    console.log("clicked to remove");
  };

  // Scroll to the bottom of the list after adding the new player
  setTimeout(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  }, 100); // small delay to ensure rendering
  return (
    <ScrollView
      ref={scrollViewRef}
      className="mt-4  w-4/5"
      showsVerticalScrollIndicator={false}
    >
      {playersGroup.map((player, index) => (
        <LineUpCell
          key={player.id}
          name={player.name}
          index={index + 1}
          onPress={() => {
            if (player.id) {
              // Check if player.id is defined

              handleRemovePlayer(player.id);
            } else {
              console.error("Player ID is undefined");
            }
          }}
        />
      ))}
    </ScrollView>
  );
};
