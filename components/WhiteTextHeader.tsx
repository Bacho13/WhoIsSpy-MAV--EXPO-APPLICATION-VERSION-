import Colors from "@/constants/Colors";
import { View, Text } from "react-native";

interface whiteTextProprs {
  text: string;
}

const WhiteTextHeader = ({ text }: whiteTextProprs) => {
  return (
    <View>
      <Text
        className="uppercase text-lg  mb-2"
        style={{ color: Colors.lightGray }}
      >
        {text}
      </Text>
    </View>
  );
};

export default WhiteTextHeader;
