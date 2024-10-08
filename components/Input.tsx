import { View, Text, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

interface InputProps {
  onChangeText: (arg0: any) => void;
  userInput?: string | undefined;
}

const Input = ({ onChangeText }: InputProps) => {
  const [userInput, setUserInput] = useState<string>("");
  const playersGroup = useSelector((state: RootState) => state.players.players);

  const [internalInput, setInternalInput] = useState<string>("");

  const handleChange = (text: string) => {
    setInternalInput(text); // Update internal state
    onChangeText(text); // Call the parent function
  };

  useEffect(() => {
    setInternalInput("");
  }, [playersGroup]);

  return (
    <View>
      <TextInput
        maxLength={20}
        value={internalInput}
        onChangeText={handleChange}
        className="  border h-10  rounded-lg tracking-widest text-base text-red-400  "
        style={{
          borderColor: "#31c3bd",
          color: "#31c3bd",
          textAlign: "center",
        }}
      />
    </View>
  );
};

export default Input;
