import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Search from "../../assets/search.svg";
import AppSAV from "../components/AppSAV";
import AppText from "../components/AppText";
import CallFL from "../components/Flatlists/CallFL";

const dummyData = [
  {
    id: 1,
    name: "Jane Cooper",
    status: "Incoming",
    duration: "01:34",
    time: "18:21",
  },
  {
    id: 2,
    name: "Robert Fox",
    status: "Outgoing",
    duration: "02:05",
    time: "10:19",
  },
  {
    id: 3,
    name: "Cameron Williamson",
    status: "Missed",
    duration: "",
    time: "08:34",
  },
  {
    id: 4,
    name: "Wade Warren",
    status: "Incoming",
    duration: "01:36:22",
    time: "19/06",
  },
  {
    id: 5,
    name: "Leslie Alexander",
    status: "Incoming",
    duration: "06:58",
    time: "19/06",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    status: "Missed",
    duration: "",
    time: "18/06",
  },
  {
    id: 7,
    name: "Esther Howard",
    status: "Outgoing",
    duration: "11:47",
    time: "17/06",
  },
  {
    id: 8,
    name: "Guy Hawkins",
    status: "Incoming",
    duration: "01:34",
    time: "17/06",
  },
];

function Call(props) {
  const [condition, setCondition] = useState("All");
  const [data, setData] = useState(dummyData);
  useEffect(() => {
    if (condition == "All") setData(dummyData);
    else if (condition == "Missed")
      setData(dummyData.filter((a) => a.status === "Missed"));
  }, [condition]);

  console.log(dummyData.filter((a) => a.status === "Missed"));
  return (
    <AppSAV>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <AppText
            text="Calls"
            opacity={0.9}
            size={36}
            family="SpaceMono_400Regular"
            weight="400"
          />
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: "5%",
              paddingTop: "11%",
            }}
          >
            <TouchableOpacity onPress={() => setCondition("All")}>
              <AppText
                text="All"
                opacity={condition == "All" ? 0.9 : 0.3}
                size={15}
                family="SpaceMono_400Regular"
                weight="400"
                stylesV={{ paddingHorizontal: "2.5%" }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCondition("Missed")}>
              <AppText
                text="Missed"
                opacity={condition == "Missed" ? 0.9 : 0.3}
                size={15}
                family="SpaceMono_400Regular"
                weight="400"
                stylesV={{ paddingHorizontal: "2.5%" }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <Search height={19} width={19} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <CallFL
              name={item.name}
              duration={item.duration}
              time={item.time}
              status={item.status}
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

export default Call;
