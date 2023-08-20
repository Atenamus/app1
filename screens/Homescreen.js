import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Homescreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="my-9 ">
      <View className="flex-row pb-3 items-center space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View>
          <Text className="font-bold text-gray-300 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">Current location</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;
