import React from "react";
import { View, StyleSheet } from "react-native";

function AppSvg({ width, height, iconName, style }) {
  return (
    <View style={[styles.container, { width: width, height: height }, style]}>
      {iconName}
    </View>
  );
}

export default AppSvg;
