import Colors from "@/constants/Colors";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import CustomButton from "./CustomButton";

const image = require("../assets/imgs/background.webp");

const RegularContent = () => {
  return (
    <View style={regularContentStyles.card}>
      <ImageBackground
        source={image}
        style={{
          borderRadius: 16,
          overflow: "hidden",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Text
          style={{ fontFamily: "mrgvlovani", lineHeight: 65 }}
          className=" text-slate-200  text-justify  text-4xl   uppercase "
        >
          მარი
        </Text>
      </ImageBackground>
    </View>
  );
};

const regularContentStyles = StyleSheet.create({
  card: {
    fontFamily: "mrgvlovani",
    flex: 1,
    backgroundColor: "#b6cff7",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#001a72",
  },
});

const FlippedContent = () => {
  return (
    <View style={[flippedContentStyles.card, { fontFamily: "mrgvlovani" }]}>
      <Text
        style={{ lineHeight: 70 }}
        className=" font-bold line text-slate-200 text-center bold text-5xl uppercase "
      >
        ღუმელი
      </Text>
    </View>
  );
};

const flippedContentStyles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: `${Colors.darkBlue}`,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#001a72",
  },
});

const FlipCard = ({
  isFlipped,
  cardStyle,
  direction = "y",
  duration = 500,
  RegularContent,
  FlippedContent,
}) => {
  const isDirectionX = direction === "x";

  const regularCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [0, 180]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  const flippedCardAnimatedStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(Number(isFlipped.value), [0, 1], [180, 360]);
    const rotateValue = withTiming(`${spinValue}deg`, { duration });

    return {
      transform: [
        isDirectionX ? { rotateX: rotateValue } : { rotateY: rotateValue },
      ],
    };
  });

  return (
    <View>
      <Animated.View
        style={[
          flipCardStyles.regularCard,
          cardStyle,
          regularCardAnimatedStyle,
        ]}
      >
        {RegularContent}
      </Animated.View>
      <Animated.View
        style={[
          flipCardStyles.flippedCard,
          cardStyle,
          flippedCardAnimatedStyle,
        ]}
      >
        {FlippedContent}
      </Animated.View>
    </View>
  );
};

const flipCardStyles = StyleSheet.create({
  regularCard: {
    position: "absolute",
    zIndex: 1,
  },
  flippedCard: {
    backfaceVisibility: "hidden",
    zIndex: 2,
  },
});

export default function flipCard() {
  const isFlipped = useSharedValue(false);
  const [shown, setShown] = useState<boolean>(false);

  const handlePress = () => {
    isFlipped.value = !isFlipped.value;
    setShown(!shown);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlipCard
        isFlipped={isFlipped}
        cardStyle={styles.flipCard}
        FlippedContent={<FlippedContent />}
        RegularContent={<RegularContent />}
      />
      <View className="mt-20">
        {shown ? (
          <CustomButton
            title={"დახურე"}
            color={Colors.red}
            colorOnpress={Colors.red}
            onPress={handlePress}
          />
        ) : (
          <CustomButton
            title={"მაჩვენე"}
            color={Colors.blue}
            colorOnpress={Colors.lightBlue}
            onPress={handlePress}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  toggleButton: {
    backgroundColor: "#b58df1",
    padding: 12,
    borderRadius: 48,
  },
  toggleButtonText: {
    color: "#fff",
    textAlign: "center",
  },
  flipCard: {
    width: 329,
    height: 200,
  },
});
