import { View, Text } from "react-native";

export default function First() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f1f5f9",
      }}
    >
      <Text
        style={{
          fontSize: 16,
          letterSpacing: 1.5,
        }}
      >
        First Screen
      </Text>
    </View>
  );
}
