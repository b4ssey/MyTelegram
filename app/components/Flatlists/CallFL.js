import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Incoming from "../../../assets/incoming.svg";
import Outgoing from "../../../assets/outgoing.svg";
import Missed from "../../../assets/missed.svg";
import Ellipse from "../../../assets/ellipse.svg";
import { SvgXml } from "react-native-svg";
import AppText from "../AppText";

function CallFL({ name, time, duration, status }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.image}>{/* <SvgXml xml={avatar[1]} /> */}</View>
      <View style={{ marginStart: "2.5%", width: "82.5%" }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <AppText
            text={name}
            opacity={0.7}
            size={15}
            family="SpaceMono_700Bold"
            weight="700"
            stylesV={{ paddingVertical: "0.5%" }}
          />
          <AppText
            text={time}
            opacity={0.4}
            size={13}
            family="SpaceMono_400Regular"
            weight="400"
            stylesV={{ paddingVertical: "0.5%" }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            // justifyContent: "space-between",
          }}
        >
          {status == "Incoming" ? (
            <Incoming />
          ) : status == "Outgoing" ? (
            <Outgoing />
          ) : (
            <Missed />
          )}
          <AppText
            text={status}
            opacity={0.4}
            size={13}
            family="SpaceMono_400Regular"
            weight="400"
            stylesV={{ paddingHorizontal: "2.5%" }}
          />
          <View style={{ marginHorizontal: "2.5%" }}>
            <Ellipse />
          </View>
          <AppText
            text={duration}
            opacity={0.4}
            size={13}
            family="SpaceMono_400Regular"
            weight="400"
            // stylesV={{ paddingVertical: "0.5%" }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: "6.66666%",
    backgroundColor: "transparent",
    height: 40,
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 40,
    // backgroundColor: "#CD1C44",
  },
});

export default CallFL;
