import React, { useEffect, useState } from "react";
import Svg, { Path, Line } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "../AppText";
import { SvgXml } from "react-native-svg";

function MessageFL({ name, message, time, count }) {
  const [avatar, setAvatar] = useState([`<svg></svg>`]);

  console.log(avatar);

  useEffect(() => {
    fetch("https://api.multiavatar.com/v1/" + JSON.stringify(name))
      .then((res) => res.text())
      .then((vtr) => {
        setAvatar((a) => [...a, vtr]);
      })
      .catch((error) => console.error(error));
  }, [fetch]);
  //i make the avatar an array because it first returns undefined
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
            justifyContent: "space-between",
          }}
        >
          <AppText
            text={message}
            opacity={0.5}
            size={15}
            family="SpaceMono_400Regular"
            weight="400"
            stylesV={{ paddingVertical: "0.5%" }}
          />
          {count == "" ? (
            <View></View>
          ) : (
            <View style={styles.bubble}>
              <AppText
                text={count}
                size={10}
                family="SpaceMono_400Regular"
                weight="400"
                color="#FFFF"
              />
            </View>
          )}
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
  bubble: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MessageFL;
