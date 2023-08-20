import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestrauntCard from "./RestrauntCard";
const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color={"#00CCBB"} />
      </View>
      <Text className="text-xs text-gray-200 px-4">{description}</Text>
      <ScrollView
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        <RestrauntCard
        id={1}
        imgurl="https://links.papareact.com/wru"
        title="Sushi"
        rating={4.5}
        genre="japanese"
        address="random"
        short_desc="short description"
        dishes={[]}
        long={20}
        lat={20}
        />
        <RestrauntCard
        id={1}
        imgurl="https://links.papareact.com/wru"
        title="Sushi"
        rating={4.5}
        genre="japanese"
        address="random"
        short_desc="short description"
        dishes={[]}
        long={20}
        lat={20}
        />
        <RestrauntCard
        id={1}
        imgurl="https://links.papareact.com/wru"
        title="Sushi"
        rating={4.5}
        genre="japanese"
        address="random"
        short_desc="short description"
        dishes={[]}
        long={20}
        lat={20}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
