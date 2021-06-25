import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";

export default function App() {
  const [state, setState] = useState({
    pickupCords: {
      latitude: 22.0869,
      longitude: 79.5435,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropCords: {
      latitude: 21.7496,
      longitude: 79.3353,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const { pickupCords, dropCords } = state;

  return (
    <View style={styles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={ pickupCords }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
