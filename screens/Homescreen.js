import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ChevronDownIcon,UserIcon, AdjustmentsVerticalIcon,MagnifyingGlassIcon} from "react-native-heroicons/outline";
const Homescreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-5 my-2">
      <View className="flex-row pb-3 items-center space-x-2 mx-4 justify-center">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 rounded-full"
        />
        <View className="flex-1"> 
          <Text className="font-bold text-gray-300 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl ">Current location
            <ChevronDownIcon size={15} color={"#00CCBB"}/>
          </Text>
          
        </View>
        <UserIcon size={30} color={"#00CCBB"} />
      </View>
      {/* search */}
      <View className="mx-4 flex-row items-center space-x-2 pb-2">
        <View className=" flex-1 flex-row items-center space-x-2 p-2 bg-gray-200">
            <MagnifyingGlassIcon size={25} color={"#00CCBB"}/>
            <TextInput placeholder="Restraunts,Couzine" keyboardType="default"/>
        </View>
        <AdjustmentsVerticalIcon size={25} color={"#00CCBB"}/>
      </View>
      <ScrollView>
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default Homescreen;
