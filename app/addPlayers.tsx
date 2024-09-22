import { View, Text, ScrollView, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "@/constants/Colors";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import LineUpCell from "@/components/LineUpCell";
import Input from "@/components/Input";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/state/store";
// import { changeName } from "@/state/players/playersSlice";

interface Player {
  id: string; // or number, depending on your needs
  name: string;
}

const addPlayers = () => {
  const [userInput, setUserInput] = useState<string>("");
  const [players, setPlayers] = useState<Player[]>([]);

  const playersGroup = useSelector((state: RootState) => state.players.players);
  const dispatch = useDispatch();

  const removePLayer = (id: string) => {
    setPlayers((prevPlayers) =>
      prevPlayers.filter((player) => player.id !== id)
    );
  };

  const addPlayers = () => {
    if (userInput?.trim() !== "") {
      const newPlayer: Player = {
        id: Date.now().toString(),
        name: userInput,
      };
      setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
      setUserInput("");
    }
  };

  useEffect(() => {
    console.log(playersGroup);
  }, []);

  return (
    <SafeAreaView
      className="flex-1 justify-between items-center  "
      style={{ backgroundColor: Colors.bgColor }}
    >
      <View className="w-12 self-start ml-3 mt-2">
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
        <ScrollView
          className="mt-4  w-4/5"
          showsVerticalScrollIndicator={false}
        >
          {playersGroup.map((player, index) => (
            <LineUpCell
              key={player.id}
              name={player.name}
              index={index + 1}
              onPress={() => {
                removePLayer(player.id);
              }}
            />
          ))}
        </ScrollView>
      ) : (
        <View className="w-64 text-center items-center ">
          <Text
            style={{ color: Colors.red }}
            className="text-lg tracking-widest uppercase  text-center"
          >
            უნდა იყოს მინიმუმ 3 და მაქსიმუმ 10 მოთამაშე
          </Text>
        </View>
      )}

      <View className="w-4/5 h-64 justify-between mb-5 ">
        <View>
          <Text
            className="uppercase text-lg  mb-2"
            style={{ color: Colors.lightGray }}
          >
            მოთამაშის სახელი
          </Text>

          <Input onChangeText={setUserInput} userInput={userInput} />
        </View>
        <CustomButton
          title="დამატება"
          color={Colors.yellow}
          colorOnpress={Colors.lightYellow}
          onPress={addPlayers}
        />
      </View>
    </SafeAreaView>
  );
};

export default addPlayers;
