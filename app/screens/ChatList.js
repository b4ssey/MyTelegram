import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppSAV from "../components/AppSAV";
import AppSvg from "../components/AppSvg";
import AppText from "../components/AppText";
import MessageFL from "../components/Flatlists/MessageFL";

dummyData = [
  {
    id: 1,
    name: "Julia Semid",
    text: "Must go, talk to you later",
    unreadCount: "",
    time: "18:21",
  },
  {
    id: 2,
    name: "Joan Chapman",
    text: "Ok, let me know a soon as...",
    unreadCount: "2",
    time: "10:19",
  },
  {
    id: 3,
    name: "James Dullmo",
    text: "Ok, let me know a soon as...",
    unreadCount: "",
    time: "08:34",
  },
  {
    id: 4,
    name: "San Francisco Project",
    text: "Jenna: Ok, let me know a...",
    unreadCount: "6",
    time: "20/06",
  },
  {
    id: 5,
    name: "Kate Munch",
    text: "Ok, let me know a soon as...",
    unreadCount: "",
    time: "19/06",
  },
  {
    id: 6,
    name: "Jake Morgan",
    text: "Ok, let me know a soon as...",
    unreadCount: "",
    time: "19/06",
  },
  {
    id: 7,
    name: "Ski trip",
    text: "Must go, talk to you later",
    unreadCount: "",
    time: "18/06",
  },
  {
    id: 8,
    name: "Dennis Blake",
    text: "Ok, let me know a soon as...",
    unreadCount: "",
    time: "17/06",
  },
];

function ChatList(props) {
  return (
    <AppSAV style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText
          text="Chats"
          opacity={0.9}
          size={36}
          family="SpaceMono_400Regular"
          weight="400"
          //   stylesV={{ paddingVertical: "0.5%" }}
        />
        <AppSvg height={19} width={19} />
      </View>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <MessageFL
              name={item.name}
              message={item.text}
              time={item.time}
              count={item.unreadCount}
            />
          );
        }}
      />
    </AppSAV>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ChatList;
