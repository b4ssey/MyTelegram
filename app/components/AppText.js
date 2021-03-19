import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppText({
  text,
  opacity,
  size,
  family,
  weight,
  stylesV,
  color = "#000000",
}) {
  return (
    <View style={[stylesV, { opacity: opacity }]}>
      <Text
        style={[
          {
            fontSize: size,
            fontFamily: family,
            fontWeight: weight,
            color: color,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppText;
