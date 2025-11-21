import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  useWindowDimensions, // 1. นำเข้า useWindowDimensions เพื่อหาขนาดหน้าจอ
} from "react-native";
import React from "react";
import { products } from "../data/product";

const HomeScreen = ({ navigation }: any) => {
  // 2. ดึงความกว้างของหน้าจอมาใช้
  const { width: windowWidth } = useWindowDimensions();

  // 3. กำหนดจำนวนคอลัมน์ตามความกว้างหน้าจอ (Responsive Breakpoints)
  let numColumns = 2; // มือถือ (default)
  let imageContainerHeight = "h-40"; // ความสูงรูปบนมือถือ (160px)

  if (windowWidth >= 1024) {
    // จอคอมพิวเตอร์/แท็บเล็ตแนวนอน (ใหญ่กว่า 1024px)
    numColumns = 4;
    imageContainerHeight = "h-56"; // เพิ่มความสูงรูปบนจอใหญ่ (224px)
  } else if (windowWidth >= 768) {
    // แท็บเล็ตแนวตั้ง (ใหญ่กว่า 768px)
    numColumns = 3;
    imageContainerHeight = "h-48"; // เพิ่มความสูงรูปบนแท็บเล็ต (192px)
  }

  // คำนวณความกว้างของการ์ดแต่ละใบ
  // (windowWidth - padding รวม 48px) หารด้วยจำนวนคอลัมน์ ลบด้วย gap ประมาณ 10px
  const cardWidth = (windowWidth - 48) / numColumns - 10;

  return (
    <ScrollView className="flex-1 bg-[#FBFBFB]">
      <View className="p-6">
        <Text className="text-4xl font-bold text-gray-800 mb-2">ร้านค้า</Text>
        <Text className="text-lg text-gray-600 mb-6">
          เลือกสินค้าที่คุณสนใจ
        </Text>

        {/* Banner */}
        <View className="bg-[#E8F9FF] rounded-2xl p-5 border-2 border-[#C4D9FF] mb-8">
          <Text className="text-indigo-900 font-bold text-lg mb-2">
            สินค้าแนะนำ
          </Text>
          <Text className="text-indigo-700/70 text-sm">
            คัดสรรมาเพื่อคุณโดยเฉพาะ
          </Text>
        </View>

        <View className="flex-row flex-wrap justify-between">
          {products.map((p, index) => (
            <TouchableOpacity
              key={p.id}
              // 4. ใช้ style เพื่อกำหนดความกว้างที่คำนวณมา แทนการใช้ w-[48%]
              style={{ width: cardWidth }}
              className="bg-white mb-5 rounded-3xl border border-[#E8F9FF] overflow-hidden shadow-sm hover:shadow-md transition-all" // เพิ่ม hover effect เล็กน้อยสำหรับเว็บ
              onPress={() => navigation.navigate("Detail", { product: p })}
            >
              {/* 5. ปรับส่วนแสดงรูปภาพ:
                 - ใช้ imageContainerHeight ที่กำหนดตามขนาดจอ
                 - เปลี่ยนสีพื้นหลังเป็น bg-white หรือ bg-gray-50 เพื่อให้ดูสะอาดตาเวลาใช้ contain
              */}
              <View className={`${imageContainerHeight} bg-white justify-center items-center p-2`}>
                <Image
                  source={{ uri: p.image }}
                  className="w-full h-full"
                  // 6. หัวใจสำคัญ: เปลี่ยนเป็น "contain" เพื่อให้เห็นภาพครบไม่โดนตัด
                  resizeMode="contain"
                />
              </View>
              
              <View className="p-4">
                <Text className="text-xs text-[#6d5ec7] font-bold uppercase tracking-wider mb-1">
                  {p.category}
                </Text>
                <Text
                  className="text-base font-bold text-gray-800 mb-2 h-12" // เพิ่ม h-12 เพื่อให้ชื่อสินค้า 2 บรรทัดมีความสูงเท่ากันทุกการ์ด
                  numberOfLines={2}
                >
                  {p.name}
                </Text>
                <Text className="text-xl font-extrabold text-[#6d5ec7] mb-3">
                  {p.price}
                </Text>
                <View className="flex-row items-center">
                  <View className="bg-[#C5BAFF]/20 rounded-full px-3 py-1">
                    <Text className="text-xs text-[#6d5ec7] font-bold">
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