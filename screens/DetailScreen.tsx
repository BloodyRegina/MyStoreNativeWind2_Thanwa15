import { View, Text, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import React from 'react';

const DetailScreen = ({ route, navigation }: any) => {
  const { product } = route.params;

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <View className="flex-1 bg-[#FBFBFB]">
      {/* === ส่วนปุ่มย้อนกลับ (Back Button) === 
        ย้ายออกมาไว้นอก ScrollView เพื่อให้มัน "ลอย" อยู่ข้างบนเสมอ 
        แม้จะเลื่อนหน้าจอลงไปดูรายละเอียดด้านล่าง ปุ่มก็จะไม่หายไป 
      */}
      <TouchableOpacity 
          onPress={() => navigation.goBack()} 
          // จัดตำแหน่ง: ลอยอยู่มุมซ้ายบน (absolute), พื้นหลังขาว, กลม, มีเงา
          className="absolute top-12 left-6 z-50 bg-white w-12 h-12 rounded-full justify-center items-center shadow-lg border border-gray-100"
          // hitSlop: เพิ่มพื้นที่รับสัมผัสรอบๆ ปุ่มอีก 20px (กดเฉียดๆ ก็โดน)
          hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          style={{ elevation: 5 }} // เงาสำหรับ Android
      >
          {/* ใช้สัญลักษณ์ลูกศรที่ดูเป็นสากลมากขึ้น */}
          <Text className="text-[#6d5ec7] font-bold text-2xl pb-1">
            ←
          </Text>
      </TouchableOpacity>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        
        {/* --- Image Section --- */}
        <View className="bg-[#C4D9FF] w-full h-96 justify-center items-center rounded-b-[40px] shadow-sm mb-6 overflow-hidden">
          <Image
            source={{ uri: product.image }}
            className="w-full h-full"
            resizeMode="contain" 
          />
        </View>

        {/* --- Content Section --- */}
        <View className="px-6 pb-10">
          
          {/* Header: Category & Stock */}
          <View className="flex-row justify-between items-start mb-3">
              <View className="bg-[#E8F9FF] rounded-full px-4 py-1 border border-[#C4D9FF]">
                  <Text className="text-[#6d5ec7] font-bold text-xs uppercase tracking-wide">
                      {product.category}
                  </Text>
              </View>
              <View className="flex-row items-center bg-white px-3 py-1 rounded-full border border-gray-100 shadow-sm">
                  <View className={`w-2 h-2 rounded-full mr-2 ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></View>
                  <Text className="text-gray-500 text-xs font-medium">
                      {product.stock > 0 ? `คงเหลือ ${product.stock}` : 'สินค้าหมด'}
                  </Text>
              </View>
          </View>

          <Text className="text-3xl font-bold text-gray-800 mb-2 leading-tight">
            {product.name}
          </Text>

          <Text className="text-4xl font-extrabold text-[#6d5ec7] mb-6">
            ฿{formatPrice(product.price)}
          </Text>

          {/* --- Description --- */}
          <View className="mb-6">
              <Text className="text-lg font-bold text-gray-800 mb-2">รายละเอียดสินค้า</Text>
              <Text className="text-gray-600 leading-7 text-base font-light">
                  {product.description}
              </Text>
          </View>

          {/* --- Features --- */}
          <View className="mb-10">
              <Text className="text-lg font-bold text-gray-800 mb-3">คุณสมบัติเด่น</Text>
              <View className="flex-row flex-wrap gap-2">
                  {product.features.map((feature, index) => (
                      <View 
                          key={index} 
                          className="bg-white border border-[#E8F9FF] rounded-xl px-4 py-3 shadow-sm flex-row items-center"
                      >
                          <View className="w-2 h-2 bg-[#C5BAFF] rounded-full mr-2" />
                          <Text className="text-gray-600 text-sm font-medium">
                             {feature}
                          </Text>
                      </View>
                  ))}
              </View>
          </View>

          {/* --- Action Button --- */}
          <TouchableOpacity 
              className="bg-[#6d5ec7] py-4 rounded-2xl items-center shadow-xl shadow-indigo-200 active:bg-indigo-700 active:scale-95 transform transition"
              onPress={() => alert(`เพิ่ม ${product.name} ลงตะกร้าแล้ว`)}
          >
            <Text className="text-white font-bold text-xl tracking-widest">
              เพิ่มลงตะกร้า
            </Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;