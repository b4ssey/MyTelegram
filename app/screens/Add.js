import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import AppSAV from "../components/AppSAV";
import AppText from "../components/AppText";

function Add(props) {
  return (
    <AppSAV>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // marginVertical: "5%",
        }}
      >
        <Ionicons name="chevron-back" size={12} style={{ paddingEnd: "5%" }} />
        <AppText
          text="New Message"
          opacity={0.9}
          size={36}
          family="SpaceMono_400Regular"
          weight="400"
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          marginVertical: "2.5%",
        }}
      >
        <Ionicons name="chatbox" size={12} />
        <Ionicons name="lock-closed" size={12} />
        <Ionicons name="megaphone" size={12} />
        <Ionicons name="call" size={12} />
        <Ionicons name="md-person" size={12} />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          backgroundColor: "#F3F3F3",
          width: "95%",
          height: 40,
          borderRadius: 25,
          padding: "5%",
          marginVertical: "5%",
        }}
      >
        <Ionicons name="search" size={12} style={{ paddingHorizontal: "5%" }} />
        <AppText
          text="Search"
          opacity={0.3}
          size={15}
          family="SpaceMono_400Regular"
          weight="400"
        />
      </View>
    </AppSAV>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Add;
