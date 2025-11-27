import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { products } from "../data/product";

const HomeScreen = ({ navigation }: any) => {
  const { width: windowWidth } = useWindowDimensions();

  let numColumns = 2;
  let imageContainerHeight = "h-40";

  if (windowWidth >= 1024) {
    numColumns = 4;
    imageContainerHeight = "h-56";
  } else if (windowWidth >= 768) {
    numColumns = 3;
    imageContainerHeight = "h-48";
  }

  const cardWidth = (windowWidth - 48) / numColumns - 10;

  return (
    <ScrollView className="flex-1 bg-[#F5EFFF]">
      <View className="p-6">
        <Text className="text-4xl font-bold text-gray-800 mb-2">ร้านค้า</Text>
        <Text className="text-lg text-gray-600 mb-6">
          เลือกสินค้าที่คุณสนใจ
        </Text>

        <View className="bg-[#E5D9F2] rounded-2xl p-5 border-2 border-[#CDC1FF] mb-8">
          <Text className="text-[#A294F9] font-bold text-lg mb-2">
            สินค้าแนะนำ
          </Text>
          <Text className="text-[#A294F9]/80 text-sm">
            คัดสรรมาเพื่อคุณโดยเฉพาะ
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {products.map((p, index) => (
            <TouchableOpacity
              key={p.id}
              style={{ width: cardWidth }}
              className="bg-white mb-5 rounded-3xl border border-[#E5D9F2] overflow-hidden shadow-sm transition-all"
              onPress={() => navigation.navigate("Detail", { product: p })}
            >
              <View
                className={`${imageContainerHeight} bg-white justify-center items-center p-2`}
              >
                <Image
                  source={{ uri: p.image }}
                  className="w-full h-full"
                  resizeMode="contain"
                />
              </View>

              <View className="p-4">
                <Text className="text-xs text-[#A294F9] font-bold uppercase tracking-wider mb-1">
                  {p.category}
                </Text>
                <Text
                  className="text-base font-bold text-gray-800 mb-2 h-12"
                  numberOfLines={2}
                >
                  {p.name}
                </Text>
                <Text className="text-xl font-extrabold text-[#A294F9] mb-3">
                  {p.price}
                </Text>
                <View className="flex-row items-center">
                  <View className="bg-[#CDC1FF]/30 rounded-full px-3 py-1">
                    <Text className="text-xs text-[#A294F9] font-bold">
                      คงเหลือ {p.stock} ชิ้น
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;