import "./global.css";
import React from "react"; // อย่าลืม import React
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen"

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 2. แยก Stack ออกมาเป็น Component เพื่อประสิทธิภาพที่ดีกว่า
function HomeStackScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#3b82f6" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#3b82f6",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            borderTopColor: "#e5e7eb",
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
        }}
      >
        {/* 3. เรียกใช้ HomeStackScreen ที่เราแยกไว้ */}
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            title: "Home", // ชื่อที่จะโชว์ใต้ปุ่ม Tab
            headerShown: false, // ซ่อน Header ของ Tab (เพราะเรามี Header ของ Stack แล้ว)
            tabBarIcon: ({ color, size }) => (
              // ใช้ Text ธรรมดาแทน Icon ชั่วคราว
              <span style={{ fontSize: size, color }}>Home-icons</span>
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            title: "Cart", // ชื่อที่จะโชว์ใต้ปุ่ม Tab
            headerTitle: "Cart",
            tabBarIcon: ({ color, size }) => (
              // ใช้ Text ธรรมดาแทน Icon ชั่วคราว
              <span style={{ fontSize: size, color }}>Cart-icons</span>
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Profile", // ชื่อที่จะโชว์ใต้ปุ่ม Tab
            headerTitle: "Profile",
            tabBarIcon: ({ color, size }) => (
              // ใช้ Text ธรรมดาแทน Icon ชั่วคราว
              <span style={{ fontSize: size, color }}>Profile-icons</span>
            ),
          }}
        />

        {/* คุณสามารถเพิ่ม Tab อื่นๆ ต่อตรงนี้ได้ เช่น Settings */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
